# Static Content challenge

**NB: Please do not fork this repository, to avoid your solution being visible from this repository's GitHub page. Please clone this repository and submit your solution as a separate repository.**

The challenge here is to create a node.js application that displays HTML pages at URLs that match the names of the folders in the `content` folder. The content of these pages should come from a combination of the template HTML file and a markdown file containing the content.

For example, for a folder called `about-page`, a request to `/about-page` would return a HTML page created from the `template.html` template and the `about-page/index.md` content file. The `template.html` file contains a `{{content}}` placeholder that would be replaced by the content for each page.

This repository contains a `template.html` template file and a `content` folder with sub-folders containing `index.md` markdown files.

The application should be shipped with three tests:

* one that verifies that requests to valid URLs return a 200 HTTP status code
* one that verifies that requests to valid URLS return a body that contains the HTML generated from the relevant `index.md` markdown file
* one that verifies that requests to URLs that do not match content folders return a 404 HTTP status code

Your application may make use of open-source code libraries. It is entirely up to you how the application performs the challenge.

## Setup

* Clone or download the repository.
* Run `yarn` in the console.
* Run `nodemon` in the console. Will run on Port 4000.
* For tests, run `yarn test`.

## Process

The first thing I did was to set up an express server that was routed to a home page, which when called upon would return the message 'Hello World'. Once this was set up, I checked that it was working using Insomnia. I then created a function which would take the url of the get request and verify that a file name matching the url existed. If the file did not exist, the get request would fail. If it did exist, the correct file would be retrieved and inserted into the template HTML file before being sent back as a response. I installed bluebird to enable me to write this in promise form.

I then set up a test suite using mocha and chai, and added an appropriate script into the package JSON. All three tests would take a url and would be expected to output an appropriate response. The tests with the valid url returned a 200 response code and included the correct HTML data. The test with an invalid url returned a 404 response.
