# Buster.js demos

For the demos with a package.json file in it, run `npm install` locally and `npm test` for tests.

Have a look at the package.json to see how the `npm test` command is setup for buster.js

## Hybrid tests and HTML Scaffold tests

* Run browser tests by opening the html file in your browser.

## Buster static tests

* Run `buster-static`

## Buster server tests

* Run `buster-server` on one terminal.
* Open the given url on your browser.
* Run `buster-test` on a separate server.

## Buster server tests with phantomjs

* Install [phantomjs](http://phantomjs.org/)
* Run `npm install` in the buster-server-tests directory
* Run `buster-server`
* On a separate terminal, run `phantomjs node_modules/buster/script/phantom.js &`
* Run `buster-test`

Follow the same instructions for the AMD example.

## Buster server tests with AMD

Both examples for require.js and curl.js are shown using buster-server but can be easily adapted to the other ways of running browser tests.

The file and directory structure is slightly different to show off some of the issues which might arise with path configurations.
