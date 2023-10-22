// const express = require("express");
// const app = express();
const http = require('http');
const fs = require('fs');
http.createServer((request, response) => {
        console.log(`Запрошенный адрес ${request.url}`)
        const filePath = request.url.substring(1);
        fs.readFile(filePath, (err, data) =>{
                if(err) {
                        response.statusCode = 404;
                        response.end('Not found resourse');
                }
                else{
                        response.end(data);
                }
        })
    }
).listen(3000);

