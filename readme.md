# Pass Through Server
A simple pass through server for accessing Yelp API from a client.

Only a few endpoints are exposed by default.

## How to Use
Clone this repository and run

`npm install`

to install dependencies.

Then set your Yelp API key and Yelp client secret in the config.js file and run

`npm start`

By default the server starts on port 3000.

## Endpoints
### /bars
This endpoint maps to /search on the Yelp API. It accepts a query  city
which is the name of the city in which you wish to search for bars.

To test this API use postman or otherwise and call:

`http://localhost:3000/bars?city=Atlanta`

