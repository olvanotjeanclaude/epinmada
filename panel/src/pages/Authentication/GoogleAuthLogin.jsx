import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import http from '../../helper/makeRequest';
import { useAuthProvider } from '../../components/AppProvider/AuthProvider';

const useStyles = makeStyles({
    googleLogin: {
        width: "100%",
    }
});

function GoogleAuthLogin({ setMessage }) {
    const classes = useStyles();
    const { logoutGoogle, userIsLoggedIn } = useAuthProvider();

    useEffect(() => {
        function start() {
            gapi.auth2.init({
                clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                scope: "",
            });
        }
        gapi.load("client:auth2", start);
    });

    const onSuccessGoogle = async (response) => {
        setMessage("");

        const profile = response.profileObj;

        const params = {
            email: profile.email,
            name: profile.givenName,
            surname: profile.familyName,
            google_id: profile.googleId,
            image: profile.imageUrl,
            social_value: response
        };

        const data = await http.post(`/auth-social/google`, params)
            .then((response) => response.data)
            .catch(({ response }) => response);

        if (data.status == 422) {
            setMessage(data.data.error);
            logoutGoogle();
        }

        if (data.isSuccess) {
            userIsLoggedIn(data);
        }
    }

    const onFailureGoogle = async (response) => {

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