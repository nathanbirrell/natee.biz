---
title: "Resume — Nathan Birrell"
description: "My resume."
pubDate: "2024-04-01"
# heroImage: "/blog-placeholder-3.jpg"
layout: ../layouts/Page.astro
---

<!-- ***************************************************************** -->
<!-- NOTE: when updating, remember to cmd+P from Firefox and update ./assets/resume.pdf -->
<!-- https://docs.google.com/document/d/1QcZgLCcauW2k1cIC9JcGQFAIfrszyIE2/edit?pli=1 -->
<!-- ***************************************************************** -->

<!-- <small>❌ **Not seeking work**</small> -->

<h6 class="noprint">
<small class="resume-updated">Updated <time datetime="2024-04-01 00:00:00 UTC+0">April 2024</time> • <a href="https://raw.githubusercontent.com/nathanbirrell/natee.biz/master/assets/resume.pdf">View PDF</a></small> • Skip to: <a href="#">About</a>, <a href="#experience">Experience</a>, <a href="#education">Education</a>
</h6>

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
  <h3 class="experience__header-company"><a href="https://stax.io/">Stax</a> (by <a href="http://versent.com.au/">Versent</a>)</h3>
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
<li>Built strong communication skills, through client relationships and expectation management.</li>
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

<style>
  .resume-updated a {
    color: var(--color-fg-muted);
  }

  .markdown-body .experience__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h3,
    h4 {
      margin: 0;
    }
    h4 {
      font-weight: 400;
    }

    span {
      line-height: 1.5;
    }

    .experience__header-company {
      a {
        color: var(--color-fg-default);
      }
    }

    .experience__header-right {
      color: var(--color-fg-muted);
      text-align: right;
    }

    .tx-overline {
      font-weight: 600;
      font-size: 0.85rem;
      text-transform: uppercase;
      color: var(--color-fg-muted);
    }
  }

  .markdown-body .experience__header {
    margin-bottom: 0.25rem;
  }

  @media print {
    /* .resume-updated {
      position: absolute;
      top: 2rem;
      right: 5rem;
    } */

    .markdown-body p {
      margin-bottom: 0.15rem;
    }

    .markdown-body a {
      color: var(--color-fg-muted);
    }

    .markdown-body main h2 {
      font-size: 1.15rem;
      margin-top: 1rem;
      margin-bottom: 0.25rem;
    }

    .markdown-body main h2:first-of-type {
      margin-top: 0.25rem;
    }

    .markdown-body main h3 {
      font-size: 0.95rem;
      margin-top: 0.75rem;
      padding-bottom: 0;
      margin-bottom: 0;
    }

    .markdown-body ul {
      margin-top: 0;
      margin-bottom: 0.25rem;
      padding-left: 1rem;
    }

    .profile {
      display: grid;
      grid-gap: 0.75rem;
      /* grid-template-columns: repeat(2, 1fr); */
      grid-template-columns: 50% 50%;

      font-size: 0.8rem;
    }
    
      #skills--interests + ul {
        columns: 2;
      }

      @page {
        size: A4 portrait;
        margin: 0 1rem 1rem 1rem;
      }
  }

</style>
