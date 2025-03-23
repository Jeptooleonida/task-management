# Task Management App - Frontend
The Task Management App  This application provides a user-friendly interface for managing tasks, organizing work, to boost your productivity. The frontend is built using React.js while the backend is built using springboot

---

## Features

- **Task Creation**: Easily create new tasks with titles, descriptions and  due dates.
- **Task Organization**: Organize tasks into categories or projects for better management.
- **Real-Time Updates**: Instant updates to task status and details.

---

## Screenshots

### 1. Dashboard
![Dashboard](../pesira/task-management-frontend/public/screenshots/task3.png)  
*The main dashboard displays an overview of all tasks, categorized by status.*

### 2. Task Creation Modal
![Task Creation](../pesira/task-management-frontend/public/screenshots/task1.png)  
*Easily create new tasks with a simple and clean modal interface.*

### 3. Edit Task
![Task Details](../pesira/task-management-frontend/public/screenshots/task2.png)  
*View and edit task details, including description, due date, and priority.*

### 4. Completed Tasks tab
![Completed tasks](../pesira/task-management-frontend/public/screenshots/task4.png)  
*Display the completed tasks.*

## Technologies Used

- **Frontend Framework**: React.js
- **Backend Framework**: Springboot
- **State Management**: Context 
- **Styling**: Vanilla CSS
- **API Integration**: Axios
- **Database**: PostgreSQL

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- java (v21 or higher)
- postgresql 

### Installation

. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-management.git

   ```
   ### Frontend configuration 
1. Navigate to the frontend directory
 `` cd task-management-frontend ``

 2. Install dependencies
  `` npm install ``

  3. Start the frontend development server
  `` npm start ``
  4. open the browser and visit `` http://localhost:3000 ``

 ### Backend configuration
 
 1. Navigate the backend directory
  `` cd task_management``
2. Configure the application.properties
 ``  spring.datasource.url=jdbc:postgresql://localhost:5432/database name ``
 ``  spring.datasource.username=your-username ``
 `` spring.datasource.password=your-password ``

3. Run the Spring Boot application
`` ./mvnw springboot:run ``
