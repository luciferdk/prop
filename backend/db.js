const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://luciferdk:noNQzfSoBo6C56GH@cluster2.c277dmn.mongodb.net/todo")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}