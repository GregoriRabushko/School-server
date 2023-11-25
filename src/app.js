import mysql from "mysql2";
import express from "express";
import * as fs from "fs";
// import {classesSchoolInfo} from "src/schedule.js";


const app = express();
const jsonParser = express.json();

let classesSchoolInfo = [
    {
        id: '11A',
        schedule: {
            'Пн': [{room: '18', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Английский'}, {
                room: '19',
                nameLesson: 'Английский'
            }, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {
                room: '19',
                nameLesson: 'Английский'
            }, {room: '19', nameLesson: 'Английский'},],
            'Вт': [{room: '18', nameLesson: 'Русск.яз.'}, {room: '19', nameLesson: 'Математика'}, {
                room: '19',
                nameLesson: 'Математика'
            }, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'}, {
                room: '19',
                nameLesson: 'Математика'
            },],
            'Ср': [{room: '18', nameLesson: 'Бел.лит.'}, {room: '19', nameLesson: 'Астрономия'}, {
                room: '19',
                nameLesson: 'Астрономия'
            }, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'}, {
                room: '19',
                nameLesson: 'Астрономия'
            },],
            'Чт': [{room: '18', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Физра'}, {
                room: '19',
                nameLesson: 'Физра'
            }, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'}, {
                room: '19',
                nameLesson: 'Физра'
            }, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'},],
            'Пт': [{room: '18', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'Труд.об.'}, {
                room: '19',
                nameLesson: 'ДПЮ'
            }, {room: '19', nameLesson: 'ДПЮ'}, {room: '19', nameLesson: 'ДПЮ'}, {
                room: '19',
                nameLesson: 'ДПЮ'
            }, {room: '19', nameLesson: 'ДПЮ'},],
            'Сб': [{room: '', nameLesson: 'Практика'},]
        }
    },
    {
        id: '11Б',
        schedule: {
            'Пн': [{room: '18', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Английский'}, {
                room: '19',
                nameLesson: 'Английский'
            }, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {
                room: '19',
                nameLesson: 'Английский'
            }, {room: '19', nameLesson: 'Английский'},],
            'Вт': [{room: '18', nameLesson: 'Русск.яз.'}, {room: '19', nameLesson: 'Математика'}, {
                room: '19',
                nameLesson: 'Математика'
            }, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'}, {
                room: '19',
                nameLesson: 'Математика'
            },],
            'Ср': [{room: '18', nameLesson: 'Бел.лит.'}, {room: '19', nameLesson: 'Астрономия'}, {
                room: '19',
                nameLesson: 'Астрономия'
            }, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'}, {
                room: '19',
                nameLesson: 'Астрономия'
            }, {room: '19', nameLesson: 'Астрономия'},],
            'Чт': [{room: '18', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Физра'}, {
                room: '19',
                nameLesson: 'Физра'
            }, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'}, {
                room: '19',
                nameLesson: 'Физра'
            }, {room: '19', nameLesson: 'Физра'},],
            'Пт': [{room: '18', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'Труд.об.'}, {
                room: '19',
                nameLesson: 'ДПЮ'
            }, {room: '19', nameLesson: 'ДПЮ'}, {room: '19', nameLesson: 'ДПЮ'}, {
                room: '19',
                nameLesson: 'ДПЮ'
            }, {room: '19', nameLesson: 'ДПЮ'},],
            'Сб': [{room: '', nameLesson: 'Практика'},]
        }
    },
]

export const connection = mysql.createPool({
    connectionLimit: 5,
    host: "db",
    user: "gregory",
    database: "school_db",
    password: "1234567890"
}).promise();


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();
});
app.post("/registration", jsonParser, (request, response) => {
    console.log(request.body);
    response.send(request.body);
});
app.get("/students", jsonParser, async (request, response) => {
    try {
        const students = await connection.execute('SELECT * FROM students');
        response.json(students[0]);
    } catch (e) {
        console.error(e);
        response.status(500).send('ERROR!');
    }
});
app.get("/student/:id", jsonParser, async (request, response) => {
    try {
        const student = await connection.execute('SELECT * FROM students WHERE id = ' + request.params.id);
        response.json(student[0]);
    } catch (e) {
        console.error(e);
        response.status(500).send('ERROR!');
    }
});
// app.get("/itemsToSchool/:id", jsonParser, async (request, response) => {
//     try {
//         const student = await connection.execute('SELECT * FROM students WHERE id = ' + request.params.id);
//         response.json(student[0]);
//     } catch (e) {
//         console.error(e);
//         response.status(500).send('ERROR!');
//     }
// });

app.post("/addList", jsonParser, (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    }else{
        classesSchoolInfo.push(req.body);
        res.json(classesSchoolInfo);
    }
})


app.get("/itemsToSchool", jsonParser, (request, response) => {
    response.json(classesSchoolInfo);
});
app.listen(3000);

