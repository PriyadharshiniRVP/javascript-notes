/* Destructuring*/

/* The destructing from object or  array into single elements l */

// The old way of doing it

const user = {
    name : "priya",
    age : 18
};

const name = user.name;
const age = user.age;
console.log(name) ;
console.log(age);

// new way of doing it 
const people = {
    sname : "samu",
    sage : 23,
    city : "chennai"

};

const {sname , sage , city} = people;
console.log(sname);
console.log(sage);
console.log(city);

// we can also rename the elements it while doing it

const pop = {
    pname : "avi",
    page : 22,
    city : "noi"
};

const {pname : rname , page : rpage , city : rcity} = pop;
console.log(rname);
console.log(rpage);
console.log(rcity);

// add default values

const use = { 
    name : "priya"
};
const { name : uname , uage = 0 } = use;
console.log(uage);

//nested destructuring

const pup = {
    upname : "priya",
    address : {
        zip : 9090,
        upcity : "chennai"

    }
};

const {upname , address: {zip , upcity}} = pup
console.log(upname);
console.log(zip);


// Array destructuring

const arr = [1,2,3,4];
const [first, second] = arr;
console.log(first);
console.log(second)


const [,,,third] = arr;
console.log(third);


// Spread Operator - copies an arraays or objects into a new one

const a = [1,2,3];
const b = [5,7,8];

const s = [...a , ...b];
console.log(s);

// it would only copy the array not the memory or the reference

const num1 = [1,2,4];
const num2 = [...num1];
num2.push(99);
console.log(num2);

//object spreading

const useer = {
    name : "pri",
    age : 22
};

const  updated = {...useer , age : 23};
console.log(updated);

// add new keys while spreading 

const changed = {...useer , city : "nagai"}
console.log(changed);


// optional chaining
console.log(pup.address?.zip);
console.log(useer.address?.city);
// ? - use this  => if the left side exists,continue. else => stop & give me undefined


// combining everything :

const emp = [
    {ename : "priyu" , eage : 22 , active : true},
    {ename : "vijay" , eage : 28 , active : false},
    {ename : "eni" , eage : 25 , active : false}

];

const activeEmp = emp.filter(e => e.active)
                     .map(({ename:name})=> name);

console.log(activeEmp);


const update = emp.map( e => e.ename === "vijay" ?
               {...e , active : true} : e); // first check if vijay exists then => use spread => make active true and assign it to e.

console.log(update[1].active);               



