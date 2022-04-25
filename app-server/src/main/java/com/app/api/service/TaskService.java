package com.app.api.service;

import com.app.api.datasource.TaskDatasource;
import com.app.api.domain.Task;
import com.app.api.exceptions.TaskNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    private final TaskDatasource taskDatasource;

    @Autowired
    private TaskService(TaskDatasource taskDatasource) {
        this.taskDatasource = taskDatasource;
    }

    public Task getTask(int id) {
        return taskDatasource.getTask(id);

//        return Optional.ofNullable(tasksDatasource.getTask(id))
//                .orElseThrow(() ->
//                        new TaskNotFoundException("User with ID number [" + id + "] not found"));
    }

    public void saveNewTask(Task task) {

        Task validateDTask = Optional.ofNullable(task)
                .orElseThrow(() -> new TaskNotFoundException("Task cannot be null or empty"));
        taskDatasource.saveNewTask(validateDTask);
    }

    public List<Task> getAllTasks() {
        return taskDatasource.getAllTasks();
    }

    public void deleteTask(int id) {
        taskDatasource.deleteTask(id);
    }

    public void updateTask(Task task) {
        taskDatasource.updateTask(task);
    }
}
