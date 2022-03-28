package com.app.api.service;

import com.app.api.datasource.TaskDatasource;
import com.app.api.domain.Task;
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

        Task validateTask = Optional.ofNullable(task)
                .orElseThrow(RuntimeException::new);
        taskDatasource.saveNewTask(validateTask);
    }

    public List<Task> getAllTask() {
        return taskDatasource.getAllTask();
    }

    public void deleteTask(int id) {
        taskDatasource.deleteTask(id);
    }

    public void updateTask(Task task) {
        taskDatasource.updateTask(task);
    }
}
