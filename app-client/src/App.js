import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import NavBar from "./components/NavBar";


const App = () => {
    return (
        <>
            <NavBar/>
            <br/>
            <div className="container">
                <TaskForm/>
                <hr/>
                <TaskList/>
            </div>
        </>
)
    ;
}

export default App;
