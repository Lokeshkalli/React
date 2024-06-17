import React, { useState } from 'react'
import { useTodo } from '../context'

function TodoForm() {
    const [todo,setTodo] = useState("")
    const {addTodo} = useTodo()
    const handleChange = (e)=>{
        setTodo(e.target.value)
    }
    
    const handleSubmit = (e)=>{
        // if(e.target.)
        e.preventDefault()
        addTodo(todo)
        setTodo("")
    }

    return (
        <form  onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 text-white"
                value={todo}
                onChange={handleChange}

            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


