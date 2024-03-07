const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

const getTheTitles = function(arr) {
  let arrTitle = []

  // How to access all keys and values of an object:
  // console.log("All keys: ", Object.keys(arr[1]))
  // console.log("All values: ", Object.values(arr[1]))

  arr.forEach(book => {
    arrTitle.push(book.title)
  })
  return arrTitle
};

console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
