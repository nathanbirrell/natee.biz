---
title: "Resume — Nathan Birrell"
date: 2024-04-01
layout: layouts/base.njk
---

<!-- ***************************************************************** -->
<!-- NOTE: when updating, remember to cmd+P from Firefox and update ./assets/resume.pdf -->
<!-- https://docs.google.com/document/d/1QcZgLCcauW2k1cIC9JcGQFAIfrszyIE2/edit?pli=1 -->
<!-- ***************************************************************** -->

<!-- <small>❌ **Not seeking work**</small> -->

<h6 class="noprint"><small class="resume-updated">Updated <time datetime="{{ page.date | htmlDateString }}">{{ page.date | monthYearDate }}</time> • <a href="https://raw.githubusercontent.com/nathanbirrell/natee.biz/master/assets/resume.pdf">View PDF</a></small></h6>

<h6 class="noprint">Skip to: <a href="#">About</a>, <a href="#experience">Experience</a>, <a href="#education">Side Projects &amp; Volunteering</a>, <a href="#education">Education</a></h6>

<div class="profile noprint">
<div>
  <h3 class="tx-overline">
  About Me:
  </h3>

  <p>
  Software Engineer with over 10 years of technical experience, scaling-up software products in both startup and enterprise environments.
  </p>

  <p>
  Specialised in full-stack Typescript application development, with extensive experience in the ecosystems around React, NextJS, Node, GraphQL, AWS and more.
  </p>
</div>
<div>
  <h3 class="tx-overline">
  Key Skills:
  </h3>

  <ol>
  <li>Specialised frontend experience across React, Typescript, NextJS & CSS</li>
  <li>Strong backend commercial experience with Node, Express, GraphQL, REST, both relational & NoSQL databases</li>
  <li>Solution architecture with AWS: SST, Nx, Lambda, ECS, AppSync, DynamoDB, CDK, event-driven architecture</li>
  </ol>
</div>
</div>

## Experience

<div class="experience__header">
  <span class="experience__header-left">
  <h3 class="experience__header-company"><a href="https://www.myob.com">MYOB</a></h4>
  <h4 class="experience__header-role">Senior Software Engineer (Contract)</h3>
  </span>
  <span class="experience__header-right">
    <h4 class="experience__header-time tx-overline">Oct 2023 - present</h4>
    <h4>Melbourne, AU (Remote)</h4>
  </span>
</div>

<!-- [MYOB](https://www.myob.com) is an accounting SaaS business. -->

- Strategic guidance on MYOB's NextJS public website, guiding architecture decisions, component library prop-APIs, localisation and partial prerendering to improve core web vitals score.
- Introduced **trunk-based git workflow** with feature flagging and commit conventions to achieve smaller changesets, more focussed code reviews and quicker release cycles.
- Reduced inbound calls to support phone lines by building a Support Article Search with Algolia and React. Built to be re-used and re-styled (ie. MYOB Apps Search) with strong SEO in mind.
- Other areas of focus: **Core Web Vitals**; integration with **Contentful** CMS; and middleware performance.

<div class="experience__header">
  <span class="experience__header-left">
  <h3 class="experience__header-company"><a href="https://stax.io/">Stax</a> (by Versent)</h3>
  <h4 class="experience__header-role">Senior Software Engineer</h4>
  </span>
  <span class="experience__header-right">
    <h4 class="experience__header-time tx-overline">Oct 2018 - Oct 2023</h4>
    <h4>Melbourne, AU (Remote)</h4>
  </span>
</div>

- Stax is a B2B SaaS cloud management platform, for deploying and monitoring AWS infrastructure. In October 2023, Stax & Versent sold to Telstra for $267.5m.
- Ownership of long-term strategy for a production **Typescript & React** frontend application, a component library (**Storybook**) and a backend API service (**AWS Lambda**, AppSync).
- Led architecture and delivery for a backend-for-frontend project. Simplied interfacing with microservice APIs through one **GraphQL API**, leveraging highly scalable event-driven, serverless architecture.
- Scaled the team from 5 to 30+ engineers, establishing best practices for our growing organisation: Jest unit test coverage, **E2E tests**, ESLint linting, trunk-based git workflow and a living DEVELOPMENT.md.
- **Mentoring** junior engineers across different timezones, helping them grow their skills and confidence through **pair programming**, 1:1s, helping **write ADRs** and leading workshops.
- Also achieved: faster CI build times; increased **code review frequency** with [Angular Commit Style](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format) and [Conventional Comments](https://conventionalcomments.org/) reviews; and more efficient releases through [Semantic Release](https://github.com/semantic-release/semantic-release).
  <!-- - Increased consistency across multiple frontend projects and across Engineering and Design teams, with a style system and component library implementation. -->
  <!-- - Tech: Typescript, React, GraphQL, Apollo, Jest, Playwright, NodeJS, AWS Lambda, AppSync, DynamoDB Serverless, SQS, SAM, CDK and more. -->

<div class="experience__header">
  <span class="experience__header-left">
  <h3 class="experience__header-company"><a href="https://bom.gov.au/">Bureau of Meteorology</a></h3>
  <h4 class="experience__header-role">Frontend Engineer (Contract)</h4>
  </span>
  <span class="experience__header-right">
    <h4 class="experience__header-time tx-overline">Mar 2018 - Oct 2018</h4>
    <h4>Melbourne, AU</h4>
  </span>
</div>

- Built a new weather experience for Australia's [most visited](https://www.similarweb.com/top-websites/australia/) weather website.
- Improved reliability and protyping speed with static typing & tree-structured state management library (React, Typescript, **Mobx** and mobx-state-tree; integrations with weather **REST API** services).

<div class="experience__header">
  <span class="experience__header-left">
  <h3 class="experience__header-company"><a href="https://belong.com.au/">Belong</a> (by Telstra)</h3>
  <h4 class="experience__header-role">Frontend Developer</h4>
  </span>
  <span class="experience__header-right">
    <h4 class="experience__header-time tx-overline">Nov 2016 - Mar 2018</h4>
    <h4>Melbourne, AU</h4>
  </span>
</div>

- Introduced **Redux** state management to our React frontend. **Expo React Native** app for iOS/Android.
- Migration away from legacy Knockout/JQuery app. Integration to **Adobe AEM** content management.

<div class="experience__header">
  <span class="experience__header-left">
  <h3 class="experience__header-company"><a href="https://www.deloittedigital.com/au/en.html">Deloitte Digital</a></h3>
  <h4 class="experience__header-role">Graduate » Consultant (Frontend Developer)</h4>
  </span>
  <span class="experience__header-right">
    <h4 class="experience__header-time tx-overline">Jan 2014 - Nov 2016</h4>
    <h4>Melbourne, AU</h4>
  </span>
</div>

<ul class="noprint">
<li>Working as a consultant, using Agile SCRUM delivery for clients such as Telstra, ANZ Bank and Herbert Smith Freehills. Building websites with ES5/6, Sass CSS, Webpack and CMS integrations</li>
<li>Built a strong brand for the consultancy, through presentations of our work at industry events like MelbJS, LASTConf and MelbCSS</li>
<li>Improved client relationships through strong communication skills, building rapport, regular updates and upfront discussions on deadlines.</li>
</ul>

## Education

<div class="experience__header">
  <span class="experience__header-left">
  <h3 class="experience__header-company">Royal Melbourne Institute of Technology (RMIT University)</h3>
  <h4 class="experience__header-role">Bachelor of Business (Information Systems)</h4>
  </span>
  <span class="experience__header-right">
    <h4 class="experience__header-time tx-overline">2012-2015</h4>
    <h4>Melbourne, AU</h4>
  </span>
</div>
<ul class="noprint">
<li>Applied course (industry placement), minor in Marketing, GPA 3.2</li>
</ul>

<div class="noprint">
<div class="experience__header">
  <span class="experience__header-left">
  <h3 class="experience__header-role">Certificate IV in Business Sales</h3>
  <h4 class="experience__header-company">Talent2 Education</h4>
  </span>
  <span class="experience__header-right">
    <h4 class="experience__header-time tx-overline">2012-2013</h4>
    <h4>Melbourne, AU</h4>
  </span>
</div>
</div>

## Skills & Interests

- **Frontend:** React, Typescript, Javascript, NextJS, Jest, HTML, CSS, PostCSS, Storybook, Playwright.
- **Backend:** Node, Express, **Vitest**, GraphQL, REST, relational & NoSQL databases and Ruby on Rails.
- **Infra:** **SST**, **Nx**, AWS Lambda, ECS, AppSync, DynamoDB, CDK, Buildkite and Docker.
- **Skills:** solution architecture, event-driven architecture, monorepos, mentoring, Agile

<div class="noprint">

## Side Projects &amp; Volunteering

<h3>
  <span>Leesy (Startmate, Summer 2023)</span>
  <span class="tx-overline">
    Early 2023
  </span>
</h3>

Advised a local startup on their tech strategy and helped build out their MVP web application. Saved the team hours of manual processes per day with a rental property appointment booking feature.

<h3>
<span>Soulection 24/7 Radio App</span>

<span class="tx-overline">
  2021
</span>
</h3>

As a Soulection Radio listener, I made a little radio app to stream random episodes 24/7, with some Apple Music-esque [blurry animated backgrounds](/img/projects/future-beats/future-beats-367.gif) that match the episode cover and tablet-drawn player controls. This project was great to experiment with Tailwind CSS, drawing vectors on an iPad and integrating with SoundCloud's API.

[View the project on Github →](https://github.com/nathanbirrell/future-beats)

<img class="noprint" src="/img/projects/future-beats/future-beats-419.jpg" alt="Screenshot of futurebeats.fm">

<h3>
  <span>TourXOz (for the Black Dog Institute)</span>
  <span class="tx-overline">
    June 2019
  </span>
</h3>

A cycling trip from Cairns to Cape York, through some of Australia’s most remote country to raise awareness for mental health and engage with local communities.

Donations supported the Black Dog Institute.

<h3>
  <span>Overcast for macOS</span>
  <span class="tx-overline">
    2017
  </span>
</h3>

A macOS client for the popular Overcast podcast player, with over [130 stars on Github](https://github.com/nathanbirrell/overcast-macos). Built with Electron and Node.

[View the project on Github →](https://github.com/nathanbirrell/overcast-macos)

<img class="noprint" src="/img/projects/overcast-macos/overcast-macos-screenshot.jpg" alt="Screenshot of Overcast for macOS">

<h3>
  <span>Poseidon</span>
  <span class="tx-overline">
    2017 - 2018
  </span>
</h3>

A hobby project built with Ruby on Rails and a create-react-app with a Typescript frontend. Our goal was to improve the experience around surf forecast modelling. We had some fun challenges around presenting graphs and numerical data in a user-friendly way; storing and parsing model data and calculating a "Surf Potential" figure. Multiple third-party integrations involved with NOAA, BOM and PlanetOS.

<!-- Most of our time was spent on formulating the "Surf Potential" figure which took in a range of variables from different sources to calculate a rating (out of 10) of likelihood of good surf at a given location. Each surf spot is unique in the ideal conditions, so this made for a challenging project! -->

<!-- We decided to discontinue the project after some long-standing companies in the area vastly improved their offering and felt we couldn't add enough additional value. -->

<figure class="noprint">
  <img src="/img/projects/surf-poseidon/grid-view.jpg" alt="Screenshot of surfposeidon.io">
  <figcaption>Unfortunately I don't have any proper screenshots for surfposeidon.io</figcaption>
</figure>
</div>

<!-- ## Contact

- [LinkedIn](https://www.linkedin.com/in/nathanbirrell)
- [nathanbirrell@gmail.com](mailto:nathanbirrell@gmail.com) -->
