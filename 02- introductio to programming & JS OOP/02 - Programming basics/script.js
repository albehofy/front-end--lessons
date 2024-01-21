'use strict'
z = 100; 
console.log(z); 
var z;

// recursion creation
function countDown(countNumber) {
    console.log(countNumber);
    if(countNumber > 0) {
        countDown(countNumber - 1)
    }
}

// calling count down
countDown(3);

for(var i = 0; i < 2 ;i++) {
    console.log(`i with let in for loop is : ${i}`)
}
console.log("i with var form outside loop");
console.log(i);


for(let j = 2; j < 5 ;j++) {
    console.log(`i with let in for loop is : ${j}`)
}
console.log("j with let form outside loop");
console.log(j);