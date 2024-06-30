import React, { useState } from 'react'
import Form from './Form'

const Button = () => {
    const [show,setshow]=useState(false)
  return (
    <div>
        <button onClick={()=>setshow(true)} className='bg-red-600 hover:bg-blue-900 text-white px-10 py-3 rounded-full font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex'>JOIN US</button>
     {show && <Form onClose={()=>setshow(false)}/>}
    </div>
  )
}

export default Button