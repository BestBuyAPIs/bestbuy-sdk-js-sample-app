# Best Buy API Sample App
This is a sample React, Flux, Node.js app using the Best Buy developer API. 

[![Build status](https://img.shields.io/travis/BestBuyAPIs/bestbuy-sdk-js-sample-app.svg?style=flat-square)](https://travis-ci.org/BestBuyAPIs/bestbuy-sdk-js-sample-app)
[![Dependency Status](https://david-dm.org/BestBuyAPIs/bestbuy-sdk-js-sample-pp.svg)](https://david-dm.org/BestBuyAPIs/bestbuy-sdk-js-sample-app)

The package includes a sample React.js application using Flux architecture to demonstrate using the helper in a React-based web app served with Node.js.

## Getting Started
This assumes the user already has a developer API Key from http://developer.bestbuy.com/ and configured for the environment. 

Clone the repository.

    git clone https://github.com/BestBuyAPIs/bestbuy-sdk-js-sample-app.git

Install the dependencies with:
    
    npm install

***Many developers install gulp, grunt, bower, etc. globally. This package aliases the local node module to avoid problems when installing many global dependencies on CI servers, etc. In other words, to run this package, only running "npm install" is required. 
  
## Run the React app
Open a terminal to run the Grunt or Gulp tasks (we configured the project with both task runners) and enter either:

    npm run gulp

 or
     npm run grunt

Open another terminal and start the watch script so you can immediately have code changes trigger a rebuild

    npm run watch

Once the app is running (the watch window will print "Express server listening on port 3001"), open up a web browser and navigate to localhost:3001

## Online Resources
Best Buy Developer Portal: https://developer.bestbuy.com

Best Buy API Query Builder: https://github.com/BestBuyAPIs/bby-sdk-js

Best Buy API Query Builder: https://github.com/BestBuyAPIs/bby-query-builder

Thinking in React: https://facebook.github.io/react/docs/thinking-in-react.html

Flux: https://facebook.github.io/flux/docs/overview.html

### LICENSE
MIT
