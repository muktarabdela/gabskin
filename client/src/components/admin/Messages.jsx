import React, { useEffect, useState } from 'react'
import axios from '../../api/Axios'
import { getMessages } from '../../api/userApi';
const Messages = () => {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchUserData = async () => {
            try {
                const response = await getMessages()
                console.log(response);
                const userDataArray = response.data;
                setUsersData(userDataArray);
            } catch (error) {
                console.error('Error fetching user data:', error.message);
            }
        };
        fetchUserData();
    }, []);
    const reversedUserInfo = Array.isArray(usersData) ? usersData.slice().reverse() : [];

    console.log(reversedUserInfo)
    return (
        <div className="px-1 py-8 max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Message </h2>
            {reversedUserInfo.length > 0 ? (
                <div>
                    {reversedUserInfo.map((user, index) => (
                        <div key={index} className="bg-gray-100 text-black my-5 p-4 rounded-md ">
                            <div className="mb-2">
                                <strong> Name:</strong> {user?.name || 'No delivery info'}
                            </div>
                            <div className="mb-2">
                                <strong>email:</strong> {user?.email || 'No delivery info'}
                            </div>
                            <div className="mb-2 text-lg">
                                <strong >Message:</strong> <br /> {user?.message || 'No delivery info'}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">
                    No messages found !
                </p>
            )}
        </div>)
}

export default Messages