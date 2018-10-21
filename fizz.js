//if number is divisible by 3 fizz
//if number is divisible by 5 buzz
//if number is divisible by both fizz and buzz


//create a for loop that sets the value of the 
for (let i = 0; i <= 100; i++) {
  //you have to do the modulus of both values first so that loop will continue to run
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`The number is: ${[i]}, What the fizzbuzz!`);
    //if  number is divisible by 3 print to console
  } else if (i % 3 == 0) {
    console.log(`The number is: ${[i]}, What the fizz!`);
    //if  number is divisible by 5 print to console
  } else if ( i % 5 == 0) {
    console.log(`The number is: ${[i]}, What the buzz!`)
  }
}

