// A url to a JSON data (an array) of 1000 US cities
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// Linking the  search bar and the suggestions list
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// The coming data from the web
const cities = [];

// Fetching JSON data from URL and put it in a new array
fetch(endpoint)
   .then(blob => blob.json())
   .then(data => cities.push(...data)); // To get elements inserted directly not array inserted as one element

// Function that return the matches cities or states case-insensative for a research word
function findMatches(wordMatch, cities) {
    return cities.filter(place => {
        let regex = new RegExp(wordMatch, 'gi');
        return place.state.match(regex) || place.city.match(regex);
    });
}

