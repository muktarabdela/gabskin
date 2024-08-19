import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { jwtDecode } from 'jwt-decode';

import AuthForm from '../auth/AuthForm';
import UserAccountDetails from './UserAccountDetails';

const AccountLink = () => {
    const [showAuthForm, setShowAuthForm] = useState(false);
    const token = localStorage.getItem('acc2essToken');
    const isValidToken = typeof token === 'string' && token.length > 0;
    const decodedToken = isValidToken ? jwtDecode(token) : null;
    const userIdFromToken = decodedToken ? decodedToken.userId : null;

    const handleIconClick = () => {
        if (!userIdFromToken) {
            setShowAuthForm(true);
        }
    };

    return (
        <Link to={`/account/${userIdFromToken}`}>
            <IconButton color="inherit" onClick={handleIconClick}>
                <AccountCircle />
            </IconButton>
        </Link>
    );
};

export default AccountLink;
