console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for ( var i=1; i<101; i++){
    var remain=i%2;
    if(remain!==0){
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for ( var i=1; i<101; i++){
    var threeremain=i%3;
    var fiveremain=i%5;
    if(fiveremain===0 && threeremain===0){
        console.log("fizzbuzz");
    }else if(fiveremain===0){
        console.log("buzz");
    }else if(threeremain===0){
        console.log("fizz");
    }
}
i=1;
while (i<101) {
    var remain=i%2;
    if(remain!==0){
        console.log(i);
    }
    i++;
}
i=1;
while(i<101){
    var threeremain=i%3;
    var fiveremain=i%5;
    if(fiveremain===0 && threeremain===0){
        console.log("fizzbuzz");
    }else if(fiveremain===0){
        console.log("buzz");
    }else if(threeremain===0){
        console.log("fizz");
    }
    i++;
}
i=1;
do {
    var remain=i%2;
    if(remain!==0){
        console.log(i);
    }
        i++;
 } while (i<101);
i=1;
do {
    var threeremain=i%3;
    var fiveremain=i%5;
    if(fiveremain===0 && threeremain===0){
        console.log("fizzbuzz");
    }else if(fiveremain===0){
        console.log("buzz");
    }else if(threeremain===0){
        console.log("fizz");
    }
    i++;
} while (i<101);
let n = Math.round(Math.random() * (500 - 100) + 100);
let value = Math.round((Math.random() * 500));
for(i=0;i<n;i++){
    if (i===value){
        n=value;
        console.log("found value");
    }
}
if(n!=value){
    console.log("did not find value");
}
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
for ( var i=1; i<=n; i++){
    if(i%fizzDivisor===0 && i%buzzDivisor===0){
        console.log("fizzbuzz");
    }else if(i%buzzDivisor===0){
        console.log("buzz");
    }else if(i%fizzDivisor===0){
        console.log("fizz");
    }
}

