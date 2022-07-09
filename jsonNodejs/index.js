const fs = require("fs");

const bioData = {
    name: "Rahul",
    age: 20,
    channel: "Rahul Barnwal",
};

// console.log(bioData.channel)

// converting object to JSON
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData)
// can't do jsonData.channel etc.
// {"name":"Rahul","age":20,"channel":"Rahul Barnwal"}


// converting JSON to object
// const objData = JSON.parse(jsonData);
// console.log(objData);
// { name: 'Rahul', age: 20, channel: 'Rahul Barnwal' }

const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json", jsonData, (err) => {
    console.log("done");
})

fs.readFile("json1.json", "utf-8", (err, data) => {
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
})

