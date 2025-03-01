import React from "react";
import './Mycomponent.css'
import { useState } from "react";


const Mycomponent=(props)=>{
    const [todos,setTodos]= useState([
        {id:1,name:"di hoc",completed:false},
        {id:2,name:"hoc bai",completed:false},
    ]);

    const [name,setName]=useState("");

    const themVaoMap= (e)=>{
        e.preventDefault();
        if(!name) return;
        setTodos([...todos,{id:todos.length+1,name,completed: false}])
        setName("")
    }
    const xoakhoiDS= (id)=>{
       setTodos(todos.filter(todo=>todo.id!==id));
    }
    const thayDoiCompleted=(id)=>{
        setTodos(todos.map(todo=> todo.id===id?{...todo,completed:!todo.completed}:todo ))
    }
    return(
        <div className="d1">
            <h1>THINGS TO DO </h1>
            <form onSubmit={themVaoMap}>
                <input
                    type="text"
                    placeholder="Add new"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className="bt1" type="submit">ADD</button>
            </form>
            <div className="d2">
                {
                    todos.map((todo,index)=>(
                        <div key={index} className="d3">
                        <p>
                            <input 
                                type="checkbox" 
                                checked={todo.completed} 
                                className="check"  
                                onChange={() => thayDoiCompleted(todo.id)}
                            />
                            <span className={todo.completed ? "completed" : ""}>{todo.name}</span> 
                            <button className="delete-btn" onClick={() => xoakhoiDS(todo.id)}>Delete</button>
                        </p>
                    </div>
                    
                    ))
                }
            </div>
        </div>
    );

};
export default Mycomponent;