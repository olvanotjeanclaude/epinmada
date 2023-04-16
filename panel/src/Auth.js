import React from 'react';
import { Signin } from './pages';
import { AuthProvider, useAuthProviver } from './components/AppProvider/AuthProvider';
 
const  Auth = ({children}) => {
    const {isAuthenticated} = useAuthProviver();

    if(!isAuthenticated){
        return <Signin />;
    }

    return (
       <AuthProvider>
         {children}
       </AuthProvider>
    )
}

export default Auth;