function diffArray(arr1, arr2) {
  return arr1
  // merge the arrays 
  .concat(arr2) 
  // use filter to get the new array 
  .filter( elem=> 
    // check if the elem from the new merged array is not in both original arrays
    !arr1.includes(elem) || !arr2.includes(elem) );
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
