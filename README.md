## Summary

This project was prepared for the Ceros automation take home challenge. It uses the provided framework to test saucedemo.com without any additional dependencies. Note that I had to make a couple of changes to the framework to enable it to work with a non-angular app. 

I tested this on a clean system, but please feel free to reach out to quinn.powell@gmail.com with any questions or issues. 

- Quinn

## Setup:
* Install [Node](http://nodejs.org) (v8.x.x or later)
* `npm i` to install the project dependencies

## Run tests:
* run tests via plain Protractor `node_modules/.bin/protractor conf.js`
* run tests `npm test` (runs via flake, which re-runs failed tests)
* run with flake `./flake conf.js`

## Troubleshooting
* run `node -v` and make sure your node version is 8.x.x or greater
* `webdriver-manager` _should_ have updated on install, but if not, run `npm run update` to be sure
