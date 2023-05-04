import React from 'react';
import { AuthProvider, useAuthProvider } from './components/AppProvider/AuthProvider';
import { Redirect } from 'react-router-dom';
 
const  Auth = ({children}) => {
    const {isAuthenticated} = useAuthProvider();

    if(!isAuthenticated){
        return <Redirect to="/signin" />
    }

    return (
       <AuthProvider>
         {children}
       </AuthProvider>
    )
}

export default Auth;