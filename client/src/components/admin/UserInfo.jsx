import React, { useState } from 'react';
import { deleteUser } from '../../api/userApi';

const UserInfo = ({ userInfo, setUserInfo }) => {
    const reversedUserInfo = userInfo.slice().reverse();
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const openPopup = (user) => {
        setUserToDelete(user);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setUserToDelete(null);
    };

    const handleDeleteUser = async () => {
        if (!userToDelete) return;
        console.log(userToDelete)
        try {
            setLoading(true);
            const response = await deleteUser(userToDelete._id);
            if (response.status === 200) {
                alert('User information deleted successfully');
                window.location.reload();
            } else {
                alert('Failed to delete user information');
            }
        } catch (error) {
            console.log('Error deleting user information:', error);
            alert('An error occurred while deleting user information');
        } finally {
            setLoading(false);
            closePopup();
        }
    };

    return (
        <div className='max-w-5xl mx-auto'>
            <h2 className="text-3xl font-semibold mb-4">User Information</h2>
            {reversedUserInfo.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className="text-white">
                                {["Name", "Email", "Phone number", "Payment status", "Delivery Status", "Deleting"].map((header, index) => (
                                    <th key={index} scope="col" className="px-6 py-3">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-gray-500">
                            {reversedUserInfo.map((user, index) => (
                                <tr key={index} scope="row" className="bg-white dark:bg-gray-800 text-white">
                                    <td className="py-4 px-6 border-b border-gray-200">
                                        {user.name || (user.deliveryInfo?.firstName) || 'N/A'}
                                    </td>
                                    <td className="py-4 px-6 border-b border-gray-200">
                                        {user.email}
                                    </td>
                                    <td className="py-4 px-6 border-b border-gray-200">
                                        {(user.phone || (user.deliveryInfo?.phone)) || 'N/A'}
                                    </td>
                                    <td className="py-4 px-6 border-b border-gray-200 text-green-600 whitespace-nowrap">
                                        {user.paymentStatus}
                                    </td>
                                    <td className="py-4 px-6 border-b border-gray-200 text-green-600 whitespace-nowrap">
                                        {user.deliveryStatus}
                                    </td>
                                    <td className="py-4 px-6 border-b border-gray-200 text-green-600">
                                        <button
                                            onClick={() => openPopup(user)}
                                            className="text-red-500 hover:text-red-700 focus:outline-none"
                                            disabled={loading}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-gray-500">
                    No user information found!
                </p>
            )}

            {showPopup && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-lg font-bold mb-4 text-black">Confirm Deletion</h2>
                        <p className='text-black'>Are you sure you want to delete {userToDelete.name}?</p>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleDeleteUser}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                                disabled={loading}
                            >
                                {loading ? 'Deleting...' : 'Yes'}
                            </button>
                            <button
                                onClick={closePopup}
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                disabled={loading}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserInfo;
