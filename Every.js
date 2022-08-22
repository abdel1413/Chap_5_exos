//creat a function that takes an array and
//a testing function using every method
function every(array, predicate) {
  for (let element of array) {
    //using de Morgan law
    //a && b ==> !(!a || !b)
    if (!predicate(element)) {
      return false;
    }

    return true;
  }
}

console.log(every([1, 3, 5], (n) => n < 10));
