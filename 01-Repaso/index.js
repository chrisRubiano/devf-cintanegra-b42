const request = require('request');

const PUNKAPI_API_URL = 'https://api.punkapi.com/v2/beers/random';
request.get(PUNKAPI_API_URL, (error, response, body) => {
    if (response.statusCode === 200) {
      beer = JSON.parse(body)[0];
      console.log(`${beer.name}, ${beer.tagline}`);
    } 
    else console.log(resposen.statusCode, error);
});