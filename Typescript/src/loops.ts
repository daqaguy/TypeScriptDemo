
// for loop

for(var i=1;i<10;i++)
    console.log(i);

for (var j=10;j>1;j--)
    console.log(j);

// Print in same line
let m = "";
for (let i = 1; i <= 10; i++) {
    m += i;
}
console.log(m+"\n");

// Print in same line with space in between
var k1 = " "
for (var k = 1; k < 10; k++) {
     k1 += k + " ";
}
console.log(k1.trim());

//while loop
let count = 1;
while(count<=10)
    console.log(count);
    count ++;

// Break
for (var i=1; i<6;i++)
    {
        if(i==4)
                break;
    }
console.log(i);

// Continue
for (var i=1; i<6;i++)
    {
        if(i==4)
                continue;
    }
console.log(i);