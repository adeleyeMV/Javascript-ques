// Sum All Primes

function isPrime(num){
  for(let i=2; i*i<=num; i++)
      if(num%i == 0) return false;
  return true;
}

function sumPrimes(num) {
  let i = 2, sum = 0;
  while(i<=num){
    if(isPrime(i)) sum += i;
    i++;
  }
  return sum;
}

sumPrimes(10);
