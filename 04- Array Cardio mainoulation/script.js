 // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
  
      const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
  
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      const firstQuest = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
      /* console.table(firstQuest); */


      // Array.prototype.map()
      // 2. Give us an array of the inventors first and last names
      const secondQuest = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
      /* console.table(secondQuest); */


      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
      const thirdQuest = inventors.sort((inventor1, inventor2) => inventor1.year - inventor2.year);
      /* console.table(thirdQuest); */
      

      // Array.prototype.reduce()
      // 4. How many years did all the inventors live all together?
      let totalLives = 0;
      inventors.forEach(inventor => totalLives += (inventor.passed - inventor.year));
      // Another magic way to do it is using the reduce method
      const totalYears = inventors.reduce((total, inventor) => {
          return total + (inventor.passed - inventor.year)
        }, 0); // 0 is the initial value of total

      /* console.log(totalLives);
      console.log(totalYears); */

      // 5. Sort the inventors by years lived decendently
      const fifthQuest = inventors.sort((inventor1, inventor2) => (inventor2.passed - inventor2.year) - (inventor1.passed - inventor1.year))
      /* console.table(fifthQuest); */
  
      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      
      // Converting Nodelist object returned by the querySelectorAll to an Array using the new spread operator (ES6)
      const boulevards = [...document.querySelectorAll('.mw-category a')];
      
      // An alternative of converting a NodeList to an array is by the Array.from() method
      //  const boulevards = Array.from(document.querySelectorAll('.mw-category a'));
      
      /* console.log(boulevards); */

      const de = boulevards.map(boulevard => boulevard.textContent).filter(streetName => streetName.includes('de'));
      
      /* console.log(de); */
  
      // 7. sort Exercise
      // Sort the people alphabetically by last name
      const seventhQuest = people.sort((person1, person2) => {
          const [last1, first1] = person1.split(', '); // Split the names with commas and store last and first names into 2 variables
          const [last2, first2] = person2.split(', '); // Do smae thing with person 2
          return last1 < last2 ? -1 : 1;
      });
      /* console.table(seventhQuest); */

      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
      // This consist of counting the number of occurrence of each word here
      const eighthQuest = data.reduce((words, item) => { 
          if(!words[item]) {words[item] = 0;}
          words[item]++;
          return words;
      }, {
    });

/*     console.log(eighthQuest); */

// ## Array Cardio Day 2

const persons = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const thereIsAdult = persons.some(person => ((new Date()).getFullYear() - person.year) >= 18);
/* console.log(thereIsAdult); // Should return true */

// Array.prototype.every() // is everyone 19 or older?
const isAllAdults = persons.every(person => ((new Date()).getFullYear() - person.year) >= 18);
/* console.log(isAllAdults); // Should return false */

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(c => c.id === 823423);
/* console.log(comment); // Should return the second comment in the array */

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const commentIdx = comments.findIndex(c => c.id === 823423);
/* console.log(commentIdx); // Should return 1 */
comments.splice(commentIdx, 1); // Remove one element at the position commentIdx
// Second way to do it is with slicing and spread operation
const newComments = [
  ...comments.slice(0, commentIdx),
  ...comments.slice(commentIdx+1)
];
/* console.table(comments);
console.table(newComments);
 */

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(" ");

// Removing unecessary words
let betterWords = storyWords.filter( word => {
  if (unnecessaryWords.indexOf(word) === -1) {
    return word;
  }
} );

// Count number of occuerence for some words
let countOverused = [0, 0, 0];
storyWords.forEach( word => {
  if (overusedWords.indexOf(word) != -1){
    countOverused[overusedWords.indexOf(word)]++;
  }
});

/* // After removing unecessary words
console.log(betterWords.length);
// Counting over used words occurences
console.log(countOverused);
 */

 // Count sentences of the paragraph
let remarks = ['.', '!', '?'];
let countSentences = 0;
storyWords.forEach (word => {
  if(remarks.indexOf(word[word.length - 1]) != -1){
    countSentences++;
  }
});

/* console.log(countSentences);
// Return the string array to a text
console.log(betterWords.join(' ')); */

// Make intersection between two arrays
const  justCoolStuff = (array1, array2) => {
  let res = array1.filter( x => {
    if(array2.indexOf(x) != -1) {
      return x
      }
    
    })
    return res;
}


const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

/* console.log(justCoolStuff(myStuff, coolStuff)); // Should print [ 'fruit-by-the-foot', 'skateboards', 'my room'  */


const isTheDinnerVegan = array => {
  let res = array.filter(x => x.source !== 'plant');
  return (res.length === 0);
  };


// Feel free to comment out the code below to test your function

const dinner = [{
  name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

/* console.log(isTheDinnerVegan(dinner))
// Should print false */

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:

const sortSpeciesByTeeth = array => array.sort( (a,b) => {
  if(a.numTeeth < b.numTeeth) {
    return -1;
  }
  if(a.numTeeth > b.numTeeth) {
    return 1;
  }
  if(a.numTeeth === b.numTeeth) {
    return 0;
  }
})

// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray));
/*
// Should print [ { speciesName: 'human', numTeeth: 32 },
  { speciesName: 'dog', numTeeth: 42 },
  { speciesName: 'shark', numTeeth: 50 },
  { speciesName: 'alligator', numTeeth: 80 } ]

*/

const dogFactory = (name, breed, weight) => {
  return {
  _name: name,
  _breed: breed,
  _weight: weight,
  get name() {
    return this._name;
  },
  get breed(){
    return this._breed;
  },
  get weight(){
    return this._weight;
  },
  set name(newName){
    this._name= newName;
  },
  set breed(newBreed){
    this._breed= newBreed;
  },
  set weight(newWeight){
    this._weight = newWeight;
  },
  bark: () => 'ruff! ruff!'
  ,
  eatTooManyTreats() {
    this.weight =  this.weight + 1;
    }
  }
}
let dog = dogFactory('Joe', 'Pug', 27);
console.log(dog);
console.log(dog.bark());
dog.eatTooManyTreats();
console.log(dog.weight);

