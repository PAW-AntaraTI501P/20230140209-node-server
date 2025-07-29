const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

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