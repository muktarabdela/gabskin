import React, { useEffect, useState } from 'react';

const EditProfilePopup = ({ isOpen, closePopup, handleUpdateProfile, error }) => {
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');

    useEffect(() => {
        if (!error && isOpen) {
        }
    }, [error, isOpen, closePopup]);

    const handleSave = () => {
        // Call handleUpdateProfile with the necessary parameters
        handleUpdateProfile({
            newEmail,
            currentPassword,
            newPassword,
            confirmPassword,
        });
    };



    return (
        <div className={`popup ${isOpen ? 'block' : 'hidden'} fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50`}>
            <div className="popup-content dark:bg-gray-300 rounded-lg overflow-hidden p-8 w-96">
                <h2 className="text-2xl font-bold mb-4 text-center text-black">Edit Profile</h2>

                <p className='text-red-600 text-md'>{error}</p>
                <div>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                        new email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="new email"
                        required=""
                    />

                </div>

                <div className='mt-4'>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                        current Password
                    </label>
                    <input
                        type={"text"}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Current Password"
                        required=""
                    />
                </div>
                <div className='my-4'>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                        new Password
                    </label>
                    <input
                        type={"text"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="New Password"
                        required=""
                    />
                </div>

                <div className=''>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                        confirm Password
                    </label>
                    <input
                        type={"text"}
                        name="email"
                        id="email"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Confirm Password"
                        required=""
                    />
                </div>


                {/* Save and Close buttons */}
                <div className="flex justify-end mt-4">
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
                    >
                        Save
                    </button>
                    <button
                        onClick={closePopup}
                        className="bg-gray-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-gray-600 ml-2"
                    >
                        Close
                    </button>
                </div>

            </div>
        </div>
    );
};

export default EditProfilePopup;
