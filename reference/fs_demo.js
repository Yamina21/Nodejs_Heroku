const fs = require('fs');
const path = require ('path');


// Create Folder

//fs.mkdir(path.join(__dirname,'/test'),{}, err =>{

   //  if (err) throw err;

     //console.log('Folder Created...');
//});


//Create and write to file

//fs.writeFile(path.join(__dirname,'/test', 'hello.txt'),'hello world', err =>{

   // if (err) throw err;

   // console.log('File written to it...');

    
//File append

//fs.appendFile(path.join(__dirname,'/test', 'hello.txt'),'I love node.js', err =>{

   // if (err) throw err;

   // console.log('File written to it...');
//});
//});

//Read File

//fs.readFile(path.join(__dirname,'/test', 'hello.txt'),'UTF8', (err, data) =>{

  //if (err) throw err;

    // console.log(data);
//})

fs.rename(path.join(__dirname,'/test', 'hello.txt'),(path.join(__dirname,'/test', 'helloworld.txt')), 
err =>{

    if (err) throw err;
  
       console.log('file renamed');
  })