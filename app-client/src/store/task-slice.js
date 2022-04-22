import {createSlice} from "@reduxjs/toolkit";


const initialTaskState = {
    taskList: []
}

const taskSlicer = createSlice(
    {
        name: "task",
        initialState: initialTaskState,
        reducers: {
            addNewTaskToTaskList(state, action) {
                const newTask = action.payload;
                const existingTask = state.taskList.find(task => task.id === newTask.id);
                if (existingTask) {
                    return;
                }
                state.taskList.push(
                    {
                        id: newTask.id,
                        title: newTask.title,
                        description: newTask.description,
                        dateOfAccomplishing: newTask.dateOfAccomplishing,
                        status: newTask.status,
                        userId: newTask.userId
                    }
                );
            },
            updateTaskList(state, action) {},
            removeTaskFromTaskList() {},
            updateTask() {},
            fetchTaskList(state, action) {
                const data = action.payload;
                state.taskList = [...data]
            }
        }
    }
);

export const taskActions = taskSlicer.actions;
export default taskSlicer.reducer;
