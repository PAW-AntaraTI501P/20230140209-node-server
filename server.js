require("dotenv").config();
const express = require("express");
const app = express();

const todoRoutes = require("./routes/todo.js");
const { todos } = require("./routes/todo.js");
const port = process.env.PORT;

app.use(express.json());
app.use("/todos", todoRoutes);

app.set("view engine", "ejs"); //utk ke halaman ejs

app.get("/", (req, res) => {
  res.render("index"); //render file ke index.ejs
});

app.get("/contact", (req, res) => {
  res.render("contact"); //render ke file contact.ejs
});

app.get("/todos-data", (req, res) => {
  res.json(todos);
});
app.get("/todos-list", (req, res) => {
  res.render("todos-page", { todos: todos });
});
app.post("todos-list/add", (res, req) => {
  const newTaskText = req.body.task;

  if (newTaskText && newTaskText.trim() !== "") {
    todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;

    const newTodo = {
      id: newId,
      task: newTaskText,
    };
    todos.push(newTodo);
  }
  res.redirect("/todos-list;");
});

app.put("/todos-list/edit/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTaskText = req.body.task;

  const todoIndex = todos.findIndex((t) => t.id === id);
  if (todoIndex !== -1 && updatedTaskText && updatedTaskText.trim() !== "") {
    todos[todoIndex].task = updatedTaskText.trim();
  }
  res.redirect("/todos-list");
});

app.use((req, res) => {
  res.status(404).send("404 - Page not found");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
