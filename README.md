# Buster.js demos

For the demos with a package.json file in it, run `npm install` locally and `npm test` for tests.

Have a look at the package.json to see how the `npm test` command is setup for buster.js

## Hybrid tests and HTML Scaffold tests

* Run browser tests by opening the html file in your browser.

## Buster static

* Run `buster-static`

## Buster server

* Run `buster-server` on one terminal.
* Open the given url on your browser.
* Run `buster-test` on a separate server.

## Buster server with phantomjs

* Install [phantomjs](http://phantomjs.org/)
* Run `npm install` in the buster-server-tests directory
* Run `buster-server`
* On a separate terminal, run `phantomjs node_modules/buster/script/phantom.js &`
* Run `buster-test`
