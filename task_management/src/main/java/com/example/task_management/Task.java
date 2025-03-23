package com.example.task_management;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Entity
@Data
// @Table(name = "task") // Define table name

// define the Task Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id;
     private String title;
     private String description;
     @Temporal(TemporalType.DATE)
     private Date dueDate;
     @Enumerated(EnumType.STRING)
     private TaskStatus status;

}

// define the TaskStatus 
enum TaskStatus{
    PENDING,
    IN_PROGRESS,
    COMPLETED,
}
