### TL;DR

Use this seed project to jump start your React-based project.
This seed project includes the following technology stack: React, Redux, ES6, ImmutableJS, SASS, Webpack, Reselect,
Lazy Loading component supports, Type Checking with Babel Type Check, ESLint, Jest and Enzyme for Unit testing.

Step 1: Clone this repo
```
git clone http://rite.sd.spawar.navy.mil/bitbucket/users/htran/repos/react-seed-project/browse
cd react-seed-project
```

Step 2: Install

```
npm install
```

Step 3: Start

```
npm run start
```

Step 4: Linting & Test

```
npm run lint
npm run test
```

Step 5: Watch

```
npm run watch
```

Step 5: Build
```
npm run build
Package the app to /dist folder.
```


### Features / Benefits

Features

* React 16
* Redux
* ES6 / ES7
* ImmutableJS
* PreCSS ( supports SASS-like markup in your CSS )
* PostCSS ( it support CSS modules, and we recommended B.E.M style )
* Webpack 3
* Reselect
* Lazy Loading component supports
* Type Checking with Babel Type Check ( Flow syntax )
* ESLint for syntax check
* Jest and Enzyme for Unit testing
* Thunk
* DocMonitor (Redux debugging tool)

Workflow

* Development
  * Hot Module Reload during development
  * Built-in lightweight config system
  * Built-in fancy cli dashboard for reporting run time compile status
  * Built-in support for multiple device concurrent debugging
* Build / Production
  * Production bundle analyzing capability
  * CSS / HTML / JS minification / Image optimization when built
  * JS code duplication removal during built ( tree shaking capability )
  * Redux Tool Monitoring
* Deployment
  * Built-in git commit hook, helpful for CI/CD process
  * Built-in process to deploy files directly to S3 ( optional )
* Productivity
  * Highly configurable build and workflow system ( webpack )
  * Minimal setup time and allow you to invest into things that matters
  * Everything automatic, you just care about development, nothing else \o/ Yeah ?!

If you are interested, please read the `package.json` for all installed modules and plugins.

## Table of Contents

Basic
1. [Installation](#installation)
1. [Initialize your project](#initialize-your-project)
1. [Suggested Workflow](#suggested-workflow)
1. [Folder Structure](#folder-structure)
1. [Production Readiness](#production-readiness)
1. [Configuration](#configuration)
1. [Port Configuration](#port-configuration)
1. [Installing Dependencies](#installing-dependencies)

Advanced
1. [Lazy Loading Component](#lazy-loading-component)
1. [Writing Unit Test](#writing-unit-test)
1. [Configure git commit hook](#configure-git-commit-hook)
1. [Multiple Device Concurrent Debugging](#multiple-device-concurrent-debugging)
1. [Developing Template](#developing-template)
1. [Production Optimization and Bundle Analysis](#production-optimization-and-bundle-analysis)
1. [Integration Note](#integration-note)
1. [QA](#qa)

Other
1. [Knowledge Base Reading](#knowledge-base-reading)
1. [How to Contribute](#how-to-contribute)
1. [Updates](#updates)

# Basic

## Installation


### Prerequisite

You need to have Node.js installed.

[Instruction for installing NodeJS in Window](http://lmgtfy.com/?q=install+nodejs+window)

### Post Installation

If you would like to have Redux debug capabilities, you can download this Chrome extension [Redux DevTool](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

![Redux DevTool](https://www.dropbox.com/s/wni425e3d4xiy85/redux-devtool.png?raw=1)


## Initialize your project

Now run the following commands in your terminal

**NOTE: You only need to run this once!**

```sh
$ npm install # This will install the necessary packages to use the app
```

**That's it!**


### To run the app in Development Mode

```sh
$ npm run start
```

Wait about 30 seconds for your development environment to initialize.

When it finishes, open your browser and go to `http://localhost:3002/`

If you see the landing page, it means you have set up everything successfully.


### List of NPM Commands


```sh
$ npm run start     # build and load the app using local server
$ npm run build     # build a minified production version
$ npm run lint      # linting using ESLint
$ npm run test      # run test using Jest
$ npm run clean     # it runs before each build, so you don't need to
$ npm run watch     # Monitor for file changes and run lint + unit tests.
```


## Suggested Workflow


After you check out the repo, I will usually do the following :

0. Go to your project root in your host machine
1. Run `npm run start` in your terminal ( wait until the dashboard show complete status )
2. Your browser will automatially load the app at `localhost:3002`
3. Make code changes
4. If there are compilation errors, you will see it in the terminal dashboard
5. Watch your code changes reflect on browser without refreshing
6. Repeat your development steps


## Production Readiness

React Redux Boilerplate supports production preview, which means that you can run the production build job and see how it looks like in production.

1. Run `npm run build` and wait until it is done
2. Go to the project `dist`, you will see a `index.html`  (template is customizable, please read `Developing Template` section)
3. Open that `index.html` in your browser, and that is the build version that just got generated

### Difference between `npm run start` v.s. `npm run build`

`npn run start` is best to do JS / CSS only changes, and it comes with live reload functionality

`npm run build` is for testing what happen if your frontend assets are optimized ( production level code )

## Configuration
React Redux Boilerplate has two configuration strategies, one is for normal configuration, the other one is for sensitive information that you don't want others to know.

### Configuring application

If you look at folder `config`, there are 3 files

`default.json` - all default configuration
`development.json` - when you run `npm run start`, it will pull configuration from that file
`production.json` - when you run `npm run build`, it will use this configuration

## Port Configuration
There will be a chance that you will need your port to be other than `8080`.  For example, your local backend service might already take `8080`; Or you want to run multiple project, one on `8080` and one on `80801`.

If you are running one project that needs a different port, you can just modify one place
1) `default.json` --> `port` section.

But if you want to run multiple projects at the same time, you will need to configure ports in two places
1) `default.json` --> `port`
2) Dashboard port --> `package.json` --> `dev`  ( default dashboard port is `9901` )


## Writing Unit Test

We are using Jest and Enzyme for unit testing, please refer to the Knowledge Base section below for more information.

Please put your unit test in the same folder as the componnent/class your testing.  All unit test my end with .spec.js.

For example, if you have the component Hello.jsx in /src/components/hello/, then create the unit test Hello.spec.js in the same folder.

## Configure git commit hook

We are using `husky` for preventing developers check in bad commits. Please go to package.json and look for `husky` the default settings. `husky` supports any git hooks and you can configure it to fit your needs.


## Developing Template

The `dist/index.html` is a generated artifact. If look at our sample template at `src/assets/template/_default.html`, the `dist/index.html` is generated from that file.

## Production Optimization and Bundle Analysis

For optimization, you can tweak the `config` under the following.  This optimization covers basic use case, feel free to make modification to fit your needs.

```
  "optimization": {
    "commonMinCount": 3,   // how many times a module is used before we consider it a common module ?
    "cssExclusion": true,  // do you want to exclude css from this optimization ?
    ...
  },
```

This boilerplate shipped with `Production Bundle Analysis` tool which is `turn on` by default and will give you insight to optimize the production assets.

For example, when you run `npm run build` with `"analyzeMode": true`, you should see something like the following at the end of your build.

The tool is to help you understand what your bundle looks like and what is included in your bundle.

![Production Bundle Analysis](https://www.dropbox.com/s/zun4n4tgp059neh/bundle-analysis.png?raw=1)

You can turn `on` and `off` the analysis feature

```
  "optimization": {
    ...
    "analyzeMode": true,   // changing to false will turn it off
    "analyze": {
      "port": 8888  // it will open localhost:8888 and show your bundle analysis
    }
  },
```


# Other

## Knowledge Base Reading

### ES6

* [ES6 for Humans](https://github.com/metagrover/ES6-for-humans)
* [ES6 Compatible Table](http://kangax.github.io/compat-table/es6/)

### React

* [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
* [Synchronization of props with state is an anti-pattern](https://github.com/JedWatson/react-select/issues/70)
* [How Virtual-DOM and diffing works in React](https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e)

### Redux

* [Redux](http://redux.js.org/)
* [You might not need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)
* [Redux without profanity](https://www.gitbook.com/book/tonyhb/redux-without-profanity/details)
* [Learned from reading the Redux source code](https://medium.freecodecamp.com/what-i-learned-from-reading-the-redux-source-code-836793a48768?gi=4bdf3c9f3396#.rjwu6x9sc)
* [Redux Saga](https://redux-saga.js.org/)
* [Usage of Reselect in a React-Redux Application](https://dashbouquet.com/blog/frontend-development/usage-of-reselect-in-a-react-redux-application)

### Webpack

* [Webpack how-to](https://github.com/petehunt/webpack-howto)
* [Webpack - The Confusing Part](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9)
* [Lazy Loading and Code Split for React Route](https://github.com/webpack/react-proxy-loader)
* [Lazy Loading and Code Split for Components](https://github.com/jamiebuilds/react-loadable)


### Relevant Knowledge

* [ImmutableJS for beginners](https://github.com/iroy2000/immutablejs-for-beginners)
* [Learning PostCSS](https://github.com/postcss/postcss)
* [Jest = Awesome JS Testing Framework](https://facebook.github.io/jest/docs/tutorial-react.html)
* [B.E.M 101](https://css-tricks.com/bem-101/)
* [React Responsive](https://github.com/contra/react-responsive)
* [Storybook.JS](https://storybook.js.org/)

### Best Practice

* [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)
* [Lessons from migrating a large codebase to React 16](https://blog.discordapp.com/lessons-from-migrating-a-large-codebase-to-react-16-e60e49102aa6)
* [B.E.M: 10 Common Problems And How To Avoid Them](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/)
* [Isomorphic JavaScript, The Future of Web Apps](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)
* [The Cost Of JavaScript](https://medium.com/dev-channel/the-cost-of-javascript-84009f51e99e)
