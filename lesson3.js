/*Arrays Deep Dive (map, filter, reduce)*/

 const array = ["priya","sam","vijay"]
 array[0]; // arrays in javascript are 0 indexed

 console.log(array.length);

 array.push("Avi"); // appending an element at last
 console.log(array);

 array.pop(); // removing from last
 console.log(array);

 array.unshift("kuttu"); // adding at first
 console.log(array);

 array.shift(); //removing the first
 console.log(array);

 array.includes("kuttu"); // check if the element exists in the array
 console.log(array);

const index = array.indexOf("priya"); // finding the index
 console.log(index);

 /*⚠️ Important: Most array methods don't change the original.
  They return a new array. This is called being immutable — and React loves immutability.
 */


/// ForEach Loop

const nums = [1,2,4,5];
nums.forEach(n =>{
    console.log(n);
}
);

// Note - Returns undefined. Just loops. Use it when you want side effects (like console.log), not when you want a new array.

/// Map


// simple doubling
const double = nums.map(n => n*2);
double.forEach(n=>{
    console.log(n);
});


// chnaging the names into upper case 
const names = ["priya" , "avi", "sam"];
const upper = names.map(n => n.toUpperCase())
upper.forEach(n =>
{
    console.log(n);
}
);

// getting only the names in the objects
const users = [
    {
        name : "priya" , age : 22 , active : true
    } 
    ,
    {
        name : "sam" , age : 24 , active :false
    },
    {
        name : "avi" , age : 23 , active : true
    }
]

const nameonly = users.map(u => u.name);
nameonly.forEach(u=>{
    console.log(u);
});


// filter operation  
const activeonly = users.filter(u => u.active)
activeonly.forEach(u =>
{
    console.log(u);
}
);
// -- doubt -- how can I return only the names of the user who are active? -- doubt gonna clear by the chaining



// reduce operation - i guess we have used this in the rest parameters?
const total = nums.reduce((sum,n) => sum+n ,0);
console.log(total);


// Note - we can use this for a react world puprosse
const products = [
    {
        name : "bun" , price : 20
    }
    ,
    {
        name : "jam" , price :10
    } 
    ,
    {
        name : "chips" , price : 20
    }
]
const totalprice = products.reduce((sum,p) => sum + p.price ,0);
console.log(totalprice);

// find operation
//filter -	Array (all matches)	You want a list use 
//find -	Single item (first match) or undefined	You want one thing use 

const ans = products.find(p => p.price == 20);
console.log(ans);

/* Now the most important thing chaining  */
// lets do it my way

const result = users.filter(u => u.active === true).map(u => u.name);
console.log(result);

const cluster = nums.filter(n => n%2 === 0).map(n => n*3).reduce((sum,n) => sum+n ,0);
console.log(cluster);

