import axios from "axios";

const createWorkspace = async (data) => {
    const response = await axios.post("http://127.0.0.1:5000/workspaces", data, { withCredentials: true })
    return response.data
}

export default {
    createWorkspace
}