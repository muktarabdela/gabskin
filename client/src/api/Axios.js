import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5500/api",
    headers: {
        'Content-Type': 'application/json'
    }
});

export default instance;

// http://localhost:5500

// https://gabiskin.onrender.com