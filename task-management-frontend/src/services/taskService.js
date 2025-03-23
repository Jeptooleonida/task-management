import axios from "axios";
// defines the API URL
const API_URL = "http://localhost:8080/tasks";

// function to fetch tasks from the API
export const fetchTasks = async () => {
  try {
    console.log("Fetching tasks from:", API_URL); 
    const response = await axios.get(API_URL);
    console.log("Response:", response); // Log  response
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    console.error("Error details:", error.response); 
    throw error;
  }
};

//function to add a new task
export const addTask = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

// function to update a task by {id}
export const updateTask = async (id, task) => {
  const response = await axios.put(`${API_URL}/${id}`, task);
  return response.data;
};

// function to delete a task by {id}
export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

// function to mark a task as completed by {id}
export const markTaskCompleted = async (id) => {
  const response = await axios.patch(`${API_URL}/${id}/complete`);
  return response.data;
}