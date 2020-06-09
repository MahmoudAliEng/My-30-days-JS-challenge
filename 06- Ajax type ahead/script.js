// A url to a JSON data (an array) of 1000 US cities
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// The coming data from the web
const cities = [];

// Fetching JSON data from URL and put it in a new array
fetch(endpoint)
   .then(blob => blob.json())
   .then(data => cities.push(...data));
