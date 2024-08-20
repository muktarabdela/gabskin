import instance from "./Axios";

export const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
};

export const uploadCustom = async (data) => {
    const token = getToken();
    try {
        const response = await instance.put('/stickers/get-custom', data
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
// create function for this stickers/stickers-withCategory?category=${category}
export const fetchStickersByCategory = async (category) => {
    try {
        const response = await instance.get(`/stickers/stickers-withCategory?category=${category}`);
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


export const updateStickerS = async (data, stickerId) => {
    const token = getToken();
    try {
        const response = await instance.put(`/stickers/update/${stickerId}`, data
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

export const getPopularStickersMin = async () => {
    try {
        const response = await instance.get(`/stickers/stickers-withCategory?category=most_popular`);
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

export const getPopularStickersLarge = async () => {
    try {
        const response = await instance.get(`/stickers/stickers-withCategory?category=popular`);
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

// create function to get stickers

export const getStickers = async () => {
    try {
        const response = await instance.get('/stickers');
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

// create function to stickers/stickers-withCategory?category=works
export const getWorksStickers = async () => {
    try {
        const response = await instance.get('/stickers/stickers-withCategory?category=works');
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
