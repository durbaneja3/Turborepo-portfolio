import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: 0,
    name: "",
  });
  const [isEditing, setIsEditing] = useState(null);
  const [selectedTodo, setSelectedTodo] = useState(null);

  function handleForm(e) {
    e.preventDefault();
    const newArray = [...todos, todo];
    setTodos(newArray);
    setTodo({
      id: todos.length + 1,
      name: "",
    });
  }

  function updateForm(e) {
    e.preventDefault();
    const newArray = [...todos];
    const index = todos.findIndex((t) => t.id === selectedTodo.id);
    newArray.splice(index, 1, selectedTodo);
    setTodos(newArray);
    setIsEditing(false);
  }

  function updateTodo(todo) {
    setIsEditing(true);
    setSelectedTodo(todo);
  }

  function deleteTodo(todo) {
    const newArray = [...todos];
    const index = todos.findIndex((t) => t.id === todo.id);
    newArray.splice(index, 1);
    setTodos(newArray);
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      {!isEditing ? (
        <form onSubmit={handleForm}>
          <input
            value={todo.name}
            onChange={(e) => setTodo({ ...todo, name: e.target.value })}
            placeholder="Enter todo"
          ></input>
          <button>Submit</button>
        </form>
      ) : (
        <form onSubmit={updateForm}>
          <input
            value={selectedTodo.name}
            onChange={(e) =>
              setSelectedTodo({ ...selectedTodo, name: e.target.value })
            }
            placeholder="Update todo"
          ></input>
          <button>Submit</button>
        </form>
      )}
      {todos.map((todo) => {
        return (
          <div className="Todo" key={todo.id}>
            <p>{todo.name}</p>
            <div className="Todo-btns">
              <button onClick={() => updateTodo(todo)}>Update</button>
              <button onClick={() => deleteTodo(todo)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
