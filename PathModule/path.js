const path = require('path');

console.log(path.dirname("C:/Users/Rahul/Desktop/NodeJsYoutube/PathModule/path.js"));
console.log(path.extname("C:/Users/Rahul/Desktop/NodeJsYoutube/PathModule/path.js"));
console.log(path.basename("C:/Users/Rahul/Desktop/NodeJsYoutube/PathModule/path.js"));

const myPath = path.parse("C:/Users/Rahul/Desktop/NodeJsYoutube/PathModule/path.js");
console.log(myPath.root);