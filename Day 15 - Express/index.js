const express = require("express");
const app = express();

app.use(express.json());

const courses = [
    {id:1, name: 'c1'},
    {id:2, name: 'c2'},
    {id:3, name: 'c3'},
]

app.get("/", (req, res) => {
  res.send("Hello World2");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});
app.get("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('Not found');
    res.send(course);
});
app.post("/api/courses", (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course)
});

app.put("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('Not found');

    course.name = req.body.name;
    res.send(course);
     
});

// app.get("/api/courses/:month/:year", (req, res) => {
//   res.send(req.params);
// });

//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on ${port}`));