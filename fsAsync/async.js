const fs = require('fs');

// const data = fs.readFileSync('read.txt', "UTF-8");
// console.log(data);
// console.log('after the data');

// the text -> after the data will always be printed only after the text inside 'data' will be printed 

fs.readFile('read.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log('after the data');

// Output :
// after the data
// today is awesome day this is me