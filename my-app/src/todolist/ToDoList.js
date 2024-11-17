import { useState } from 'react';
import ToDo from './ToDo';
import './styles/ToDo.css';
import NewToDoForm from './NewToDoForm';
import uuid from 'react-uuid';
import Header from './Header';

const ToDoList = () => {
  const [todos, setToDos] = useState(
    [
      { id: uuid(), task: 'Clean the room', completed: false },
      { id: uuid(), task: 'Wash the dishes', completed: false }
    ]
  )

  const createTodo = (newTodoObj) => {
    setToDos([...todos, newTodoObj]);
  }

  const update = (id, newTask) => {
    let updateTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: newTask };
      }
      return todo;
    })
    setToDos(updateTodos);
  }

  const remove = (id) => {
    setToDos(todos.filter(todo => todo.id !== id));
  }

  const toggleComplete = (id) => {
    const updateTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    })
    setToDos(updateTodos);
  }

  const todoList = todos.map(todo => (<ToDo
    update={update}
    remove={remove}
    toggleComplete={toggleComplete}
    key={todo.id}
    todo={todo} />))

  return (
    <div className="ToDoList-container">
      <Header />
      {todoList}
      <NewToDoForm createTodo={createTodo} todos={todos} />
    </div>
  )
}

export default ToDoList;