var fs = require('fs');

// async write and async read
console.log('startoing async call');
fs.writeFile('myfile.txt', 'Data is written in Async Mode',function(err){
        if(err){
            console.log('Error in writing file ' + err.message);
        }
        console.log('data is written successfully in file');
});
for(var j=0;j<8;j++){
    console.log('Some other logic ' + j);
}
fs.readFile('newfile.txt',function(err,data){
    if(err){
        console.log('Error in reading file ' + err.message);
        return;
    }
    console.log(data.toString());
});

for(var i=0;i<8;i++){
    console.log('Some other logic ' + i);
}
console.log('End of the program');