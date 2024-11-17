import { useState } from 'react';
import uuid from 'react-uuid';
import './styles/Project.css';
import './styles/NewTodoForm.css';

const NewToDoForm = ({ createTodo, todos }) => {

  const [newTodo, setNewTodo] = useState('');


  const handleChange = (event) => {
    setNewTodo(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodoObj = { id: uuid(), task: newTodo, completed: false };
    createTodo(newTodoObj);
    setNewTodo(' ');
  }

  return (
    <form className='Todo-Form' onSubmit={handleSubmit}>
      <input
        className='Input'
        onChange={handleChange}
        placeholder='New Todo'
        value={newTodo}
      />
      <button className='Add-Todo'>Add todo</button>
    </form>)
}

export default NewToDoForm;