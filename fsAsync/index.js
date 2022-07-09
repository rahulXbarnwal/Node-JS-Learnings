const fs = require("fs");

// fs.writeFile('read.txt', 'today is awesome day',
//     (err) => {
//         console.log('File is created');
//         console.log(err);
//     });

// fs.appendFile('read.txt', ' this is me',
//     (err) => {
//         console.log('task completed');
//     })

fs.readFile('read.txt', "UTF-8", (err, data) => {
    console.log(data);
});