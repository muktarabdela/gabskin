import instance from "./Axios";

export const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
};

// register admin
export const registerAdmin = async (data) => {
    try {
        const response = await instance.post('/admin/register', data);
        return response;
    } catch (error) {
        if (error.response) {
            // Handle the error response (e.g., 401 Unauthorized)
            return error.response;
        } else {
            // Handle other types of errors (e.g., network errors)
            console.error(error);
            throw error;
        }
    }
}

// login admin  
export const loginAdmin = async (data) => {
    try {
        const response = await instance.post('/admin/login', data);
        console.log('Response:', response); // Log the response

        return response; // Response object will be returned if the request is successful
    } catch (error) {
        // You can either throw the error or return the error response
        if (error.response) {
            // Handle the error response (e.g., 401 Unauthorized)
            return error.response;
        } else {
            // Handle other types of errors (e.g., network errors)
            console.error(error);
            throw error;
        }
    }
}

export const getAdmin = async () => {
    const token = getToken();
    console.log(token);
    try {
        const response = await instance.get('/users/admin', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;

    } catch (error) {
        if (error.response) {
            // Handle the error response (e.g., 401 Unauthorized)
            return error.response;
        } else {
            // Handle other types of errors (e.g., network errors)
            console.error(error);
            throw error;
        }
    }
}
