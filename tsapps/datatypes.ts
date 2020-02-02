// explicit datatype declaration
let j: number;
j =100;
console.log('j = ' + j + ' type of j =' + typeof(j));

// implicit datatype declaration
let x = 100; 
console.log('x = ' + x + ' type of x =' + typeof(x));

let n: string = "Mahesh"
console.log('n = ' + n + ' type of n =' + typeof(n));

let n1:any;
n1 = 900;
console.log('n1 = ' + n1 + ' type of n1 =' + typeof(n1));
n1 = "Fkjh";
console.log('n1 = ' + n1 + ' type of n1 =' + typeof(n1));

n1 = true;
console.log('n1 = ' + n1 + ' type of n1 =' + typeof(n1));
n1 = new Date(2020,2,1);
console.log('n1 = ' + n1 + ' type of n1 =' + typeof(n1));

// union types
// declare a variable with more than one datattype
let v:number|string;
v = 100;
console.log('v = ' + v + ' type of v =' + typeof(v));
v = "ffff"; 
console.log('v = ' + v + ' type of v =' + typeof(v));
