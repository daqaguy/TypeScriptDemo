
// Normal Function
function welcome()
{
    console.log("Welcome to the World, Agent");
}
welcome();

// Function with arguments & return types
function college(studentName:string)
{
    console.log('Hi,', studentName);
    console.log(`Hi, ${studentName}`);
}

college("Dheeraj");
college("Ragini");

// Function with return type
function add(a:number, b:number)
{
    return a+b;
}
console.log(add(45,18));



function college2(studentName:string="SuryaDheeraj",location?:string)
{
    console.log(`Hi, ${studentName} joining from ${location}`);
}

college2("Ragini", "Kasi");
college2();
college2(undefined,"Mumbai");