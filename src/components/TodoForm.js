import React, {useState} from 'react';

const TodoForm = (props) => {
    const {todoList, setTodoList} = props
    const [todo, setTodo] = useState({
        errand:'',
        finishedErrand:false
    })

const changeHandler = (e) => {
    if(e.target.type === 'checkbox'){
        setTodo({...todo, finishedErrand: !todo.finishedErrand})
    }
    else{
        setTodo({...todo, [e.target.name]:e.target.value})
    }
}

const submitHandler = (e) => {
    e.preventDefault()
    setTodoList([...todoList, todo])
    setTodo({
        errand:'',
        finishedErrand:false
    })
}

return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" name="errand" onChange={changeHandler} value={todo.errand}/>
            <button>Add</button>
        </form> 
    </div>
)
}

export default TodoForm;