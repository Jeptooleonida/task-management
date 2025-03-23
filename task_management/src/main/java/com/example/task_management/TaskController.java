package com.example.task_management;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", allowCredentials = "true")

public class TaskController {
    // handle preflight requests
    @RequestMapping(value = "/**", method = RequestMethod.OPTIONS)
    public ResponseEntity<?> handleOptions() {
        return ResponseEntity.ok().build();
    }
    @Autowired
    private TaskRepository taskRepository;

    // get all tasks route
    @GetMapping
    public ResponseEntity<List<Task>> getAllTasks() {
        List<Task> tasks = taskRepository.findAll();
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    // get task by id route
    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id){
        Optional<Task> taskOptional = taskRepository.findById(id);
        if (taskOptional.isPresent()){
            return new ResponseEntity<>(taskOptional.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // post tasks route
    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        Task savedTask = taskRepository.save(task);
        return new ResponseEntity<>(savedTask, HttpStatus.CREATED);
    }

    // update task route
    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task taskDetails) {
        Optional<Task> taskOptional = taskRepository.findById(id);
        if (taskOptional.isPresent()){
            Task task = taskOptional.get();
            task.setTitle(taskDetails.getTitle());
            task.setDescription(taskDetails.getDescription());
            task.setDueDate(taskDetails.getDueDate());
            task.setStatus(taskDetails.getStatus());
            Task updatedTask = taskRepository.save(task);
            return new ResponseEntity<>(updatedTask, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // delete task route
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        taskRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

    @PatchMapping("/{id}/complete")
    public ResponseEntity<Task> completeTask(@PathVariable Long id) {
        Optional<Task> taskOptional = taskRepository.findById(id);
        if (taskOptional.isPresent()){
            Task task = taskOptional.get();
            task.setStatus(TaskStatus.COMPLETED);
            Task updatedTask = taskRepository.save(task);
            return new ResponseEntity<>(updatedTask, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
