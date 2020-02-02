let names = ['Mahesh', 'Ajay', 'Vikram', 'Suprotim', 
'Vikrant', 'Maonj', 'Tejas', 'Subodh', 'Amit' , 'Ajit', 'Anil', 'Abhijit',
'Abhay', 'Shyam', 'Jaywant', 'Vivek', 'Satish', 'Mukesh', 'Vinay', 'Sandeep',
'Pravin', 'Manish' ];
// for(let i=0; i<names.length;i++) {
//     console.log(names[i]);
// }
// for(let i in names) {
//     console.log(names[i]);
// }
// for(let i in names) {
//     console.log(names[i]);
// }
// console.log();
// names.push('Sanjay');
// for(let n of names) {
//     console.log(n);
// }
// console.log(names.pop());

function printName(s: string,i: number){
    console.log('Name at index ' + i + ' = ' + s);
}
// passing function to function, parameter function is called as
// callback function. in this case 'printName()' is callback function
// names.forEach(printName);
// inline callback function
// names.forEach(function(s:string, i: number){
//     console.log(`Name at index ${i} = ${s} `);
// });
// // if a function is accepting callback then the callback function
// // can be replaced by Arrow Operator =>
// names.forEach((s:string, i: number) => {
//     console.log(`Name at index ${i} = ${s} `);
// });

// the filter method, it returns array of elements from source array based on 
// condition
// let arrayWithM = [];
// for(var i=0; i< names.length; i++) {
//     if(names[i].charAt(0) === "M") {
//         arrayWithM.push(names[i]);
//     }
// }
// arrayWithM.forEach((s,i) => {
//     console.log(s);
// });
let arrayWithM = names.filter((s,i) => {
    return s.charAt(0) === "M";
});
arrayWithM.forEach((s,i) => {
    console.log(s);
});
