import React, { useState, useEffect } from "react";
import { addTask, updateTask } from "../services/taskService";
import "../styles/TaskForm.css";
const TaskForm = ({ taskToEdit, setTaskToEdit, refreshTasks }) => {
  // Initialize state with default values
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("PENDING");

  // Populate form fields when `taskToEdit` changes
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title || "");
      setDescription(taskToEdit.description || "");
      setDueDate(taskToEdit.dueDate || "");
      setStatus(taskToEdit.status || "PENDING");
    } else {
      // Reset form fields for adding a new task
      setTitle("");
      setDescription("");
      setDueDate("");
      setStatus("PENDING");
    }
  }, [taskToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the task data
    const taskData = {
      title,
      description,
      dueDate,
      status,
    };
    //   Log the task data
    console.log("Submitting task:", taskData); 

    try {
      if (taskToEdit && taskToEdit.id) {
        // update the task
        await updateTask(taskToEdit.id, taskData);
      } else {
        // create a new task 
        await addTask(taskData);
      }

      // Refresh the task list
      refreshTasks();

      // Clear the form and close the modal
      setTaskToEdit(null);
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
      <h2>{taskToEdit && taskToEdit.id ? "Edit Task" : "Add Task"}</h2>        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Due Date:</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div>
            <label>Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="PENDING">Pending</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setTaskToEdit(null)}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;