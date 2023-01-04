import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../services/Auth';

const Navigations = () => {
    const auth = useAuth()
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/a-propos'>about</Link></li>
                <li><Link to='/profile'>profil</Link></li>
                {!auth.user &&(
                     <li><Link to='/login'>login</Link></li>  
                )
                
                }
            </ul>
        </div>
    );
};

export default Navigations;