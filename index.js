const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    //Inside the callback function, the tutorial name is split into an array of words using the split(' ') method. The space character is used as the separator.
  //The map() method is then used on the words array to create a new array based on the provided callback function.
//Inside the second callback function, word.charAt(0).toUpperCase() is used to capitalize the first letter of each word. word.charAt(0) retrieves the first character of the word, and toUpperCase() converts it to uppercase.
//  The word.slice(1) method is used to retrieve the remaining characters of each word, starting from index 1. This effectively removes the first character from each word.
//The result is an array of capitalized words.
//Finally, capitalizedWords.join(' ') joins the capitalized words into a single string, separated by a space.
//The map() method continues iterating over each tutorial name, performing the same transformations, and returns a new array with the title case tutorial names.
    const words = tutorial.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
  });
}
