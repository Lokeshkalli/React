import { createContext,useContext } from "react";

const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"This is my first todo",
            completed:false,
        },

    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:()=>{

    }
    
    
})

export const TodoContextProvider = TodoContext.Provider;


export const useTodo = ()=>{
    return useContext(TodoContext)
}