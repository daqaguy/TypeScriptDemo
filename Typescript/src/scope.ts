
//var is allowed

// Global Scope
var globalVar = "Global Scope Var";
let globalLet = "Gloabl Scope Let";
const globalConst = "Global Scope Const";

console.log(globalVar); // Works
console.log(globalLet); // Works
console.log(globalConst); // Works

function functionGlobal()
{
console.log(globalVar); // Works
console.log(globalLet); // Works
console.log(globalConst); // Works
}
functionGlobal();


// Function Scope

function functionScopeExample()
{
    var functionVar = "I am inside a functio" // Scoped to this function
    console.log(functionVar); // Works inside the function
}
functionScopeExample();
//console.log(functionVar); // Error : functionvar is not defined the function

// Block Scope

if (true)
{
    var blockVar = "I am a var in a block";
    let blockLet = "I am a let in a block";
    const blockConst = "I am a const in a block";
    console.log(blockVar); // Works
    console.log(blockLet); // Works
    console.log(blockConst); // Works
}
    console.log(blockVar); // Works, as var is not block scoped
    //console.log(blockLet); // Doesn't work
    //console.log(blockConst); // Doesn't work