package com.app.api.repository;

import com.app.api.domain.Task;

import java.util.List;


public interface TaskRepository {
    Task getTask(int id);

    void saveNewTask(Task task);

    List<Task> getAllTask();

    void deleteTask(int id);

    void updateTask(Task task);
}
