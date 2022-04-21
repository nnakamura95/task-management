import {Button, Card, Form, Modal} from "react-bootstrap";


const TaskEditModal = (props) => {

    const saveChanges = () => {
        //TODO add data change logic

        props.onClose();
    }

    return (
        <Modal show={props.onShow} onHide={props.onClose}>
            <Modal.Header>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.description}
            </Modal.Body>
            <Modal.Footer>
                <Card.Subtitle>Due Date</Card.Subtitle>
                <Form.Control
                    type="date"
                    defaultValue={props.dateOfAccomplishing}
                />
                <Form.Control
                    as="select"
                    defaultValue={props.status}
                >
                    <option>
                        completed
                    </option>
                    <option>
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
