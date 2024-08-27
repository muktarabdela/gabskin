import instance from "./Axios";

export const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
};

export const userRegister = async (data) => {
    try {
        const response = await instance.post('/users/register', data);
        return response.data;
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
export const userLogin = async (data) => {
    try {
        const response = await instance.post('/users/login', data);
        return response.data;
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
};


export const userPaymentInfo = async (data) => {
    const token = getToken();
    console.log(token);
    try {
        const response = await instance.post('/users/paymentInfo', data
            , {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
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

// create function to submit feedback
export const submitFeedback = async (data) => {
    const token = getToken();
    try {
        const response = await instance.post('/form-submission', data
            , {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
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


export const getUserInfo = async (userIdFromToken) => {
    const token = getToken();
    try {
        const response = await instance.get(`/users/get-user-info/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
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


export const getMessages = async () => {
    const token = getToken();
    try {
        const response = await instance.get('/get-submission',
            {
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

// crate function to delete user delete(`/admin/delete/${userToDelete._id}`);
export const deleteUser = async (userId) => {
    const token = getToken();
    try {
        const response = await instance.delete(`/admin/delete/${userId}`,
            {
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

// create function for update delivery status axios.put(`/stickers/update-delivery-status/${userId}`, {
//     newDeliveryStatus: deliveryStatus[userId],
// });
export const updateDeliveryStatus = async (userId, deliveryStatus) => {
    const token = getToken();
    try {
        const response = await instance.put(`/admin/update-delivery-status/${userId}`, {
            newDeliveryStatus: deliveryStatus[userId],
        },
            {
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


// create function for update payment status 
// create function for update delivery status axios.put(`/stickers/update-delivery-status/${userId}`, {
//     newDeliveryStatus: deliveryStatus[userId],
// });

export const updatePaymentStatus = async (userId, paymentStatus) => {
    const token = getToken();
    try {
        const response = await instance.put(`/admin/update-payment-status/${userId}`, {
            newPaymentStatus: paymentStatus[userId],
        },
            {
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