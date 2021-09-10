function fibonacci(num) {
  if (num == 0){
    return 0
  }
  else {
let a = 0
let b = 1
let result = b

for (let i = 1; i < num; i++){
  
  result = a + b
  a = b
  b = result
}
return(result)
}
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution


// let a = 0
// let b = 1
// let result = b

// for (let i = 1; i < 100; i ++){
//   console.log(result)
//   result = a + b
//   a = b
//   b = result
  
// }