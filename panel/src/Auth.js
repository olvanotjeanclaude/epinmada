import React from 'react';
import { Signin } from './pages';
import { AuthProvider, useAuthProviver } from './components/AppProvider/AuthProvider';
import { Redirect } from 'react-router-dom';
 
const  Auth = ({children}) => {
    const {isAuthenticated} = useAuthProviver();

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