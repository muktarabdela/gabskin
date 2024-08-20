// AdminPage.js
import React, { useEffect, useState } from 'react';
import UserInfo from '../components/admin/UserInfo';
import DeliveryInfo from '../components/admin/DeliveryInfo';
import Orders from '../components/admin/Orders';
import PaymentInfo from '../components/admin/PaymentInfo';
import Messages from '../components/admin/Messages';
import EditProfilePopup from '../components/admin/EditProfilePopup';
import { jwtDecode } from 'jwt-decode';
import { getAdmin } from '../api/adminApi';
const Admin = ({ userId }) => {
    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
    const [userToUpdate, setUserToUpdate] = useState(null);
    const [selectedSection, setSelectedSection] = useState('userInfo');
    const [error, setError] = useState(null)
    const [usersData, setUsersData] = useState([]);

    const token = localStorage.getItem('token');

    const isValidToken = typeof token === 'string' && token.length > 0;
    const decodedToken = isValidToken ? jwtDecode(token) : null;
    const userIdFromToken = decodedToken ? decodedToken.id : null;

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchUserData = async () => {
            try {
                const response = await getAdmin()
                if (response.status === 200) {
                    // Filter users with role 'user'
                    const usersWithUserRole = response.data.filter(user => user.role === 'user');
                    setUsersData(usersWithUserRole);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, [userId]);


    const renderSection = () => {
        const sectioncomponents = {
            userInfo: <UserInfo userInfo={usersData} />,
            deliveryInfo: <DeliveryInfo users={usersData} />,
            orders: <Orders users={usersData} />,
            PaymentInfo: <PaymentInfo users={usersData} />,
            messages: <Messages />,
        };
        return sectioncomponents[selectedSection] || null;
    };
    const openEditPopup = (user) => {
        setUserToUpdate(user);
        setIsEditPopupOpen(true);
    };

    const closeEditPopup = () => {
        setUserToUpdate(null);
        setIsEditPopupOpen(false);
    };

    const handleUpdateProfile = async ({ newEmail, newPassword, confirmPassword, currentPassword }) => {
        try {
            const response = await axios.put('/admin/update-profile', {
                userId: userIdFromToken,
                newEmail,
                newPassword,
                confirmPassword,
                currentPassword,
            });
            console.log('Profile Update:', response.data);
            alert("Profile updated successfully");
            window.location.reload();
            closeEditPopup();
        } catch (error) {
            console.log(error)
            setError(error.response.data.error);
        }
    };
    console.log(error)
    return (
        <div className=" flex flex-col h-screen mt-[5em]">
            <div className='text-right mr-6 mb-5'>
                <button
                    onClick={() => openEditPopup(userToUpdate)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-600"
                >
                    Edit Profile
                </button>
                <button
                    onClick={handleLogout}
                    className="ml-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-red active:bg-red-600">
                    Logout
                </button>
            </div>

            <div className="flex w-[45vh] lg:ml-[5e mx-auto lg:whitespace-nowrap ">
                {['userInfo', 'deliveryInfo', 'orders', 'PaymentInfo', 'messages'].map((section) => (
                    <button
                        key={section}
                        className={`w-full py- mb- ${selectedSection === section ? ' border-b  p-1  rounded-lg text-orange-400 ' : 'text-blue-500 lg:mx-5'}`}
                        onClick={() => setSelectedSection(section)}
                    >
                        {section.replace(/([A-Z])/g, ' $1').trim()}
                    </button>
                ))}
            </div>
            <div className="flex-1 p-2 mt-6">{renderSection()}</div>
            <EditProfilePopup
                isOpen={isEditPopupOpen}
                closePopup={closeEditPopup}
                handleUpdateProfile={handleUpdateProfile}
                error={error}
            />
        </div>
    );
};

export default Admin;

