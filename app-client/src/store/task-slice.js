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
            removeTaskFromTaskList(state, action) {
                //TODO: temporary action, it needs to be fix
                const taskId = action.payload;
                const index = state.taskList.findIndex(task => task.id === taskId);
                state.taskList.splice(index, 1);
            },
            updateTaskFromTaskList(state, action) {
                const updateTask = action.payload;
                const index = state.taskList.findIndex(task => task.id === updateTask.id);
                state.taskList[index] = {
                            id: updateTask.id,
                            title: updateTask.title,
                            description: updateTask.description,
                            dateOfAccomplishing: updateTask.dateOfAccomplishing,
                            status: updateTask.status,
                            userId: updateTask.userId
                };
            },
            fetchTaskList(state, action) {
                const data = action.payload;
                state.taskList = [...data];
            }
        }
    }
);

export const taskActions = taskSlicer.actions;
export default taskSlicer.reducer;
