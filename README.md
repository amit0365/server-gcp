# Node.js/Express Boilerplate for GCP 🐣
[![Dependencies](https://img.shields.io/david/cortl/express-gcp.svg)](https://david-dm.org/cortl/express-gcp)
[![Dev Dependencies](https://img.shields.io/david/dev/cortl/express-gcp.svg)](https://david-dm.org/cortl/express-gcp?type=dev)
![Size](https://img.shields.io/github/languages/code-size/cortl/express-gcp.svg)
[![License](https://img.shields.io/github/license/cortl/express-gcp.svg)](LICENSE)

## About
Boilerplate application for Node/Express on Google Cloud App Engine

## Getting Started

### Prerequisites
Google Cloud Platform project setup and the [Google Quickstart "Before You Begin"](https://cloud.google.com/appengine/docs/standard/nodejs/quickstart#before-you-begin) steps followed.

### Installing
1. `npm install`

### Usage & Developing
1. `npm run dev`
3. Develop! 🎉

### Testing
We prefer to use [Mocha] combined with [Sinon] and [Chance] to unit test our applications.  You can auto-run the tests using a tool called [Nodemon] which will auto-run the tests.  Some helpful commands to use when you want to run a specfic set of tests are

`nodemon --watch test --exec "Describe Block"`

for this sample project you could use
`nodemon --watch test --exec "Index Router"`
which would run all the tests under
```
describe('Index Router', () => {
    it('should run this test', () => {});

    describe('GET /', () => {
        it('should also run this test', () => {});
    });
});
```

### Logging

Logs for this application can be found in your [GAE log page](https://console.cloud.google.com/logs/viewer)
Examples for querying JSON based logs can be found [here](https://cloud.google.com/logging/docs/view/advanced-queries)

### Deploying
1. `gcloud app deploy`
2. `gcloud app browse`

#### Circle CI

Create a service account that you'll use to deploy the application with after it has been built.  It will need the App Engine Admin role.  After you've downloaded the credentials, copy the entire contents into an environment variable called `GCLOUD_SERVICE_KEY` under the url
https://circleci.com/gh/<your username>/<your repo>/edit#env-vars.  Be sure to add the `GOOGLE_PROJECT_ID` (which can be found in the dropdown of your Google Cloud Console).  Last thing you need to add is the location you would deploy to, `GOOGLE_COMPUTE_ZONE`, your zone can be found under [here](https://cloud.google.com/compute/docs/regions-zones/)