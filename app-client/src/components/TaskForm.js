import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import TaskApiConnection from "../api/TaskApiConnection";
import {useDispatch} from "react-redux";
import {taskActions} from "../store/task-slice";

const TaskForm = () => {

    const dispatch = useDispatch();

    const date = new Date(Date.now());
    const year = date.getFullYear();
    const month = date.toLocaleString("en-US", {month: "2-digit"});
    const day = date.toLocaleString("en-US", {day: "2-digit"});
    const today = year + "-" + month + "-" + day;

    const [enteredTaskName, setEnteredTaskName] = useState("");
    const [enteredTaskDescription, setEnteredTaskDescription] = useState("");
    const [selectedTaskAccomplishDate, setSelectedTaskAccomplishDate] = useState(today);

    const enteredTaskNameHandler = (event) => {
        setEnteredTaskName(event.target.value);
    };

    const enteredTaskDescriptionHandler = (event) => {
        setEnteredTaskDescription(event.target.value);
    };

    const selectedTaskAccomplishDateHandler = (event) => {
        setSelectedTaskAccomplishDate(event.target.value);
    };

    const clearInputs = () => {
        setEnteredTaskName("");
        setEnteredTaskDescription("");
        setSelectedTaskAccomplishDate("");
    }

    const createNewTask = async (event) => {
        event.preventDefault();

        const post = new TaskApiConnection();

        const task = {
            title: enteredTaskName,
            description: enteredTaskDescription,
            dateOfAccomplishing: selectedTaskAccomplishDate,
            status: "in-progress",
            userId: 1
        };


        await post.saveNewTask(task)
            .then(responseData =>
                dispatch(taskActions.addNewTaskToTaskList(responseData))
            );

        clearInputs();
    };

    return (
        <Form>
            <Form.Group controlId="formTaskName">
                <Form.Label>Task Name</Form.Label>
                <Form.Control
                    as="input"
                    placeholder="Task name"
                    value={enteredTaskName}
                    onChange={enteredTaskNameHandler}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTaskDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Optional: write your description"
                    rows={3}
                    value={enteredTaskDescription}
                    onChange={enteredTaskDescriptionHandler}
                />
            </Form.Group>
            <Form.Group controlId="formTaskAccomplishDate">
                <Form.Label>Accomplish Date</Form.Label>
                <Form.Control
                    type="date"
                    value={selectedTaskAccomplishDate}
                    onChange={selectedTaskAccomplishDateHandler}
                />
            </Form.Group>
            <br/>
            <Button variant="primary" type="button" onClick={createNewTask}>
                Create Task
            </Button>
        </Form>
    );
};

export default TaskForm;
