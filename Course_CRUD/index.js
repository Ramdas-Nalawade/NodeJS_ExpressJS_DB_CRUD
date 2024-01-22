const connection = require('./connection');
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/courses', (req, res) => {
    connection.query('select * from course', (err, rows) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(rows);
        }
    });
});

app.get('/courses/:id', (req, res) => {
    connection.query('select * from course where id = ?', [req.params.id], (err, rows) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(rows);
        }
    });
});

app.delete('/courses/:id', (req, res) => {
    connection.query('delete from course where id = ?', [req.params.id], (err, rows) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(rows);
        }
    });
});

app.post('/courses', (req, res) => {
    var emp = req.body;
    var empData = [emp.id, emp.name, emp.location];
    connection.query('insert into course values(?)', [empData], (err, rows) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(rows);
        }
    });
});

app.patch('/courses/:id', (req, res) => {
    var emp = req.body;
    connection.query('update course set ? where id = ' + emp.id, [emp], (err, rows) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(rows);
        }
    });
});

app.listen(3000, () => console.log('Express running on port no 3000'));