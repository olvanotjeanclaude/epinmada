import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';

const useStyles = makeStyles({
    googleLogin: {
        width: "100%",
    }
});

function GoogleAuthLogin() {
    const classes = useStyles();
    useEffect(() => {
        function start() {
            gapi.auth2.init({
                clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                scope: "",
            });
        }
        gapi.load("client:auth2", start);
    });

    const onSuccessGoogle = (response) => {
        console.log(response);
    }

    const onFailureGoogle = (response) => {
        console.log(response);
    }

    return <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Se connecter avec google"
        onSuccess={onSuccessGoogle}
        onFailure={onFailureGoogle}
        cookiePolicy={'single_host_origin'}
        className={classNames(classes.googleLogin)}
    />
}

export default GoogleAuthLogin;