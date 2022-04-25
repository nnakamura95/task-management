package com.app.api.datasource;

import com.app.api.domain.Task;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TaskMapper {

    Task getTask(long id);

    List<Task> getAllTasks();

    void saveNewTask(Task task);

    void deleteTask(int id);

    void updateTask(Task task);
}
