import express from "express";
import { engine } from 'express-handlebars';
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './template');


const students = [
    {
        id: 1,
        name: "nada",
    },
    {
        id: 2,
        name: "salma",
    },
     {
        id: 3,
        name: "nour",
    }
];
const studentFunction = (req, res) => {
    res.render("students", { layout: false, students });
};
app.get("/students", studentFunction);


app.get('/students/:id', (req, res) => {
    const id = req.params.id;
    
    const student_info = students.find((item) => {

        return item.id == id;
    });
    console.log(student_info);

    res.render("student", { layout: false, student_info: student_info });
});




app.listen(4200);
