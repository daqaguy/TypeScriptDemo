
let person = { personName : "Surya Dheeraj", personAge : 30, isMarried : true }
console.log(person);
console.log(person.personName);

let person1:{personName:string,personAge:number,isMarried:boolean} = { personName : "Ragini", personAge : 26, isMarried : true }
console.log(person1);
console.log(person1.personName);


// Type Alias
type studentDetails = {name:string, age:number,location:string}

let Rohit:studentDetails = {name:"Rohit Sharma",age:37,location:"Mumbai"};
let Virat:studentDetails = {location:"Delhi",name:"Virat Kohli",age:36};
let Dhoni:studentDetails = {age:42,name:"Rohit Sharma",location:"Ranchi"};

console.log(Rohit);
console.log(Virat);
console.log(Dhoni);

process.stdout.write("Hello "); // Does not add a new line
process.stdout.write("World\n"); // Manually add a newline
process.stdout.write("Hello ");

console.log("Hello")
console.log("Hello\n")
console.log("Hello")