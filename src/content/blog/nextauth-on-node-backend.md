---
title: "How to Configure NextAuth on a NodeJS Backend"
description: "How to Configure NextAuth on a NodeJS Backend"
pubDate: "2023-03-16"
---

Implementing a standalone NextAuth set-up on a NodeJS backend comes with a few caveats, particularly if you aren't using NextJS for your app's frontend.

Colocating your NextAuth project with your NodeJS backend makes sense in situations when an architecture has clear separation between frontend and backend, unlike many popular developer-velocity focussed tools out there now (for example, tRPC). With a backend or ORM (ie Prisma models) being in a completely separate container to our frontend server, it made sense to place it with our GraphQL Yoga, Express, Pothos and Prisma backend app. That way sessions (which are stored in Postgres via Prisma Models) can be accessed easily and it just makes logical sense to have Authentication & Authorisation living with the backend container.

Other reasons you may consider this architecture choice are that you simply aren't using Next.JS for your frontend, but still want the convenience of owning your authentication service with NextAuth. Or you've opt-ed out of server-side rendering altogether and want your client-side SPA to interact with NextAuth on the server.

## Configure NextAuth with Node & Express

### Integration with Express

Here we are setting up a custom Express Middleware function to handle all NextAuth requests.

```
// auth.ts

/**
 * Should match the following paths:
 * /api/auth/signin
 * /api/auth/signin/:provider
 * /api/auth/callback/:provider
 * /api/auth/signout
 * /api/auth/session
 * /api/auth/csrf
 * /api/auth/providers
 * /api/auth/_log
 *
 * See: https://next-auth.js.org/getting-started/rest-api
 */
const authActions =
  /^\/api\/auth\/(session|signin\/?\w*|signout|csrf|providers|callback\/\w+|_log)$/;

const router = Router();

/**
 * Compatibility layer for NextAuth + Express
 *    - Requests come in to Express, here we mangle them into something NextAuth expects
 *    - NextAuth returns actual HTML pages for the various auth screens as well as the typical REST endpoints
 */
export function NextAuthMiddleware(): Router {
  return router
    .use(urlencoded({ extended: false }))
    .use(json())
    .use(cookieParser())
    .all(
      authActions,
      async (req: IncomingMessage, res: ServerResponse, next) => {
        if (req.method !== "POST" && req.method !== "GET") {
          next();
          return;
        }

        req.query.nextauth = req.path.split("/").slice(3) as AuthAction;

        await NextAuth(req, res, NEXTAUTH_OPTIONS);
      }
    );
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the
 * `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 **/
export const getServerAuthSession = async (
  request: ExpressRequest,
  response: ExpressResponse
): ReturnType<typeof getServerSession> => {
  return await getServerSession(request, response, NEXTAUTH_OPTIONS);
};
```

Then, over in your backend project's index file, you'll want to add our NextAuth middleware.

```
// index.ts

app.use(NextAuthMiddleware());
```

### Adding a complete User to GraphQL Yoga's context

Within your API you will likely want to add a complete User to the request's context. Here we are in GraphQL Yoga's `createContext` initialisation and taking the user from the already-validated (in Express Middleware) session and passing that to the context for future use, most often in authorisation logic.

```
// context.ts
/**
 * Context configuration for graphql-yoga
 * @param initialContext includes Yoga & Express context
 * @returns Leesy-decorated context (including validated session and user)
 * @see https://the-guild.dev/graphql/yoga-server/docs/features/context#server-context
 */
export const createContext: TCreateContext = async initialContext => {
  // ...

  const session = initialContext.req.session

  let user: Leesy.User | null = null

  if (session) {
    user = await db.user.findFirst({ where: { id: session.user.id } })
  }

  // ...

  return {
    db,
    session,
    user,
  }
```

### Augmenting TypeScript types

If you're using TypeScript, you probably want to augment NextAuth's types for any custom attributes you have on your `User` model:

```
// next-auth.d.ts

/**
 * Module augmentation for `next-auth` types.
 * Allows us to add custom properties to the `session` object and keep type
 * safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 **/
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      role: UserRole;
    } & DefaultSession["user"];
  }
  interface User {
    role: UserRole;
  }
}
```

### Polyfill fetch

NextAuth depends on having globally-available Fetch. You could polyfill it with any number of libraries (ie: [isomorphic-unfetch](https://github.com/developit/unfetch), [fetch polyfill](https://github.com/github/fetch)) but here we just pass [node-fetch](https://github.com/node-fetch/node-fetch) to the global scope.

```
// Hackery to get NextAuth to play nice with us on a node server
// We won't have to do this in node 18 :) https://nodejs.org/de/blog/announcements/v18-release-announce/#fetch-experimental
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
if (!globalThis.fetch) {
  // @ts-expect-error
  globalThis.fetch = fetch;
  // @ts-expect-error
  globalThis.Headers = Headers;
  // @ts-expect-error
  globalThis.Request = Request;
  // @ts-expect-error
  globalThis.Response = Response;
}
```

### ⚠️ Send your authentication headers!

Your backend won't be able to validate sessions if you don't pass on the necessary authentication headers and cookies! How this looks will depend on your API, but in our case we're set-up with [urql](https://formidable.com/open-source/urql/) for our GraphQL Client. To send the relevant headers over to our API, we simply need to tell urql to pass them on when instantiating the client:

```
const client = createClient({
  url: process.env.API_URL,
  fetchOptions: () => {
    return {
      headers: {
        // if using JWT tokens you can send them this way
        Authorization: token ? `Bearer ${token}` : "",
        // any other custom headers can be sent like this
        // ...(options?.headers ? options.headers : {})
      },
      credentials: "include",
    };
  },
});
```

### TypeScript builds

Unfortunately NextAuth isn't quite _fully_ extracted from its NextJS dependencies, so I found I needed to add a few NPM `devDependencies` to get the TypeScript build working:

```
  // package.json
  // ...
  "devDependencies": {
    "@types/cookie": "^0.5.1",
    "@types/cookie-parser": "^1.4.3",
    "@types/express": "^4.17.17",
    "@types/node-fetch": "^2.6.2",
    "@types/nodemailer": "^6.4.7",
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11"
  }
  // ...
```
