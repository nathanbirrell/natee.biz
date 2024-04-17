---
title: "Resume — Nathan Birrell"
date: 2024-02-01
layout: layouts/base.njk
---

<!-- ***************************************************************** -->
<!-- NOTE: when updating this file, remember to run pnpm run generate-resume-pdf to update the PDF version -->
<!-- ***************************************************************** -->

<!-- <small>❌ **Not seeking work**</small> -->

<h6 class="noprint"><small class="resume-updated">Updated <time datetime="{{ page.date | htmlDateString }}">{{ page.date | monthYearDate }}</time> • <a href="https://raw.githubusercontent.com/nathanbirrell/natee.biz/master/assets/resume.pdf">View PDF</a></small></h6>

<h6 class="noprint">Skip to: <a href="#">About</a>, <a href="#experience">Experience</a>, <a href="#education">Side Projects &amp; Volunteering</a>, <a href="#education">Education</a></h6>

<div class="profile">
<div>
  <h3 class="tx-overline">
  About Me:
  </h3>

  <p>
  Software Engineer with 10+ years of technical experience, scaling-up software products and building great teams. Interested in Senior Frontend and Fullstack Engineer roles at software product companies.
  </p>
  <p>Australian Citizen with working rights in the EU.</p>
</div>
<div>
  <h3 class="tx-overline">
  Key Skills:
  </h3>

  <ol>
  <li>Specialised frontend experience across React, Typescript, NextJS & CSS</li>
  <li>Strong backend commercial experience with Node, GraphQL, Express, REST, both RDBMS & NoSQL</li>
  <li>Solution architecture on AWS: Lambda, ECS, AppSync, DynamoDB, CDK</li>
  </ol>
</div>
</div>

## Experience

<div class="experience__header">
  <span class="experience__header-left">
  <h3 class="experience__header-role">Senior Software Engineer (Contract)</h3>
  <h4 class="experience__header-company"><a href="https://www.myob.com">MYOB</a></h4>
  </span>
  <span class="experience__header-right">
    <h4 class="experience__header-time tx-overline">Oct 2023 - present</h4>
    <h4>Melbourne, AU 📍</h4>
  </span>
</div>

<!-- [MYOB](https://www.myob.com) is an accounting SaaS business. -->

- Reduced inbound calls to support phone lines with the introduction of Support Article Search with Algolia. Built with reuse in mind, we used the same component on other areas of the website.
- Strategic guidance on architecture decisions around NextJS, localisation and partial prerendering.
- Other areas of focus: core web vitals improvements; integration with headless CMS Contentful; middleware performance improvements; and a website rebrand.

<div class="experience__header">
  <span class="experience__header-left">
  <h3 class="experience__header-role">Senior Software Engineer</h3>
  <h4 class="experience__header-company"><a href="https://stax.io/">Stax</a> (by Versent)</h4>
  </span>
  <span class="experience__header-right">
    <h4 class="experience__header-time tx-overline">Oct 2018 - Oct 2023</h4>
    <h4>Melbourne, AU 📍</h4>
  </span>
</div>

Stax is a B2B SaaS cloud management platform, for deploying and monitoring AWS infrastructure. In October 2023, Stax & Versent sold to Telstra for $267.5m.

- Ownership of long-term strategy for a production frontend application, a component library, style system and a backend API service.
- Led architecture and build for a backend-for-frontend project. This simplied interfacing with microservices as the business grew, leveraging highly scalable event-driven, serverless architecture.
- Scaled-up engineering capabilities from 5 engineers to 30+, establishing best practices and processes for our growing organisation.
- Mentored and supported junior engineers, helping them grow their skills and confidence through pair programming, code reviews and leading workshops.
- Set-up best-practice foundations for our React app with unit testing, end-to-end tests, linting, CI processes and docs.
- Increased consistency across multiple frontend projects and across Engineering and Design teams, with a style system and component library implementation.
- Tech: Typescript, React, GraphQL, Apollo, Jest, Playwright, NodeJS, AWS Lambda, AppSync, DynamoDB Serverless, SQS, SAM, CDK and more.

<div class="experience__header">
  <span class="experience__header-left">
  <h3 class="experience__header-role">Frontend Engineer (Contract)</h3>
  <h4 class="experience__header-company"><a href="https://bom.gov.au/">Bureau of Meteorology</a></h4>
  </span>
  <span class="experience__header-right">
    <h4 class="experience__header-time tx-overline">Mar 2018 - Oct 2018</h4>
    <h4>Melbourne, AU 📍</h4>
  </span>
</div>

- Building a new weather experience for the general public — in Australia's [top 30](https://www.similarweb.com/top-websites/australia/) most visited websites
- Improved reliability and protyping speed with static typing & tree-structured state management library (Typescript, Mobx and mobx-state-tree; integrations with weather API services)

<div class="experience__header">
  <span class="experience__header-left">
  <h3 class="experience__header-role">Frontend Developer</h3>
  <h4 class="experience__header-company"><a href="https://belong.com.au/">Belong</a> (by Telstra)</h4>
  </span>
  <span class="experience__header-right">
    <h4 class="experience__header-time tx-overline">Nov 2016 - Mar 2018</h4>
    <h4>Melbourne, AU 📍</h4>
  </span>
</div>

<ul class="noprint">
<li>Responsible for delivering features, building out a component library with the design team, onboarding new engineers, improving unit test coverage and general hygiene with linting and better peer-review processes.</li>
<li>Migrated a legacy Knockout/JQuery codebase to a more manageable React & Redux project</li>
<li>Tooling: React, Redux, Webpack, ES6/Babel, React server-side rendering, Expo and React Native.</li>
</ul>

<div class="experience__header">
  <span class="experience__header-left">
  <h3 class="experience__header-role">Graduate » Consultant (Frontend Developer)</h3>
  <h4 class="experience__header-company"><a href="https://www.deloittedigital.com/au/en.html">Deloitte Digital</a></h4>
  </span>
  <span class="experience__header-right">
    <h4 class="experience__header-time tx-overline">Jan 2014 - Nov 2016</h4>
    <h4>Melbourne, AU 📍</h4>
  </span>
</div>

<ul class="noprint">
<li>Working as a consultant, using Agile SCRUM delivery for clients such as Telstra, ANZ Bank and Herbert Smith Freehills. Building websites with ES5/6, Sass CSS, Webpack and CMS integrations</li>
<li>Built a strong brand for the consultancy, through presentations of our work at industry events like MelbJS, LASTConf and MelbCSS</li>
<li>Improved client relationships through strong communication skills, building rapport, regular updates and upfront discussions on deadlines.</li>
</ul>

## Education

<!-- <div class="noprint">
<div class="experience__header">
  <span class="experience__header-left">
  <h3 class="experience__header-role">Certificate of Italian Language (B2 CEFR)</h3>
  <h4 class="experience__header-company">University for Foreigners of Perugia</h4>
  </span>
  <span class="experience__header-right">
    <h4 class="experience__header-time tx-overline">2023—present</h4>
    <h4>Italy 📍</h4>
  </span>
</div>
<p>Currently B1. Studying for my B2 CEFR exam in March.</p>
</div> -->

<div class="experience__header">
  <span class="experience__header-left">
  <h3 class="experience__header-role">Bachelor of Business (Information Systems)</h3>
  <h4 class="experience__header-company">Royal Melbourne Institute of Technology (RMIT University)</h4>
  </span>
  <span class="experience__header-right">
    <h4 class="experience__header-time tx-overline">2012-2015</h4>
    <h4>Melbourne, AU 📍</h4>
  </span>
</div>
<p class="noprint">
Applied course (industry placement), minor in Marketing, GPA 3.2
</p>

<div class="noprint">
<div class="experience__header">
  <span class="experience__header-left">
  <h3 class="experience__header-role">Certificate IV in Business Sales</h3>
  <h4 class="experience__header-company">Talent2 Education</h4>
  </span>
  <span class="experience__header-right">
    <h4 class="experience__header-time tx-overline">2012-2013</h4>
    <h4>Melbourne, AU 📍</h4>
  </span>
</div>
</div>

<div class="noprint">

<h2>Side Projects &amp; Volunteering</h2>

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
