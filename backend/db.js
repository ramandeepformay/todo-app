const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:25414186@cluster0.krervko.mongodb.net/todos_app")

const todoScehma = new mongoose.Schema({
    title: String,
    description: String,
    // completed: Boolean 
})

const Todo = mongoose.model("todos", todoScehma)

module.exports = {Todo}