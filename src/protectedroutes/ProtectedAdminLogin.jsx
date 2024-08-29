import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedAdminLogin = ({isAuthenticated,children}) => {
    console.log("is:",isAuthenticated);
    
    return (
        <>
        {
            isAuthenticated?(isAuthenticated.role==="admin"?children:<Navigate to="/login"/>):<Navigate to="/login"/>
        }
        </>
    )
}

export default ProtectedAdminLogin