import AxiosConfig from "./AxiosConfig";

class TaskApiConnection {
    apiUrl = "http://localhost:8080/api/v1/task";

    getTask = async (id) => {
        const http = new AxiosConfig();
        const response = await http.getRequest(`${this.apiUrl}/${id}`);
        return response.data;
    };

    getAllTask = async () => {
        const http = new AxiosConfig();
        const response = await http.getRequest(this.apiUrl);
        return response.data;
    };

    saveNewTask = async (task) => {
        const http = new AxiosConfig();
        const response = await http.postRequest(this.apiUrl, task);
        return response.data;
    };

    updateTask = async (id, task) => {
        const http = new AxiosConfig();
        const response = await http.putRequest(`${this.apiUrl}/${id}`, task);
        return response.data;
    };

    deleteTask = async (id) => {
        const http = new AxiosConfig();
        await http.deleteRequest(`${this.apiUrl}/${id}`);
    };
}

export default TaskApiConnection;
