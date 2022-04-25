import {Badge, Button, Card} from "react-bootstrap";
import {useState} from "react";
import TaskEditModal from "./TaskEditModal";
import TaskDeletionModal from "./TaskDeletionModal";


const Task = (props) => {

    const [show, setShow] = useState(false);
    const [showTaskDeletionModal, setShowTaskDeletionModal] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const showDeletionModalHandler = () => setShowTaskDeletionModal(true);
    const hideDeletionModal = () => setShowTaskDeletionModal(false);

    let statusColor;
    if (props.status === "in-progress") {
        statusColor = "info";
    } else {
        statusColor = "danger"
    }

    return (
        <>
            <Card style={{width: '19rem'}}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <hr/>
                    <Card.Text>{props.description}</Card.Text>
                    <hr/>
                    <Card.Subtitle>Due Date</Card.Subtitle>
                    <h4>
                        <Badge bg="secondary">{props.dateOfAccomplishing}</Badge>
                    </h4>
                    <h4>
                        <Badge bg={statusColor}>{props.status}</Badge>
                    </h4>
                    <hr/>
                    <Button onClick={handleShow}>Edit</Button>
                    {"  "}
                    <Button variant="success" onClick={showDeletionModalHandler}>Delete</Button>
                </Card.Body>
            </Card>

            <TaskEditModal
                onShow={show}
                onClose={handleClose}
                id={props.id}
                title={props.title}
                description={props.description}
                dateOfAccomplishing={props.dateOfAccomplishing}
                status={props.status}
            />
            <TaskDeletionModal
                onShow={showTaskDeletionModal}
                onClose={hideDeletionModal}
                id={props.id}
            />
        </>
    );
}

export default Task;
