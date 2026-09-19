// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <div className='container mx-auto my-5 p-5 bg-violet-100 rounded-xl'>
      <h2 className='text-lg font-bold'>Your Todos</h2>
    </div>
    </>
  )
}

export default App
