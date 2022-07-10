require('dotenv').config();
const http = require('http');
const fs = require('fs');
var requests = require('requests');

const homeFile = fs.readFileSync('home.html', 'UTF-8');

const replaceVal = (tempVal, orgVal) => {
    let htmlContent = tempVal.replace("{%tempval%}", orgVal.main.temp);
    htmlContent = htmlContent.replace("{%tempmin%}", orgVal.main.temp_min);
    htmlContent = htmlContent.replace("{%tempmax%}", orgVal.main.temp_max);
    htmlContent = htmlContent.replace("{%location%}", orgVal.name);
    htmlContent = htmlContent.replace("{%country%}", orgVal.sys.country);
    htmlContent = htmlContent.replace("{%tempstatus%}", orgVal.weather[0].main);

    return htmlContent;
}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        requests(`http://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&appid=430e0722edebe6affb1d3e6020acac5d`)
            .on('data', (chunk) => {
                const objData = JSON.parse(chunk);
                const arrData = [objData];
                const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("");
                res.write(realTimeData);
                // console.log(realTimeData)
            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);

                res.end();
            });
    } else {
        res.end("Error 404! File not found");
    }
})

server.listen(8000, '127.0.0.1');