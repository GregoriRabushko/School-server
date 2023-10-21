const express = require("express");
const app = express();
const fs = require('fs');

let writeableStream = fs.createWriteStream('hello.txt');
writeableStream.write('Привет мир!!!');
writeableStream.write('Продолжение записи /n');
writeableStream.end('завершение записи');
let readableStream = fs.createReadStream('hello.txt', 'utf-8');

readableStream.on('data' , function (chunk) {
    console.log(chunk);
})

const USERS = [{"classes": 11, "from": "Uzda", "name": "Gregori"}];
app.get("/classes", (req, res) =>
    res.send(USERS)
);
app.listen(3000);

