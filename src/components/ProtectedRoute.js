
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const userAuth = () => {
    let userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
    return userDetails;
}
function ProtectedRoute() {
    const isAuth = userAuth();
    return (

        isAuth ? <Outlet /> : <Navigate to='/auth' />

    );
}

export default ProtectedRoute;