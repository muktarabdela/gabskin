import Axios from 'axios';

const axios = Axios.create({
    baseURL: process.env.PUBLIC_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axios

// http://localhost:5500

// https://gabiskin.onrender.com