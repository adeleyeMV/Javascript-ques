function sumAll(arr) {
  
  // sort the numbers first to get increasing order
  arr.sort( (a,b)=>{
    return a===b? 0: a>b? 1: -1;
  })

  // the sum of those two numbers and 
  // the sum of all the numbers between them.
  let sum = 0;
  for(let i=arr[0]; i<=arr[1]; i++){
    sum += i;
  }

  return sum;
}

sumAll([10, 5]);
