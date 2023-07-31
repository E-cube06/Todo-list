import React from 'react'
import { useState } from 'react'
const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);
   
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();    //To prevent the page from refreshing
        editTodo(value, task.id);
        setValue('');
    }
  return (
    <form className ='Todoform' onSubmit={handleSubmit}>
        <input type='text' value={value} placeholder='update Task...' onChange={handleChange} className='todo-input' />
        <button type='submit' className='todo-btn' >Update Task</button>
    </form>
)
}

export default EditTodoForm