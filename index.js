const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   tutorials.map(t => t.charAt(0).toUpperCase() + t.slice(1));
//   // return tutorials
// }
// console.log(titleCased)

const titleCased = () => {
  return tutorials.map(tutorial => capitalize(tutorial))
}	

function capitalize(tutorial) {
  return tutorial
  .split(' ')
  .map(word => word[0].toUpperCase() + word.substr(1))
  .join(' ');
}