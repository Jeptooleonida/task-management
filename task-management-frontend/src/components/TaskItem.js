import React from "react";
import { deleteTask } from "../services/taskService";

const TaskItem = ({ task, refreshTasks, setTaskToEdit }) => {
  const handleDelete = async () => {
    await deleteTask(task.id);
    refreshTasks();
  };

  const handleEdit = () => {
    setTaskToEdit(task); // Populate the form with task data
  };

  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.dueDate}</td>
      <td>{task.status}</td>
      <td>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default TaskItem;