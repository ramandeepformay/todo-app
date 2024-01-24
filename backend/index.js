const express = require("express");
const app = express();
const {createTodo, updateTodo} = require("./types")
const {Todo} = require("./db.js")
const cors = require("cors");

app.use(express.json());
app.use(cors());

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
        title:createPayLoad.title,
        description:createPayLoad.description,
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

app.put("/completed", async (req,res)=>{
    const updatePayLoad = req.body;
    const parsedPayLoad =  updateTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success){
        res.json(411).json({
            msg: "id doesn't exist"
        })
        return;
    }
    const todoId = await Todo.updateOne({
        _id:updatePayLoad.id
    },{
        completed:true
    })
    res.json({
        msg:"Set to done"
    })
})

app.listen(3000, ()=>{
   console.log("server is running")
})