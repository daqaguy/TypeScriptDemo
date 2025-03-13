
var age1 = 45;
var age2 = 18;
var age3 = 7;

// if
if(age1>18)
    console.log("Adult");
if(age3>18)
    console.log("Adult");

// if-else
if(age2>18)
        console.log("Adult");
else
    console.log("Minor");


// if-else-if

var age = 35;
if(age>=0 && age<10)
    console.log("Child");
else if(age>=10 && age<20)
    console.log("Teenage");
else if (age>=20 && age<60)
    console.log("Adult");
else   
    console.log("Boomer");


// Nested if-else
var age = 51;
if(age>=0 && age<60)
{
    if(age>=0 && age<10)
        console.log("Child");
    else if(age>=10 && age<20)
        console.log("Teenage");
    else if (age>=20 && age<60)
        console.log("Adult");
}
else console.log("Boomer");
