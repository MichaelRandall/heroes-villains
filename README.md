# Angular Heroes and Villians Details Application


## Overview

This simple angular application displays details about comic book heroes and villians and also utilizes features from AngularJS

## Prerequisites

### Git

- A good place to learn about setting up git is [here][git-setup].
- You can find documentation and download git [here][git-home].

### Node.js and Tools

- Get [Node.js][node].
- Install the tool dependencies: `npm install`


## Workings of the Application

- The application filesystem layout structure is based on the [angular-seed][angular-seed] project.
- There is no dynamic backend (no application server) for this application. It currently uses static
  JSON files  for data.




### Installing Dependencies

The application relies upon various Node.js tools, such as [Bower][bower], [Karma][karma] and
[Protractor][protractor]. You can install these by running:

```
npm install
```

The scripts described below will run this automatically but it doesn't do any harm to run
then whenever you like.

### Running the Application during Development

- Run `npm start`.
- Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application 
  running.

### Unit Testing

We recommend using [Jasmine][jasmine] and [Karma][karma] for your unit tests/specs, but you are free
to use whatever works for you.

- Start Karma with `npm test`.
- A browser will start and connect to the Karma server. Chrome and Firefox are the default browsers,
  others can be captured by loading the same URL or by changing the `karma.conf.js` file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just
  change any of your these files.

### End-to-End Testing

We recommend using [Protractor][protractor] for end-to-end (e2e) testing.

It requires a webserver that serves the application. See the
_Running the Application during Development_ section, above.

- Serve the application with: `npm start`
- In a separate terminal/command line window run the e2e tests: `npm run protractor`.
- Protractor will execute the e2e test scripts against the web application itself. The project is
  set up to run the tests on Chrome directly. If you want to run against other browsers, you must 
  modify the configuration at `e2e-tests/protractor-conf.js`.

**Note:**
Under the hood, Protractor uses the [Selenium Standalone Server][selenium], which in turn requires 
the [Java Development Kit (JDK)][jdk] to be installed on your local machine. Check this by running 
`java -version` from the command line.

If JDK is not already installed, you can download it [here][jdk-download].