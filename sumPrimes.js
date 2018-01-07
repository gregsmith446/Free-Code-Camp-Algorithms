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

// Step 1 --> find prime numbers
function isPrime(num) { // a function called isPrime that takes a number called num
  for (var n = 2; n < num; n++) { // starts with 2 and goes up by one number at a time
    if (num % n == 0) { //if number is divisible by 2
      return false; // number is not prime
    }
  }
  return true; // number is prime because it is divisible by 2
}

// Step 2 add prime numbers in a range
function sumPrimes(num) { // a function called sumPrimes that takes a number called num
  var total = 0; //created variable total to keep track of prime numbers
  for (var n = 2; n <= num; n++) { // starts with 2 and goes up by 1 number at a time until reaching the final provided number
    if (isPrime(n)) { //if the number is prime
      total += n; // add it to the total variable to keep a running total
      //total = total + n; // long form
    }
  }
  return total; //after finished, return the total of the variable total
}

// console.log("2", isPrime(2));
// console.log("5", isPrime(5));
// console.log("9", isPrime(9));

sumPrimes(10);
