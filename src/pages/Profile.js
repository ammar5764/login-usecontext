import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigations from '../component/Navigations';
import { useAuth } from '../services/Auth';

const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }

    return (
        <div>
            <Navigations/>
            <h1> PAGE PROFIL</h1>
             <button onClick={handleLogout}>logout</button>
            <br /> <h2> welcome {auth.user}</h2>
           
        </div>
    );
};

export default Profile;