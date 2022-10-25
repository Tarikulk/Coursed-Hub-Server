const express = require("express");
const app = express();
const cors = require("cors")
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const courses = require("./data/courses.json");

app.get('/', (req, res) =>{
   res.send("Courses API running")
});


app.get("/course-categories", (req, res) =>{
    res.send(categories);
});


app.get("/course/:id", (req, res) =>{
    const id = req.params.id;
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse);
});


app.get("/category/:id", (req, res) =>{
    const id = req.params.id;
    const categoryCourse = courses.filter(category => category.category_id === id);
    res.send(categoryCourse);
})




app.listen(port, () =>{
    console.log('Courses-Hub server running on port,', port)
});