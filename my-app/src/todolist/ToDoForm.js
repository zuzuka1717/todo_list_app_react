const ToDoForm = () => {

  const handleChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <form>
      <input
        onChange={handleChange}
      />
      <button>Add</button>
    </form>)
}

export default ToDoForm;