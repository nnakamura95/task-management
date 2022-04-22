package com.app.api.controller;

import com.app.api.domain.Task;
import com.app.api.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/task/{id}")
    private Task getTask(@PathVariable int id) {
        return taskService.getTask(id);
    }

    @GetMapping("/task")
    private List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @PostMapping("/task")
    private Task saveNewTask(@RequestBody Task task) {
        taskService.saveNewTask(task);
        return task;
    }

    @DeleteMapping("/task/{id}")
    private void deleteTask(@PathVariable int id) {
        taskService.deleteTask(id);
    }

    @PutMapping("/task/{id}")
    private Task updateTask(@PathVariable int id, @RequestBody Task task) {
        task.setId(id);
        taskService.updateTask(task);
        return taskService.getTask(id);
    }
}
