import React, { useState } from 'react'
import '../App.css'


const AddTodo = ({dispatch}) => {
    const [name,setName]=useState('')
    const submitTodo = ()=>{

      if(name===''){
        alert("enter a todo");
        return;
      }
         dispatch({type:'addTodo',payload:{name}})
         setName('')
    }
  return (
    <div className='inputContainer'>
        <input className='textinput' type="text" placeholder='  enter todo...' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button className='inputbtn' onClick={submitTodo} >Add</button>
    </div>
  )
}

export default AddTodo