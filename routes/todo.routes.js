const Router = require("express").Router()

const todoController = require("./../controllers/todo.controller")

Router
    .get("/", todoController.getAllTodos)
    .post("/", todoController.addTodos)
    .put("/id:", todoController.updateTodos)
    .delete("/id:", todoController.deleteTodos)

module.exports = Router