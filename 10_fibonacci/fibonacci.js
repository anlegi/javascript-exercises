const fibonacci = function(input) {

let count
if (typeof input !== "number") // when input is not a number
  count = parseInt(input) // parseInt turns input into integer
else
  count = input // for integer cases

if (count < 0) return "OOPS"
if (count == 0) return count

let n1 = 0, n2 = 1, nextNumber;

for (let i = 2; i <= count; i++) { // starts from 2 bc we already have the first two terms
  nextNumber = n1 + n2
  n1 = n2
  n2 = nextNumber
}
  return n2
};

// Do not edit below this line
module.exports = fibonacci;
