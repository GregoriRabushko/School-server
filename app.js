const express = require("express");
const app = express();
// const urlencodedParser = express.urlencoded({extended: false});
const jsonParser = express.json();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();
});
app.post("/registration", jsonParser, (request, response) => {
    // if (!request.body) return response.sendStatus(400);
    // let userBody = request.body;
    // let userInfo = JSON.parse(userBody)
    // userInfo.id = '12';
        console.log(request.body);
        // console.log(userInfo);
    // response.send(userInfo);
});

// app.post("/", urlencodedParser, (req, res) => {
//     if (!req.body) return res.sendStatus(400);
//     console.log(req.body);
//     res.send(`${req.body.userName} - ${req.body.userAge}`);
// });

app.listen(3000);

