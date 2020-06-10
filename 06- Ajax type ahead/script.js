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

// Adds commas after each 3 numbers - US number style -
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

// Function that fill the result in HTML format
function displayResults(e){
    const matchArray = findMatches(this.value, cities);
    console.log(e.type);
    suggestions.style.visibility = "visible";
    const returnedHTML = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');// To highlight the researched value in the resultes
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `<li>
                    <span class= "name">${cityName}, ${stateName} </span>
                    <span class="population"> ${numberWithCommas(place.population)} </span>
                </li>`; 

    }).join(''); // To convert the map returned result from array to a string 

    suggestions.innerHTML = returnedHTML;
}

// TODO 
// Display how many results are matched to the searched word
// Hide the list before search and after selecting the desired result
// Sord the result with their population or other criteria
// Add filter in the search bar

searchInput.addEventListener('change', displayResults);
searchInput.addEventListener('keyup', displayResults);
