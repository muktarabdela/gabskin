import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import AuthForm from '../auth/AuthForm';
import UserAccountDetails from './UserAccountDetails';
import { getUserInfo } from '../../api/userApi';
const Account = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const { userId } = useParams();
    console.log(userId)
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const isValidToken = typeof token === 'string' && token.length > 0;
    const decodedToken = isValidToken ? jwtDecode(token) : null;
    const userIdFromToken = decodedToken?.userId;
    useEffect(() => {
        // create function for this
        const getUserData = async () => {
            try {
                if (userIdFromToken) {
                    const response = await getUserInfo(userIdFromToken);
                    console.log(response)
                    setUserInfo(response);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getUserData();
    }, [userId, navigate]);
    if (userId === "undefined" || userId === "null" || userIdFromToken !== "user") {
        return <AuthForm />;

    }
    if (loading) {
        return <p className='mt-40'>Loading...</p>;
    }
    if (!userInfo) {
        return <AuthForm />;
    }
    return (
        <UserAccountDetails userInfo={userInfo} />
    );
};

export default Account;