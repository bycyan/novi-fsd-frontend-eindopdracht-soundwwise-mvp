import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider.jsx';

const LoginPage = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Check if username and password are not empty
        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter both username and password');
            return;
        }

        // Perform your login logic here
        // For simplicity, let's just log the username and password to the console
        console.log('Username:', username);
        console.log('Password:', password);

        // Clear the form fields
        setUsername('');
        setPassword('');

        // Redirect to the /profile route
        navigate('/profile');
    };

    return (
        <div className="outer-container">
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;