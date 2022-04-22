import {Button, Modal} from "react-bootstrap";
import TaskApiConnection from "../api/TaskApiConnection";
import {useDispatch} from "react-redux";
import {taskActions} from "../store/task-slice";


const TaskDeletionModal = (props) => {

    const dispatch = useDispatch();

    const deleteTaskHandler = async (event) => {
        event.preventDefault();

        const deleteRequest = new TaskApiConnection();

        await deleteRequest.deleteTask(props.id)
            .then(
                () => dispatch(taskActions.removeTaskFromTaskList(props.id))
            );

        props.onClose();
    };

    return (
        <Modal show={props.onShow} onHide={props.onClose}>
            <Modal.Body>
                Are you sure you want to delete this task?
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={deleteTaskHandler}>Yes</Button>
                {"  "}
                <Button variant="success" onClick={props.onClose}>No</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TaskDeletionModal;
