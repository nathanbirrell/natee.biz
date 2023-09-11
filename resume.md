---
title: "Resume — Nathan Birrell"
date: 2023-09-10
layout: layouts/base.njk
---

<!-- ***************************************************************** -->
<!-- NOTE: when updating this file, remember to run yarn run generate-resume-pdf to update the PDF version -->
<!-- ***************************************************************** -->

<!-- <small>❌ **Not seeking work**</small> -->

<h6 class="noprint"><small class="resume-updated">Updated <time datetime="{{ page.date | htmlDateString }}">{{ page.date | monthYearDate }}</time> • <a href="https://raw.githubusercontent.com/nathanbirrell/natee.biz/master/assets/resume.pdf">View PDF</a></small></h6>

<h6 class="noprint">Skip to: <a href="#">About</a>, <a href="#experience">Experience</a>, <a href="#side-projects-and-volunteering">Side Projects &amp; Volunteering</a>, <a href="#education">Education</a></h6>

<div class="profile">
<div>
  <h3 class="tx-overline">
  About Me:
  </h3>

  <p>Full-stack Software Engineer with over ten years of experience with some of Australia’s largest companies. <strong>Specialised in modern front-end web application development</strong>, particularly with React and Typescript, but also have years of commercial experience with a range of backend tooling.</p>

  <p>Not attached to any specific technology or framework, always open to new ways of working. Typically thrive in empowered, multidisciplinary teams. Keen interest in process, written/async communication and improving the way teams work.</p>

  <!-- - I work compressed 4-day weeks, usually Tue-Fri. Preference for more asynchronous modes of working, but still flexible around co-located teams and remote working (I enjoy both). -->

</div>
<div>
  <h3 class="tx-overline">
  Key Skills:
  </h3>

  <ol>
  <li>React, Typescript &amp; GraphQL</li>
  <li>NextJS, Vite with SSR, Webpack and create-react-app</li>
  <li>Apollo GraphQL and various other state-management libraries (MobX &amp; Redux)</li>
  <li>Jest & testing-library for unit testing, Playwright for E2E tests</li>
  <li>GraphQL, Node.js, Express, Prisma ORM and Postgres</li>
  <li>AWS services like Lambda, ECS, AppSync, DynamoDB, CDK/SAM</li>
  </ol>
</div>
</div>

## Experience

<!-- TODO: add Leesy -->
<!-- ###### Senior Software Engineer • Oct 2018 - present -->

<h3>
  <span>Stax (by Versent)</span>
  <span class="tx-overline">Senior Software Engineer • Oct 2018 - present</span>
</h3>

Stax is an AWS cloud management platform, which exists to speed-up and improve the quality of cloud infrastructure delivery.

- As a Senior Software Engineer with a focus on front-end, I work on building and managing strategy around our frontend applications.
- Responsible for both the single-page app (client side React app) and our backend-for-frontend app which consists of an AppSync API, NodeJS/Typescript Lambda resolvers, SQS Queues and more.
- Tech: Typescript, GraphQL, Apollo, React, Jest, NodeJS, AWS Lambda, AppSync, Serverless, CDK, etc.
- Some challenges include: managing style consistency across multiple separate frontend projects and teams; having frontend engineers manage their own backend-for-frontend (our AppSync GraphQL API) and wrangling client-side state to present long-running cloud tasks.

[View the landing page at stax.io →](https://stax.io/)

<h3>
  <span>Bureau of Meteorology</span>
  <span class="tx-overline">Software Engineer • Mar 2018 - Oct 2018</span>
</h3>

- Worked on a project team to build a completely new weather experience for BOM's general public audience.
- One of Australia's [top 40](https://www.alexa.com/topsites/countries/AU) websites by traffic.
- Tooling: Typescript, React, Mobx with mobx-state-tree, Jest/Enzyme, ES6+, styled-components.
- Interesting challenges:
  - managing tree-structured state and weather datapoints
  - finding the right abstractions for reusable components
  - working with a moderate-sized team to agree on long-term technical decisions

<!-- [View the app at weather.bom.gov.au →](https://weather.bom.gov.au/) -->

<h3>
  <span>Belong (by Telstra)</span>
  <span class="tx-overline">Front-end Developer • Nov 2016 - Mar 2018</span>
</h3>

Mid-level Front-end Developer on a React/Redux/Webpack web application. Key activities:

- Tooling: React, Redux, Webpack, ES6/Babel, server-side React rendering
- Built out a hybrid native application using Expo and React Native.
- Onboarding new developers, maintaining Jest unit testing coverage
- Migration of our legacy front-end app out of an unmaintainable Knockout/JQuery set-up to a more manageable React/Redux ecosystem.

<h3>
  <span>Deloitte Digital</span>
  <span class="tx-overline">Front-end Developer • Jan 2014 - Nov 2016</span>
</h3>

Website and web application builds for clients such as Telstra, ANZ, Herbert Smith Freehills, RACQ, Victorian Comprehensive Cancer Centre and QSuper.

Front-end feature development in SCRUM delivery teams:

- Regularly owned front-end estimation and delivery of user stories end-to-end with considerable complexity and time constraints.
- Focussed on improving quality through: objective architectural decisions and discussion, sharing ideas for writing readable and maintainable Javascript and presenting ideas back to the wider FED team.
- Assisted product owners, designers and UX to design solutions that maximise business value from more effective development effort.
- Attended conferences and completed training such as: Deloitte FED training (mostly React & Angular), Pluralsight courses (i.e. Crockford’s JS Good Parts) and meetups/conferences (MelbJS, LASTConf).
- Helped design/introduce a feature-based Git workflow (‘git flow’) for multiple clients.

<!-- <h3>
  <span>The Incentive Lab</span>
  <span class="tx-overline">Full-Stack Developer • 2015</span>
</h3>

- Full-stack PHP development for the incentive marketing agency’s proprietary software "Flashpoint", used by sales teams at BMW, Nissan and Samsung in Australia.
- Technologies used: PHP, Symfony, Doctrine ORM, LAMP stack, Wordpress, Javascript/JQuery. -->

## Side Projects & Volunteering

<!-- TODO: add Leesy -->

### Soulection 24/7 Radio App (2021)

As a Soulection Radio listener, I made a little radio app to stream random episodes 24/7, with some Apple Music-esque [blurry animated backgrounds](/img/projects/future-beats/future-beats-367.gif) that match the episode cover and tablet-drawn player controls. This project was great to experiment with Tailwind CSS, drawing vectors on an iPad and integrating with SoundCloud's API.

[View the project on Github →](https://github.com/nathanbirrell/future-beats)

<img class="noprint" src="/img/projects/future-beats/future-beats-419.jpg" alt="Screenshot of futurebeats.fm">

### TourXOz 2019 (for the Black Dog Institute)

TourXOz 2019 involved cycling from Cairns to Cape York, through some of Australia’s most remote country to raise awareness for mental health and engage with local communities.

Donations supported the Black Dog Institute with mental health education, early diagnosis and suicide prevention.

<figure class="noprint">
  <img src="/img/projects/tourxoz-2019/tourxoz-2019-group.jpeg" alt="The TourXOz 2019 peloton">
  <figcaption>The TourXOz 2019 group at the start of the famous Telegraph Track</figcaption>
</figure>

### Overcast for macOS (Archived)

A macOS client for the popular Overcast podcast player, with over 130 stars on Github. Built with Electron and Node. Discontinued since Apple Silicon Macs can now run the iOS Overcast now.

[View the project on Github →](https://github.com/nathanbirrell/overcast-macos)

<img class="noprint" src="/img/projects/overcast-macos/overcast-macos-screenshot.jpg" alt="Screenshot of Overcast for macOS">

### Poseidon (June 2017 - 2018)

A side project, built with Ruby on Rails and a create-react-app + Typescript frontend. The goal for the project was to improve the experience around surf forecast modelling, so we had some fun challenges around presenting graphs and numerical data in a friendly way; storing and parsing model data and so on. Multiple third-party integrations involved, including: NOAA, BOM, PlanetOS and Willyweather.

Most of our time was spent on formulating the "Surf Potential" figure which took in a range of variables from different sources to calculate a rating (out of 10) of likelihood of good surf at a given location. Each surf spot is unique in the ideal conditions, so this made for a challenging project!

<!-- We decided to discontinue the project after some long-standing companies in the area vastly improved their offering and felt we couldn't add enough additional value. -->

<figure class="noprint">
  <img src="/img/projects/surf-poseidon/grid-view.jpg" alt="Screenshot of surfposeidon.io">
  <figcaption>Unfortunately I don't have any proper screenshots for surfposeidon.io</figcaption>
</figure>

<!-- ### Freelance Projects (2013 - 2016)

- Worked for myself from university as a web developer and digital consultant to small businesses.
- Provided services from as basic as a Wordpress/Squarespace build to a custom Rails application.
- Clients: [Damgar Group](http://damgargroup.com.au/), [Gaffneys Logistics](http://gaffneys.com.au/), [Serenity Face & Body](http://serenityfaceandbody.com.au/), All City Bathrooms & Kitchens, Memla Landscape Architects -->

<!-- ## Interests

1.  Heavy focus on best practices in software development: writing reusable, readable and maintainable code, continuous improvement and quality (through pull requests, pair programming and regular team catch-ups). Opinions heavily influenced by the [Rails Doctrine](http://rubyonrails.org/doctrine/), [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) and [Eloquent JS](http://eloquentjavascript.net/).
2.  Strong interest in wider front-end community involvement and contributing back to open source projects. Regular attendee at MelbJS and Ruby Melbourne meetups.
3.  Managing teams and workflows around building software. Inspired by many things/people, to name a few: [Agile manifesto](http://agilemanifesto.org/), Lean philosophy, [Basecamp](https://m.signalvnoise.com/), [Ben Horowitz](https://www.amazon.com/Hard-Thing-About-Things-Building/dp/0062273205), [Seth Godin](http://sethgodin.typepad.com/) and [Paul Graham](http://www.paulgraham.com/articles.html).
4.  Outside of work I generally spend [well away from my computer](https://instagram.com/nathanbirrell) (mainly surfing/camping). -->

<!-- ## Skills

- Javascript, ES6, Typescript
- React/Redux/Mobx front-end ecosystem
- Git & git-flow
- Webpack, Babel
- React Native & Expo
- Ruby & Rails
- Jest/Enzyme unit testing
- Figma, Sketch, Photoshop, Illustrator
- HTML, CSS, Sass -->

## Education

**Royal Melbourne Institute of Technology (RMIT University) (2012 - 2015)**

Bachelor of Business (Information Systems) (Applied) (minor in Marketing)

<!-- ## Contact

- [LinkedIn](https://www.linkedin.com/in/nathanbirrell)
- [nathanbirrell@gmail.com](mailto:nathanbirrell@gmail.com) -->
