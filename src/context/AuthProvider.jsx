import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
    username: '',
    password: '',
    isLoggedIn: false,
    handleFormSubmit: () => {},
    handleUsernameChange: () => {},
    handlePasswordChange: () => {},
    setLoggedIn: () => {},
});

export const AuthProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoggedIn(true);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <AuthContext.Provider
            value={{
                username,
                password,
                isLoggedIn,
                handleFormSubmit,
                handleUsernameChange,
                handlePasswordChange,
                setLoggedIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
