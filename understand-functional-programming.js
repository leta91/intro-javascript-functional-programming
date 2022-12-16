// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line

console.log(getTea(40)); // yields 40 times greenTea within one array separated by commas
/*
[ 'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea',
  'greenTea' ]
  */
