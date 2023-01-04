import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigations from './component/Navigations';
import RequireAuth from './component/RequireAuth';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { AuthProvider } from './services/Auth';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/a-propos' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<RequireAuth> <Profile/></RequireAuth>}/>
      </Routes>
      </AuthProvider>
      </BrowserRouter>
     
    </div>
  );
};

export default App;
