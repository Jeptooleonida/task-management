import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, refreshTasks, setTaskToEdit }) => {
  const [filter, setFilter] = useState("ALL");

  // Fetch tasks when the component mounts
  useEffect(() => {
    refreshTasks();
  }, []);

  // Filter tasks based on status
  const filteredTasks = tasks.filter((task) => {
    if (filter === "COMPLETED") {
      return task.status === "COMPLETED";
    }
    return true;
  });

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <div className="tabs">
        <button onClick={() => setFilter("ALL")}>All Tasks</button>
        <button onClick={() => setFilter("COMPLETED")}>Completed Tasks</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              refreshTasks={refreshTasks}
              setTaskToEdit={setTaskToEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;