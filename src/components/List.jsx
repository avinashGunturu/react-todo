import React from 'react'
import '../App.css'

const List = ({item,dispatch}) => {

  const dltTodo =()=>{
    dispatch({type:'dltTodo',payload:{id:item.id}})
  }
  const todoCompleted = ()=>{
    dispatch({type:'todoCompleted',payload:{id:item.id}})

  }
  return (
    <div className='listCard'>

      {item.completed ? <p className='completed' onClick={todoCompleted}>{item.todoValue}</p>:<p className='havetocomplete' onClick={todoCompleted}>{item.todoValue}</p>}

{item.completed ?  <button onClick={dltTodo} className='dltbtn'>X</button> : ""}
        {/* <button onClick={dltTodo} className='dltbtn'>X</button> */}
    </div>
  )
}

export default List