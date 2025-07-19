// src/Auth/AuthRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({ children }) => {
    const jwt = useSelector((state) => state.auth.jwt);
    return jwt ? <Navigate to="/" /> : children;
};

export default AuthRoute;
