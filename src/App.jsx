import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = ()=>{

  }

  const handleDelete = ()=>{
    
  }

  const handleAdd = ()=>{
    setTodos([...todos, {todo, isCompleted: false}])
    setTodo("")
    console.log(todos)
  }

  const handleChange = (e)=>{
    setTodo(e.target.value)
  }

  return (
    <>
    <Navbar/>
    <div className='container mx-auto my-5 p-5 bg-violet-100 rounded-xl min-h-[80vh]'>
      <div className="addTodo my-5">
        <h2 className='text-lg font-bold'>Add a Todo</h2>
        <input onChange={handleChange} value={todo} type="text" className='bg-white w-1/2' name="" id="" />
        <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 text-sm font-bold text-white cursor-pointer px-2 py-1 rounded-md mx-6'>Add</button>
      </div>
      <h2 className='text-lg font-bold'>Your Todos</h2>
      <div className="todos">
        {todos.map((item)=>{        
        return <div key={item.todo} className="todo flex w-1/3">
          <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 text-sm font-bold text-white cursor-pointer px-2 py-1 rounded-md mx-1'>Edit</button>
          <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 text-sm font-bold text-white cursor-pointer px-2 py-1 rounded-md mx-1'>Delete</button>
        </div>
        })}
      </div>
    </div>
    </>
  )
}

export default App
