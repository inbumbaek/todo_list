import React, {useState} from 'react';
import './DisplayLists.css'

const DisplayLists = (props) => {
    const {todoList, setTodoList} = props

    const toggleTodo = (todo) => {
        const updatedTodoList = todoList.map((duty) => {
            if(duty === todo){
                duty.finishedErrand = !duty.finishedErrand
            }
            return duty
        })
        setTodoList(updatedTodoList)
    }

    const deleteHandler = (todo) => {
        const updatedTodoList = todoList.filter((duty) => duty !== todo)
        setTodoList(updatedTodoList)
    }

    return (
        <div>
            {
                todoList.map((todo,idx) => (
                    <div key={idx}>
                        {
                            todo.finishedErrand?
                            <h2 className='line-through'>{todo.errand}</h2>:
                            <h2>{todo.errand}</h2>
                        }
                        <input type="checkbox" name="finishedErrand" checked={todo.finishedErrand} onClick={() => toggleTodo(todo)}/>
                        <button onClick={() => deleteHandler(todo)}>Delete</button>
                    </div>
                ))
            }
        </div>
)}

export default DisplayLists;