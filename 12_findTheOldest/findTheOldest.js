const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  }
]

const findTheOldest = function(people){


  people.forEach((person) => {

    if (!person.yearOfDeath){
      person.yearOfDeath = 2024
    }

    person.age = person.yearOfDeath - person.yearOfBirth
  })
  //console.log(people)

  const sortedByAge = people.sort((person1, person2) => {
    return person2.age - person1.age
  })
  //console.log(sortedByAge)

  return sortedByAge[0]

};

//console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
