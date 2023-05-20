import './App.css';
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import DisplayLists from './components/DisplayLists';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <TodoForm todoList={todoList} setTodoList={setTodoList}/>
      <DisplayLists todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
