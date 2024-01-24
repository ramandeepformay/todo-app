export function Todos({todos}){
     console.log(todos);
     return<div>
        {todos.map(el=>{
           return <div>
                <h1>{el.title}</h1>
                <h2>{el.description}</h2>
                <button>{el.completed == true ? "Completed" : "Mark as complete"}</button>
            </div>  
        })}
    </div>
   
    
}