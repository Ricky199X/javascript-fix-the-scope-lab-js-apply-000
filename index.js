var animal = 'dog'

function myAnimal() {
  return animal
}

<<<<<<< HEAD
function yourAnimal() {
  var animal = 'cat';
=======
function yourAnimal(cat) {
>>>>>>> 353baab078b022746a6dba29383f5a976cbc1a39
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal;
}
const two = 2

function add2(n) {
  return n + two;
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = 'FUNKY!'
