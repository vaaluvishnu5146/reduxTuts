import React, { useState, useEffect } from "react";
import TextInput from "./Components/TextField/TextInput";
import { saveTodo } from "./Redux/Reducers/Todo.reducer";
import { useDispatch, useSelector } from "react-redux";
import Slider1 from "./Components/Sliders/Slider1";
import Productcard from "./Components/Card/Productcard";

function App() {
  const dispatcher = useDispatch();
  const { todos = [] } = useSelector((state) => state.todo);
  const { products = [] } = useSelector((state) => state.product);
  const { cart = [] } = useSelector((state) => state.cart);
  const [task, setTask] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => dispatcher(saveTodo(json)));

    return () => {};
  }, []);

  const handleTaskChange = (e) => {
    if (e) {
      setTask(e.target.value);
    }
  };

  const handleTasksUpdate = (e) => {
    if (e && task.length > 3) {
      // let tasksCopy = [...tasks];
      // tasksCopy.push(task);
      // setTasks(tasksCopy);
      dispatcher(saveTodo(task));
      setTask("");
    }
  };

  return (
    <div className="App">
      <TextInput
        placeholder="Enter you daily task"
        id="task"
        name="task"
        value={task}
        onChange={handleTaskChange}
      />
      <button onClick={handleTasksUpdate}>Add Task</button>
      <div id="task-listing">
        <ul>
          {todos.length > 0 ? (
            todos.map((t, i) => <li key={t.id}>{t.title}</li>)
          ) : (
            <p>No tasks!!!</p>
          )}
        </ul>
      </div>

      {/* <nav class="navbar bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://www.iconpacks.net/icons/2/free-shopping-bag-icon-2041-thumb.png"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Shopily
          </a>
        </div>
      </nav>
      <Slider1 />
      <section id="product-listing-section" className="mt-5">
        <div class="container text-center">
          <div class="row">
            {products.length > 0 ? (
              products.map((d, i) => (
                <Productcard key={`product-card-${i}`} data={d} />
              ))
            ) : (
              <p>Wardrobe is empty</p>
            )}
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
