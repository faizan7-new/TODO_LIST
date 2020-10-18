import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {
  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  return (
    <div className="App">
      <header>
        <h1>Faizan's Todo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setinputText={setinputText} setStatus={setStatus}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
