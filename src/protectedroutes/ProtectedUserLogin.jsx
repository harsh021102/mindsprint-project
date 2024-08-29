import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedUserLogin = ({isAuthenticated,children}) => {
    console.log(isAuthenticated);
    
    return (
        <>
        {
            isAuthenticated.role==="user"?children:<Navigate to="/login/user"/>
        }
        </>
    )
}

export default ProtectedUserLogin