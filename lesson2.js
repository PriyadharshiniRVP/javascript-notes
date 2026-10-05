
/* Lesson 2 :Functions arrow functions and closuress */



// function declaration

function sub(a,b){
    return a-b ; // you should add the return instead of console.log because it would print undefined
}

console.log(sub(9,8))




// function expression

const add = function(a,b){
   return a+b
}

console.log(add(34,78))

// arrow function

const div = (r,p) =>{
    return r/p;
}
console.log(div(9,3))

// simplified arrow function
/*If your arrow function body is one line and just returns something, drop {} and return. Anything else, keep braces.
- Parameter = the placeholder in the function definition
- Argument = the actual value you pass in
example : In the thrice function n is the parameter and the  4 is the argument  */
const mul = (o,n) => o*n;
console.log(mul(9,7))

const greet = () => "Hey I am priya"
console.log(greet())

const thrice = n => 3*n
console.log(thrice(4))

const greetname = name =>{  // for default parameters - add the parameter like this (name = `priyu`)
    return `Hello` + " " +name;  
}
console.log(greetname(`priyu`)) 



/* Closure topic */
/*function outer(){
    let secret = 99;
    function inner(){
        console.log(secret);
    }
    return inner
}

const myfunc = outer(); 
myfunc();*/ // even if the outer function stopped the inner returned the secret this is called closure 

function outer() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const c1 = outer();
const c2 = outer();

c1();  // ?
c1();  // ?
c2();  // ?  /// different closure, so it does start from the beginning
c1();  // ?