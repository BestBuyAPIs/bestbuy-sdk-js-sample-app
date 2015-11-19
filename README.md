# Best Buy API Sample App
This is a sample React, Flux, Node.js app using the Best Buy developer API. 

[![Build status](https://img.shields.io/travis/BestBuyAPIs/bestbuy-sdk-js-sample-app.svg?style=flat-square)](https://travis-ci.org/BestBuyAPIs/bestbuy-sdk-js-sample-app)
[![Dependency Status](https://david-dm.org/BestBuyAPIs/bestbuy-sdk-js-sample-pp.svg)](https://david-dm.org/BestBuyAPIs/bestbuy-sdk-js-sample-app)

The package includes a sample React.js application using Flux architecture to demonstrate using the helper in a React-based web app served with Node.js.

## Getting Started
 1. Sign-up for a developer API Key at https://developer.bestbuy.com/
 2. Create an environment variable called BBY_API_KEY and set it equal to your developer API key. 
 3. Clone the repository.
    `git clone https://github.com/BestBuyAPIs/bestbuy-sdk-js-sample-app.git`
 4. Install bower globally
 	`npm i bower -g`   
 5. Install grunt globally
    `npm i grunt -g`
 6. Install the dependencies with:
    `npm install`

 
## Run the React app
 1. Open a terminal to run the Grunt tasks
    `grunt`
 2. Open another terminal and start the app with
 	`npm start`
    	or start the watch script which starts the server and also watches for code changes to trigger a rebuild
    `npm run watch`

Once the app is running, the window will print "Express server listening on port 3000"; open up a web browser and navigate to [http://localhost:3000](http://localhost:3000).

## Online Resources
Best Buy Developer Portal: https://developer.bestbuy.com

Best Buy API SDK for JavaScript: https://github.com/BestBuyAPIs/bby-sdk-js

Best Buy API Query Builder: https://github.com/BestBuyAPIs/bby-query-builder

Thinking in React: https://facebook.github.io/react/docs/thinking-in-react.html

Flux: https://facebook.github.io/flux/docs/overview.html

### LICENSE
MIT
