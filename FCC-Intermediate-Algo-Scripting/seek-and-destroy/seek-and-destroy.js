function destroyer(arr) {

  // finding the values to remove
  let valsToRemove = Array.from(arguments).slice(1);
    // or valsToRemove = Object.values(arguments).slice(1);

  return arr.filter(elem =>
    // checking if elem of original array is in valsToRemove array 
    !valsToRemove.includes(elem) );
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
