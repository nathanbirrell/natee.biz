---
title: "Resume — Nathan Birrell"
date: 2024-02-01
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

  <p>
  Software Engineer with 10+ years of technical experience, scaling-up software products and building great teams. <strong>Interested in senior front-end roles, full-stack and open to lead roles.</strong>
  </p>
  <p>Australian Citizen with working rights in the EU. <b>Located in Bologna, Italy from March 17.</b></p>
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

<!-- 🏄🏼‍♂️ Surfer, 🚴🏼 bicycle and ☕️ espresso nerd. -->

## Experience

<h3>
  <span>MYOB</span>
  <span class="tx-overline">Senior Software Engineer (Contract) • Oct 2023 - present</span>
</h3>

[MYOB](https://www.myob.com) is an accounting SaaS business. I was brought onto the Web & Content team.

- Reduced inbound calls to support phone lines with the introduction of Support Article Search with Algolia. Built with reuse in mind, we used the same component on other areas of the website.
- Strategic guidance on architecture decisions around NextJS, localisation and partial prerendering.
- Other deliverables: core web vitals improvements; integration with headless CMS Contentful; middleware performance improvements; and a website rebrand.

<h3>
  <span>Stax (by Versent)</span>
  <span class="tx-overline">Senior Software Engineer • Oct 2018 - Oct 2023</span>
</h3>

[Stax](https://stax.io/) is a B2B SaaS AWS cloud management platform, which empowers teams to deliver on AWS with consistency, confidence and velocity. In October 2023, Stax & Versent sold to Telstra for $267.5m.

- Ownership of long-term strategy for a production frontend application (20k+ LOC), a component library, style system and a backend API service (60k LOC).
- Led architecture/build for a backend-for-frontend project, to simplify interfacing with microservices
- Scaled-up engineering capabilities from 5 engineers to 30+, establishing best practices and processes for our growing organisation.
- Mentored and supported junior engineers, helping them grow their skills and confidence through pair programming, code reviews and leading workshops.
- Set-up best-practice foundations for our React app with unit testing, end-to-end tests, linting, CI processes and docs. Tooling snapshot: NextJS, React, Typescript, GraphQL, Lambda, DynamoDB.
- Increased consistency across multiple frontend projects and across Engineering and Design teams, with a style system and component library.
- Tech: Typescript, GraphQL, Apollo, React, Jest, Playwright, NodeJS, AWS Lambda, AppSync, DynamoDB Serverless, SQS, SAM, CDK and more.

<h3>
  <span>Bureau of Meteorology</span>
  <span class="tx-overline">Software Engineer (contract) • Mar 2018 - Oct 2018</span>
</h3>

- A new weather experience for the general public — in Australia's [top 30](https://www.similarweb.com/top-websites/australia/) most visited websites
- Improved reliability and protyping speed with static typing & tree-structured state management lib

<h3 style="margin-top: 0;">
  <span>Belong (by Telstra)</span>
  <span class="tx-overline">Front-end Developer • Nov 2016 - Mar 2018</span>
</h3>

<ul class="noprint">
<li>Responsible for delivering features, building out a component library with the design team, onboarding new engineers, improving unit test coverage and general hygiene with linting and better peer-review processes.</li>
<li>Migrated a legacy Knockout/JQuery codebase to a more manageable React & Redux project</li>
<li>Tooling: React, Redux, Webpack, ES6/Babel, React server-side rendering, Expo and React Native.</li>
</ul>

<h3 style="margin-top: 0;">
  <span>Deloitte Digital</span>
  <span class="tx-overline">UI Developer (Consultant) • Jan 2014 - Nov 2016</span>
</h3>

<ul class="noprint">
<li>Agile SCRUM delivery for clients such as Telstra, ANZ Bank and Herbert Smith Freehills. Building websites with ES5/6, Sass CSS, Webpack and CMS integrations</li>
<li>Built a strong brand for the consultancy, through presentations of our work at industry events like MelbJS, LASTConf and MelbCSS</li>
<li>Improved client satisfaction through strong communication skills, building rapport, regular updates and upfront discussions on deadlines.</li>
</ul>

<div class="noprint">

<h2>Side Projects & Volunteering</h2>

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

## Education

<div class="noprint">
<h3>
  <span>Certificate of Italian Language (B2 CEFR)</span>
  <span class="tx-overline">
    2023—present
  </span>
</h3>
Currently B1. Studying for my B2 CEFR exam in March, at the University for Foreigners of Perugia.
</div>

<h3>
  <span>Bachelor of Business (Information Systems)</span>
  <span class="tx-overline">
    2012-2015
  </span>
</h3>

Royal Melbourne Institute of Technology (RMIT University)

Applied course (industry placement), minor in Marketing, GPA 3.2

<div class="noprint">
<h3>
  <span>Certificate IV in Business Sales</span>
  <span class="tx-overline">
    2012-2013
  </span>
</h3>

Talent2 Education

</div>

<!-- ## Contact

- [LinkedIn](https://www.linkedin.com/in/nathanbirrell)
- [nathanbirrell@gmail.com](mailto:nathanbirrell@gmail.com) -->
