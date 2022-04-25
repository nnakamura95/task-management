import {Col, Row} from "react-bootstrap";
import Task from "./Task";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import TaskApiConnection from "../api/TaskApiConnection";
import {taskActions} from "../store/task-slice";


const TaskList = () => {
    const dispatch = useDispatch();
    const taskList = useSelector(state => state.task.taskList);

    useEffect(() => {
        const getAllTaskData = async () => {
            const getAll = new TaskApiConnection();
            return await getAll.getAllTask();
        };
        getAllTaskData()
            .then((responseData) =>
                dispatch(taskActions.fetchTaskList(responseData))
            )
    }, [dispatch]);

    return (
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
            {taskList.map(task => (
                <Col key={task.id}>
                    <Task
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        dateOfAccomplishing={task.dateOfAccomplishing}
                        status={task.status}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default TaskList;
