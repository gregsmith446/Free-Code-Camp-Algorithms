//SUM ALL PRIMES

// sum all prime numbers up to and including the provided number (if it is prime) 

// a prime number is a num greater than 1 and having only 2 divisors: 1 and itself.
// 2 is prime because only divisible by 1 & 2

// input: a number, may or may not be prime.

// output: an integer: it'll be the sum of the primes (all prime numbers added)
// starting at 2 and all primes up to and including the provided number

// example: 2 + 3 + 5 + 7 = 17

// need to use "For Loops"
// need to use "push()"

//solution:
// find prime number for range: 2 through input (10)

// 1.) Check if number is prime
//      2.) If yes, add it to our 'running total'
// 3.) If not,
// 4.) Repeat with next number
// add prime numbers/ aka Print running total = acessible outside of scope
// *running total does not reset*

// running total = 2 -> 5 -> 10 -> 17
// return running total

// output: boolean

// Loop 2 through n (non-inclusive)
// check if input is divisible by current number
//notprime
// if not 
//check the next number
//is prime

function isPrime(num) { //find prime numbers
  for (var n = 2; n < num; n++) { //looping structure
    if (num % n == 0) { //if number is divisible by 2
      return false; // number is not prime
    }
  }
  return true; // number is prime
}

function sumPrimes(num) { //adds prime nums in range
  var total = 0;
  for (var n = 2; n <= num; n++) {
    if (isPrime(n)) {
      total += n; //short form
      //total = total + n; // long form
    }
  }
  return total;
}

// console.log("2", isPrime(2));
// console.log("5", isPrime(5));
// console.log("9", isPrime(9));

sumPrimes(10);
