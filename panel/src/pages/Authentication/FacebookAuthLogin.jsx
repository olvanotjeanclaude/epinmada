import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { makeStyles } from '@material-ui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import classNames from 'classnames';

const useStyles = makeStyles({
    facebookButton: {
        marginTop: "16px",
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#4267B2',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '10px',
        fontSize: ".8.67rem",
        paddingLeft: "10px",
        cursor: 'pointer',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: '#385898',
        },
    },
});

function FacebookAuthLogin() {
    const classes = useStyles();

    const onSuccessFacebook = (response) => {
        console.log(response);
    }

    const onClick = () =>console.log("button clicked");

    return <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
        icon={<FacebookIcon sx={{ marginRight: 2 }} />}
        fields="name,email,picture"
        onClick={onClick}
        callback={onSuccessFacebook}
        cssClass={classNames(classes.facebookButton)}
        textButton="Se connecter avec Facebook"
    />
}

export default FacebookAuthLogin;