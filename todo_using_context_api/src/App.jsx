import { useState,useEffect } from 'react'
import {TodoForm,TodoItem} from './components'
import { TodoContextProvider } from './context'
// import  from './components/TodoItem'
function App() {

  const [todos,setTodos] = useState([])

  const addTodo = (todo)=>{
    if(todo){
      setTodos((prevTodos)=>( [...prevTodos,{
        id: Date.now(),
        todo: todo,
        completed:false

      }]) )
    }
  }
  const updateTodo = (id,todo)=>setTodos((prevTodos)=>{
      // console.log("haha",prevTodos)
      return prevTodos.map((prev)=>{
        console.log(prev)
        return prev.id === id ? todo: prev})
      
    })
  

  const deleteTodo = (id)=>{
    setTodos((prev)=>(
      prev.filter((prevTodos)=>(prevTodos.id!= id))
    ))
  }

  const toggleComplete = (id)=>{
    setTodos(
      (prev)=>(
        prev.map(
          (prevTodos)=>(
            prevTodos.id==id ? {...prevTodos,completed: !prevTodos.completed} : prevTodos ))
      )
      )

  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (

    <TodoContextProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2 text-white">Manage Your Todos</h1>

            <div className="mb-4">
                {/* Todo form goes here */} 
                <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {
                  todos.map((todo)=>{ 
                    console.log(todo)
                  return<div key={todo.id}
                    className='w-full'
                    >
                      <TodoItem todo={todo} />
                    </div>})
                }


            </div>
        </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
