import React from 'react'
import { useState } from 'react'
const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');
   
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();    //To prevent the page from refreshing
        addTodo(value);
        setValue('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <h1 className='heading'>Get Things Done</h1>
        <input type='text' value={value} placeholder='Add tasks here...' onChange={handleChange}  />
        <button type='submit' className='todo-btn' >Add Task</button>
    </form>
)
}

export default TodoForm