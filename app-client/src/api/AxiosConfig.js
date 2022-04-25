import Axios from "axios";


export default class AxiosConfig {

    http = Axios.create();

    getRequest = (url, config) => {
        return this.http.get(url, config);
    }

    postRequest = (url, data, config) => {
        return this.http.post(url, data, config);
    }

    putRequest = (url, data, config) => {
        return this.http.put(url, data, config);
    }

    deleteRequest = (url, config) => {
        return this.http.delete(url, config);
    }
}

