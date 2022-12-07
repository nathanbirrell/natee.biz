---
title: "Improving Node.js Lambda Performance"
date: 2022-12-05
layout: layouts/blogpost.njk
tags: post
---

In this post I plan to share some ideas around improving the performance of Node.js Lambda functions. It's common in cloud-native software applications to have chains of interlinked services, so it's increasingly important for Lambdas to be performant. In our case, we have a range of Lambda resolvers for an AWS AppSync GraphQL API which have become a bottleneck for our page-load times.

Before getting into it, there are a couple of quick wins you can consider to improve latency:

1. Migrate processor architecture from [x86 to Arm AWS Graviton 2 processors](https://aws.amazon.com/blogs/compute/migrating-aws-lambda-functions-to-arm-based-aws-graviton2-processors/). Assuming the functions don't run architecture-specific binaries or dependencies, this could be a trivial change.
1. Reassess RAM allocation. Depending on the duration at varying memory allocations, it may end up cost effective to increase the memory allocated to each function. Be sure to [check the costs associated](https://docs.aws.amazon.com/lambda/latest/operatorguide/computing-power.html) with each change.

## Bundle Size

A major factor in the initialisation of Javascript functions, the larger the bundle the slower your Lambda's initialisation times, particularly in the event of cold starts. To bring this down, there are a few things to consider.

### Build tooling

Switching to modern Javascript build tooling is fundamental to your toolchain. Tools like [esbuild](https://esbuild.github.io/getting-started/) and [Rollup.js](https://rollupjs.org/guide/en/) provide many benefits for packaging your app, such as fast compilation times, minification, tree-shaking and more.

These can and should be used with Typescript functions too. However, it might still be useful to continue using Typescript's `tsc` function in CI environments for better error messages. We saw a very significant bundle size improvement switching from the basic `tsc` transpilation command to esbuild, with all the features that brings with it.

### Dependencies and module resolution

Chances are, the function makes use of AWS SDK. Version 3 of the SDK brings [many features](https://github.com/aws/aws-sdk-js-v3#new-features), including modularised packages and better performance. See the docs for their tips on using [specific imports](https://github.com/aws/aws-sdk-js-v3#modularized-packages) which will bring down bundle size.

Assess the rest of the functions dependencies. Be rigorous about which are absolutely necessary, which have smaller alternatives and so on. There are also [tools](https://bundle-buddy.com/) to help diagnose the source of large dependencies as well.

## Code improvements

The more complex and likely beneficial area of improving performance of these functions is actual code changes. This is a wide-ranging topic, so I'll keep it brief here.

Beware of **asynchronous functions**. Think deeply about the logic in your function, step-by-step to determine which code blocks need to wait for certain promises to resolve and which can to continue run in parallel. Do you have multiple consecutive async methods, and can those run concurrently? All this logic is unique to your application and need to be evaluated to build a performant Lambda function.

Investigate **caching** for your app. If there are data sources that lend themselves to caching it might be a good idea to leverage it to speed things up.

Evaluate your app's **architecture**. It's common in cloud-native environments to have a deep web of different AWS services, all single-purpose and isolated. Simplifying the number of jumps between services and APIs can greatly improve response times, as well as adding queuing for things that may be a bit longer-running. For example, we had a fairly typical AWS Appsync GraphQL API with typical Lambda resolvers, but found that we could switch many of the more straightforward ones over to [HTTP Resolvers](https://docs.aws.amazon.com/appsync/latest/devguide/tutorial-http-resolvers.html), eliminating a step in the request chain.

## Monitoring

Without being able to track the latency of your Lambda, you're left in the dark with how much effect your changes are making. Be sure to have some monitoring in place on your Lambdas, be that Datadog, X-Ray, Cloudwatch or anything that tracks the app's latency.

<img src="/img/posts/improve-typescript-node-lambda-performance/x-ray.jpg" alt="An example X-Ray of AWS service calls">

Monitoring tools like X-Ray really help to diagnose exactly which services are slowing your software down, or better yet, help to identify things that can be removed entirely.

---

That's an overview on how to improve performance with Node.JS Lambda functions. It's a little bit general because each application has a unique architecture and special traits, these are just some of the common things I look through to assess areas for improvement.

## Further Reading

https://aws.amazon.com/blogs/compute/optimizing-node-js-dependencies-in-aws-lambda/

https://aws.amazon.com/blogs/compute/operating-lambda-performance-optimization-part-1/
