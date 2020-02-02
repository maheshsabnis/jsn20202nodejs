// x is a JavaSctipt Object Notation obejct
let x = {
    a:10,
    b:20
};
console.log(x.a + '  ' + x.b);
// iterate over properties
for(let i in x){
    console.log(i);
}

let o1 = {p:10};
console.log(`Value  of p in o1 = ${o1.p}`);
let o2 = o1; // assigning location/reference of o1 by o2
console.log(`Value  of p in o2 = ${o2.p}`);
o2.p= 400;
console.log(`Value  of p in o1 afeter o2 update = ${o1.p}`);
console.log(`Value  of p in o2 afeter o2 update = ${o2.p}`);
// cloan the o1 in o3

// creating a blank target and cloaning o1 into the blank 
let o3 = Object.assign({},o1);
console.log(`Value  of p in o3 = ${o3.p}`);
o3.p = 600;
console.log(`Value  of p in o1 afeter o3 update = ${o1.p}`);
console.log(`Value  of p in o3 afeter o3 update = ${o3.p}`);


 

