function calculateAverageAge(persons){
  const totalAge = persons.reduce((accumulator, person) => {
    return accumulator + person.age / persons.length;
  }, 0);
  return Math.round(totalAge) ;
}


function calculateAverageAge(persons) {
  let media=0;
  for(let i=0; i<persons.length; i++){
    media+=persons[i].age/persons.length
  }
  return Math.round(media) 
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);