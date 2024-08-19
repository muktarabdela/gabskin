import React, { useState, useMemo, useCallback } from 'react';
import axios from '../../Axios';

const DeliveryInfo = ({ users }) => {
    const [deliveryStatus, setDeliveryStatus] = useState({});

    const handleUpdateDeliveryStatus = useCallback(async (userId) => {
        try {
            const response = await axios.put(`/stickers/update-delivery-status/${userId}`, {
                newDeliveryStatus: deliveryStatus[userId],
            });
            console.log(response.data);
            alert('Delivery status updated successfully!');
        } catch (error) {
            console.error('Error updating delivery status:', error);
        }
    }, [deliveryStatus]);

    const handleStatusChange = useCallback((userId, newStatus) => {
        setDeliveryStatus((prevStatus) => ({
            ...prevStatus,
            [userId]: newStatus,
        }));
    }, []);

    const reversedUsers = useMemo(() => [...users].reverse(), [users]);

    return (
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Delivery Information</h2>
            {reversedUsers.length > 0 ? (
                <div>
                    {reversedUsers.map((user, index) => (
                        <div key={index} className="bg-gray-100 text-black my-5 p-4 ">
                            <div className="mb-2">
                                <strong>First Name:</strong> {user.deliveryInfo?.firstName || 'No delivery info'}
                            </div>
                            <div className="mb-2">
                                <strong>Last Name:</strong> {user.deliveryInfo?.lastName || 'No delivery info'}
                            </div>
                            <div className="mb-2">
                                <strong>Phone Number:</strong> {user.deliveryInfo?.phone || 'No delivery info'}
                            </div>
                            <div className="mb-2">
                                <strong>SubCity:</strong> {user.deliveryInfo?.subCity || 'No delivery info'}
                            </div>
                            <div>
                                <strong>Delivery Location:</strong>{' '}
                                {user.deliveryInfo?.deliveryLocation || 'No delivery info'}
                            </div>
                            <div>
                                <strong>Delivery status:</strong>{' '}
                                <select
                                    className="text-black mt-2 w-full px-2 py-1 rounded-md border border-gray-300 focus:outline-none"
                                    value={deliveryStatus[user._id] || ''}
                                    onChange={(e) => handleStatusChange(user._id, e.target.value)}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="in progress">in progress</option>
                                    <option value="Delivered">Delivered</option>
                                </select>
                                <button
                                    onClick={() => handleUpdateDeliveryStatus(user._id)}
                                    className="bg-blue-500 text-white px-2 py-1 my-2 rounded-md"
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">
                    No delivery information found. Order now to provide delivery details!
                </p>
            )}
        </div>
    );
};

export default DeliveryInfo;
