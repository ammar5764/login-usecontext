import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigations from '../component/Navigations';
import { useAuth } from '../services/Auth';

const Login = () => {

    const [user, setUser] = useState("")
    const auth = useAuth();
    const navigate = useNavigate()

    const handleLogin = () => {
        auth.login(user);
        navigate('/profile', { replace: true })
    }
    return (
        <div>
            <Navigations />
            <label htmlFor="username">
                user name:
                <input type="text" onChange={(e) => setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}>send</button>
        </div>
    );
};

export default Login;