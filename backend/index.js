const express = require("express");
const app = express();
const {createTodo, updateTodo} = require("./types")
const {Todo} = require("./db.js")

app.use(express.json());

app.post("/todos", async (req, res)=>{
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
        res.json(411).json({
            msg: "You send the wrong inputs"
        })
        return;
    }

    await Todo.create({
        parsedPayLoad,
        completed:false
    })
    res.json({
        msg: "Todo created successully"
    })

})

app.get("/todos", async (req, res)=>{
    const todos = await Todo.find({})
    res.json({
        todos
    })
})

app.put("/completed", (req,res)=>{
    const updatePayLoad = req.body;
    const parsedPayLoad =  updateTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success){
        res.json(411).json({
            msg: "id doesn't exist"
        })
        return;
    }


})

app.listen(3004, ()=>{
   console.log("server is running")
})