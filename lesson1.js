
/*Lesson 1: Variables, Types & Coercion*/


// Block Scope

let x = 10;

{
    let x = "priyu"
    console.log("Inside:", x) // block scope
    console.log(typeof x)
}

console.log("Outside:",x)  // Global



// coersion

console.log("7"+2); // + favors the string and other operators favours the numbers
console.log("9" - 2);
console.log("9" * 2);
console.log("9"/2);
console.log("12" + true)
console.log("" == false) // == converts both of them to same type and check
console.log("" === false) // checks if the type of them are same and then only it would decide if they both are same

/* falsy things - 0 , false , NaN ,-0, undefined , ""  , null  */

if (0) console.log("A runs")
else console.log("B runs")    

if ("0") console.log("A runs")  
else console.log("B runs")       
 
if (NaN) console.log("A runs")
else console.log("B runs")       


if (undefined) console.log("A runs")
else console.log("B runs")         
    
if (-0) console.log("A runs")
else console.log("B runs")


/* The type of function */
console.log(typeof x)
console.log(typeof null)
console.log(typeof function(){})
console.log(typeof [])
console.log(typeof undefined)
console.log(typeof false)








