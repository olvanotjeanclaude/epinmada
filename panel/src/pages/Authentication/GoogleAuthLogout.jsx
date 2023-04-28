import React from 'react'
import { GoogleLogout } from 'react-google-login'

function GoogleAuthLogout() {
    const onLogoutSuccess = (response) => {
        console.log(response);
    }

    return (
        <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Se déconnecter"
            onLogoutSuccess={onLogoutSuccess}
        />
    )
}

export default GoogleAuthLogout;