// Sum All Odd Fibonacci Numbers

function sumFibs(num) {
  let sum = 0, first = 1, second = 1, third;
  
  while(first <= num){
    if(first%2 != 0)  // check odd fibonacci numbers
      sum += first;

    third = first + second;
    first = second;
    second = third;
  }

  return sum;
}

sumFibs(75025);
