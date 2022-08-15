// Smallest Common Multiple

function smallestCommons(arr) {
  let [min, max] = arr.sort((a,b)=> a-b)
  let noOfDivisors = max - min + 1;
  
  let limit=1;
  for(let i=min; i<=max; i++) limit *= i;
  
  for(let multiple=max; multiple<=limit; multiple+=max){
    let count = 0;
    
    // check multiple is divisible by all numbers in range
    for(let i=min; i<=max; i++)
      if(multiple % i == 0) count++;
    
    if(count == noOfDivisors) return multiple;
  }
}

smallestCommons([5,1]);
