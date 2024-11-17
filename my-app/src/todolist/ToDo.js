import { useState } from 'react';
import './styles/ToDo.css';
import './styles/Project.css';
import editIcon from './assets/icons/edit-pencil.svg'
import deleteIcon from './assets/icons/delete.svg'

const ToDo = ({ todo, update, remove, toggleComplete }) => {
  const [isEditing, setEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleEdit = () => {
    setEditing(!isEditing);
  }

  const handleDelete = () => {
    remove(todo.id);
  }

  const handleCompleted = () => {
    toggleComplete(todo.id);
  }

  const editTask = (event) => {
    setTask(event.target.value);
  }

  const saveNewTodo = (event) => {
    event.preventDefault();
    update(todo.id, task);
    setEditing(false);
  }

  let result;

  if (!isEditing) {
    result = (
      <div className="ToDo">
        <span onClick={handleCompleted} className={todo.completed ? "Todo-Task completed" : "Todo-Task"}>{todo.task}</span>
        <div>
          <img src={editIcon} alt='edit' onClick={handleEdit} className="Icon"></img>
          <img src={deleteIcon} alt='delete' onClick={handleDelete} className="Icon"></img>
        </div>
      </div>
    )
  } else {
    result = (
      <div className="ToDo">
        <form onSubmit={saveNewTodo}>
          <input value={task} className="Input-Edit" onChange={editTask} />
          <button className="Save-Todo">save</button>
        </form>
      </div>
    )
  }

  return result

}

export default ToDo;