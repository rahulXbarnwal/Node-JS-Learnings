const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const data = fs.readFileSync(`${__dirname}/UserApi/userdata.json`, "utf-8");
    const orgData = JSON.parse(data);
    console.log(orgData);

    // console.log(req.url);
    if (req.url === '/contact') {
        res.end("Hey this is Contact page");
    } else if (req.url === '/about') {
        res.end("Hey this is About page");
    } else if (req.url === '/') {
        res.end("Hey this is Home page")
    } else if (req.url === '/userAPI') {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(orgData[0].name);
    }
    else {

        res.writeHead(404, { "Content-type": "text/html" });
        // Now its status code is 404 i.e error page 

        res.end("<h1> Error 404 page not found </h1>");
        // By default its status code is 200 which is not for error page 
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port 8000");
})
