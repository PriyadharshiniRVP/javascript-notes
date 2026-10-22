/* Async or Await - Promise and fetch */

console.log(1);

setTimeout(() =>
 console.log(2),4000    // setTimeout is an asynchronous process
);

console.log(3);

// if its asynchronous, then how do we know when its done

// promises are used here

const data = fetch("https://www.linkedin.com/in/priyadharshini-ramachandran-535903217/");
console.log(data);  // this is not the data, its like a placeholder for 2 sec or more during the waiting time 
// and it would replaced by the actual data later.

/* after running this , this is what I got
1
3
Promise { <pending> }
2 
 */

// Promise is an object which represents the future value
// right now : the data is being fetched
// later : This is the data

/* 3 states of promises
=> pending => fullfilled => rejected
once a promise is fullfilled or rejected , it wont change again - it will be settled
 */

// using then and catch in  promises

fetch("https://www.linkedin.com/in/priyadharshini-ramachandran-535903217/") // fetch the api
     .then( response => response.json()) // convert to json
     .then( data => console.log(data)) // log the data
     .catch( error => console.log(error)); // if error occurs log the error


fetch("https://api.example.com/users")
     .then(res => res.json())
     .then(users => users.filter(u => u.active))
     .then(activeUsers => console.log(activeUsers))
     .catch(err => console.log(err));     

/* async or await */  
// this is like a sugar topping for promise,- it shows the async code as if it is sync   
// instead of using the chaining in then and catch we can use this :

async function getUsers()
{
     const response = await fetch("https://www.linkedin.com/in/priyadharshini-ramachandran-535903217/");
     const data = await response.json();
     console.log(data);


}   

getUsers();

// we can use the catch here too

async function getapi() 
{   try{
     const response = await fetch ("https://www.linkedin.com/in/priyadharshini-ramachandran-535903217/") ;
     const data = await response.json();
     console.log(data)
}
catch(error) {
    console.error("Something is wrong");


}
}

getapi();


//fetch is the new http request here like it will move data by communicating btw app and api ig

//get request
async function loadSome(){
    const response = await fetch("https://www.google.com"); // send http request and return promise for response
    const data = response.json(); //parses the response body as json and returns the data as promise
    console.log(data); // when the data finally arrives it will be logged

}
// why 2 steps for this get ? => the response comes in chunks.so, when the fetch executes it gets the headers
// when the body fully arrives it will be parses as json 
// => fetch resolves asa headers come. .json wait for the body

loadSome();

//post request

async function addUser(user){
    const response = await fetch("https://google.com",
        {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(user)
        });
     
        const data = await response.json();
        console.log(data);
}
addUser();


// we mention the method type, headers and body - like we do in postman

// fetch doesn't give http error code, we have to do it 


async function hello(){
    const response = await fetch("")
if(!response.ok){
            throw new Error(`HTTP Error : ${response.status}`)
        }
  

        return response.json();
    }

hello();


// promise all 

async function loadAll() {
    const [users, posts, comments] = await Promise.all([
        fetch("/api/users").then(r => r.json()),
        fetch("/api/posts").then(r => r.json()),
        fetch("/api/comments").then(r => r.json())
    ]);
    console.log(users, posts, comments);
}

// Promise.all:

// Runs all Promises in parallel

// Waits for all to complete

// If any fails → the whole thing rejects

// Returns an array of results in order

// fetch users (1s) → fetch posts (1s) → fetch comments (1s) = 3s


