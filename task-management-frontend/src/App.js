import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { fetchTasks } from "./services/taskService";
import "./styles/App.css";
import Footer from "./components/Footer";

const App = () => {
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend
  const refreshTasks = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data); // Update the tasks state
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <>
      <div className="app">
        <h1>Task Management Application</h1>
        <button onClick={() => setTaskToEdit({})}>New Task</button>
        {taskToEdit !== null && (
          <TaskForm
            taskToEdit={taskToEdit}
            setTaskToEdit={setTaskToEdit}
            refreshTasks={refreshTasks}
          />
        )}
        <TaskList
          tasks={tasks}
          refreshTasks={refreshTasks}
          setTaskToEdit={setTaskToEdit}
        />
      </div>
      <Footer />
    </>
  );
};

export default App;