package com.app.api.datasource;

import com.app.api.domain.Task;
import com.app.api.repository.TaskRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TaskDatasource implements TaskRepository {
    private final TaskMapper taskMapper;

    public TaskDatasource(TaskMapper taskMapper) {
        this.taskMapper = taskMapper;
    }

    @Override
    public Task getTask(int id) {
        return taskMapper.getTask(id);
    }

    @Override
    public void saveNewTask(Task task) {
        taskMapper.saveNewTask(task);
    }

    @Override
    public List<Task> getAllTasks() {
        return taskMapper.getAllTasks();
    }

    @Override
    public void deleteTask(int id) {
        taskMapper.deleteTask(id);
    }

    @Override
    public void updateTask(Task task) {
        taskMapper.updateTask(task);
    }
}
