import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import TaskApiConnection from "../api/TaskApiConnection";
import {useDispatch} from "react-redux";
import {taskActions} from "../store/task-slice";


const TaskEditModal = (props) => {

    const dispatch = useDispatch();

    const [enteredTaskName, setEnteredTaskName] = useState(props.title);
    const [enteredTaskDescription, setEnteredTaskDescription] = useState(props.description);
    const [selectedTaskAccomplishDate, setSelectedTaskAccomplishDate] = useState(props.dateOfAccomplishing);
    const [selectedTaskStatus, setSelectedTaskStatus] = useState(props.status);

    const enteredTaskNameHandler = (event) => {
        setEnteredTaskName(event.target.value);
    };

    const enteredTaskDescriptionHandler = (event) => {
        setEnteredTaskDescription(event.target.value);
    };

    const selectedTaskAccomplishDateHandler = (event) => {
        setSelectedTaskAccomplishDate(event.target.value);
    };

    const selectedTaskStatusHandler = (event) => {
        setSelectedTaskStatus(event.target.value);
    };


    const saveChanges = async (event) => {
        event.preventDefault();

        const put = new TaskApiConnection();

        const task = {
            id: props.id,
            title: enteredTaskName,
            description: enteredTaskDescription,
            dateOfAccomplishing: selectedTaskAccomplishDate,
            status: selectedTaskStatus,
            userId: 1
        };

        await put.updateTask(props.id, task)
            .then((responseData) =>
                dispatch(taskActions.updateTaskFromTaskList(responseData))
            );

        props.onClose();
    }

    return (
        <Modal show={props.onShow} onHide={props.onClose}>
            <Modal.Header>
                <Modal.Title>
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control
                        as="input"
                        value={enteredTaskName}
                        onChange={enteredTaskNameHandler}
                    />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={enteredTaskDescription}
                    onChange={enteredTaskDescriptionHandler}
                />
            </Modal.Body>
            <Modal.Footer>
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                    type="date"
                    value={selectedTaskAccomplishDate}
                    onChange={selectedTaskAccomplishDateHandler}
                />
                <Form.Label>Status</Form.Label>
                <Form.Control
                    as="select"
                    value={selectedTaskStatus}
                    onChange={selectedTaskStatusHandler}
                >
                    <option value="completed">
                        completed
                    </option>
                    <option value="in-progress">
                        in-progress
                    </option>
                </Form.Control>
                <Button variant="secondary" onClick={props.onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TaskEditModal;
