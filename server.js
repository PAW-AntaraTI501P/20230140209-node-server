require("dovnet").config();
const express = require('express');
const app = express();

const todoRoutes = require("./routes/todo.js");
const { todos } = require("./routes/todo.js");
const port = process.env.PORT;

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