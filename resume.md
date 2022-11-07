---
title: "Resume — Nathan Birrell"
date: 2022-11-01
layout: layouts/base.njk
---

<!-- <small>❌ **Not seeking work**</small> -->

###### <small class="resume-updated">Updated <time datetime="{{ page.date | htmlDateString }}">{{ page.date | readableDate }}</time> • Skip to: [Experience](#experience) | [Side Projects](#side-projects) | [Skills & Education](#skills)</small>

About me:

- 10 years software engineering experience with some of Australia’s largest companies, primarily in **Frontend Development**.
- On the technical side, my focus is mainly on modern Javascript web-application development. In-depth experience with Typescript, create-react-app (and its surrounding ecosystem), GraphQL and Node. I am also comfortable working on Backend services, with experience in Node, Ruby/Rails, Lambda, GraphQL and more.
- Typically thrive in empowered, self-sufficient and multidisciplinary teams. Keen interest in process, written/async communication and improving the way teams work.

## Experience

### Stax

###### Senior Software Engineer • Oct 2018 - present

Stax is an AWS cloud management platform, which exists to speed-up and improve the quality of cloud infrastructure delivery.

- As a Senior Front-end Engineer, I work on building and managing strategy around our frontend applications.
- Responsible for both the single-page app (client side) and our backend-for-frontend app which consisted of an AppSync API with Lambda resolvers.
- Tech: Typescript, GraphQL, Apollo, React, Jest, NodeJS, Lambda and AppSync

[View the landing page at stax.io →](https://stax.io/)

### Bureau of Meteorology

###### Software Engineer (Javascript) • Mar 2018 - Oct 2018

- Working on a project team to build a completely new weather experience for BOM's general public audience.
- One of Australia's [top 40](https://www.alexa.com/topsites/countries/AU) websites by traffic.
- Tooling: Typescript, React, Mobx with mobx-state-tree, Jest/Enzyme, ES6+, styled-components.
- Interesting challenges:
  - managing tree-structured state
  - finding the right abstractions for reusable components
  - working with a medium-to-large team to agree on long-term technical decisions

### Belong (by Telstra)

###### Front-end Developer • Nov 2016 - Mar 2018

Mid-level Front-end Developer on a React/Redux/Webpack web application. Key activities:

- Tooling: React, Redux, Webpack, ES6/Babel, server-side React rendering
- Built out a hybrid native application using Expo and React Native.
- Onboarding new developers, maintaining Jest unit testing coverage
- Migration of our legacy front-end app out of an unmaintainable Knockout/JQuery set-up to a more manageable React/Redux ecosystem.

[View the app at weather.bom.gov.au →](https://weather.bom.gov.au/)

### Deloitte Digital

###### Front-end Developer • Jan '14 - Nov '16

Website and web application builds for clients such as [Telstra](https://www.telstra.com.au), [ANZ](https://www.anz.com.au/personal/) , [Herbert Smith Freehills](https://www.herbertsmithfreehills.com) , [RACQ](https://www.racq.com.au), [Victorian Comprehensive Cancer Centre](https://conexus.victorianccc.org.au) and [QSuper](https://qsuper.qld.gov.au) .

Front-end feature development in SCRUM delivery teams:

- Regularly owned front-end estimation and delivery of user stories end-to-end with considerable complexity and time constraints.
- Focussed on improving quality through: objective architectural decisions and discussion, sharing ideas for writing readable and maintainable Javascript and presenting ideas back to the wider FED team.
- Assisted product owners, designers and UX to design solutions that maximise business value from more effective development effort.
- Attended conferences and completed training such as: Deloitte FED training (mostly React & Angular), Pluralsight courses (i.e. Crockford’s JS Good Parts) and meetups/conferences (MelbJS, LASTConf).
- Helped design/introduce a feature-based Git workflow (‘git flow’) for multiple clients.

<!-- ### The Incentive Lab

Full-Stack Developer (PHP) Contractor, 2015

- Part-time (and sole) full-stack PHP developer for the incentive marketing agency’s proprietary software, [Flashpoint](www.theflashpointapp.com), used by sales teams at BMW, Nissan and Samsung in Australia.
- Technologies used: PHP, Symfony, Doctrine ORM, LAMP stack, Wordpress, Javascript/JQuery. -->

## Side Projects

### Future Beats (2021)

As a big fan of Soulection Radio, I made a little radio app to stream random episodes 24/7, with some Apple Music-esque [blurry animated backgrounds](/img/projects/future-beats/future-beats-367.gif) that match the episode cover.

[View the app at futurebeats.fm →](https://futurebeats.fm)

![Screenshot of futurebeats.fm](/img/projects/future-beats/future-beats-419.jpg)

### Overcast for macOS (Archived)

A macOS client for the popular Overcast podcast player, with over 130 stars on Github. Built with Electron and Node. Discontinued since Apple Silicon Macs can now run the iOS Overcast now.

[View the project on Github →](https://github.com/nathanbirrell/overcast-macos)

![Screenshot of Overcast for macOS](/img/projects/overcast-macos/overcast-macos-screenshot.jpg)

### Poseidon (June 2017 - 2018)

A side project with a friend, which was built with Ruby on Rails and a create-react-app + Typescript frontend.

The goal for the project was to improve the experience around surf forecast modelling, so we had some fun challenges around presenting graphs and numerical data in a friendly way; storing and parsing model data and so on. Multiple third-party integrations involved, including: NOAA, BOM, PlanetOS and Willyweather.

A lot of our time was spent on formulating the "Surf Potential" figure which took in a range of variables from different sources to calculate a rating (out of 10) of likelihood of good surf at a given location. Each surf spot is unique in the ideal conditions, so this made for a challenging project!

We decided to discontinue the project after some longstanding companies in the area vastly improved their offering and felt we couldn't add enough additional value.

<figure>
  <img src="/img/projects/surf-poseidon/grid-view.jpg" alt="Screenshot of surfposeidon.io">
  <figcaption>Unfortunately I don't have any proper screenshots for surfposeidon.io</figcaption>
</figure>

### Freelance Projects (2013 - 2016)

- Worked for myself from university as a web developer and digital consultant to small businesses.
- Provided services from as basic as a Wordpress/Squarespace build to a custom Rails application.
- Clients: [Damgar Group](http://damgargroup.com.au/), [Gaffneys Logistics](http://gaffneys.com.au/), [Serenity Face & Body](http://serenityfaceandbody.com.au/), All City Bathrooms & Kitchens, Memla Landscape Architects

<!-- ## Interests

1.  Heavy focus on best practices in software development: writing reusable, readable and maintainable code, continuous improvement and quality (through pull requests, pair programming and regular team catch-ups). Opinions heavily influenced by the [Rails Doctrine](http://rubyonrails.org/doctrine/), [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) and [Eloquent JS](http://eloquentjavascript.net/).
2.  Strong interest in wider front-end community involvement and contributing back to open source projects. Regular attendee at MelbJS and Ruby Melbourne meetups.
3.  Managing teams and workflows around building software. Inspired by many things/people, to name a few: [Agile manifesto](http://agilemanifesto.org/), Lean philosophy, [Basecamp](https://m.signalvnoise.com/), [Ben Horowitz](https://www.amazon.com/Hard-Thing-About-Things-Building/dp/0062273205), [Seth Godin](http://sethgodin.typepad.com/) and [Paul Graham](http://www.paulgraham.com/articles.html).
4.  Outside of work I generally spend [well away from my computer](https://instagram.com/nathanbirrell) (mainly surfing/camping). -->

## Skills

- Javascript, ES6, Typescript
- React/Redux/Mobx front-end ecosystem
- Git & git-flow
- Webpack, Babel
- React Native & Expo
- Ruby & Rails
- Jest/Enzyme unit testing
- Figma, Sketch, Photoshop, Illustrator
- HTML, CSS, Sass

## Education

**RMIT University (2012 - 2015)**

Bachelor of Business (Information Systems) (Applied) (minor in Marketing)

## Contact

- [LinkedIn](https://www.linkedin.com/in/nathanbirrell)
- [nathanbirrell@gmail.com](mailto:nathanbirrell@gmail.com)
