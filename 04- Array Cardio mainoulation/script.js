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
      console.log(boulevards);

      const de = boulevards.map(boulevard => boulevard.textContent).filter(streetName => streetName.includes('de'));
      console.log(de);
  
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

    console.log(eighthQuest);
