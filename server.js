const express = require('express');
const app = express();
const port = 3001;

const todoRoutes = require("./routes/todo");
const { todos } = require("./routes/todo");

app.use(express.json());
app.use("/todos", todoRoutes);

app.set("view engine", "ejs"); //utk ke halaman ejs

app.get('/', (req, res) => {
    res.render("index"); //render file ke index.ejs
})

app.get("/contact", (req, res) => {
    res.render("contact"); //render ke file contact.ejs
})

app.use((req, res) => {
    res.status(404).send("404 - Page not found");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})