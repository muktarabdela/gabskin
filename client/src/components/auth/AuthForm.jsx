import React, { useState } from 'react';
import Login from './Login';

const AuthForm = () => {
    const [isRegistering, setIsRegistering] = useState(false);

    const toggleForm = () => {
        setIsRegistering((prevState) => !prevState);
    };

    return (
        <div className='mb-20'>
            <Login onToggleForm={toggleForm} />
        </div>
    );
};

export default AuthForm;
