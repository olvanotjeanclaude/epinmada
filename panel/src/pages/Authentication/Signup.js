import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GoogleLogin from "react-google-login";
import { Box } from "@mui/material";

const useStyles = makeStyles(theme => ({
  card: {
    overflow: "visible"
  },
  session: {
    position: "relative",
    zIndex: 4000,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  background: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: "url('https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
  },
  content: {
    padding: `40px ${theme.spacing(1)}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 0 auto",
    flexDirection: "column",
    minHeight: "100%",
    textAlign: "center"
  },
  wrapper: {
    flex: "none",
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto"
  },
  fullWidth: {
    width: "100%"
  },
  logo: {
    display: "flex",
    flexDirection: "column"
  }
}));


const Signup = () => {
  const classes = useStyles();
  
  const onSuccessGoogle = (response) => {
    console.log(response);
  }
  
  const onFailureGoogle = (response) => {
    console.log(response);
  }
  
  return (
    <div className={classNames(classes.session, classes.background)}>
      <div className={classes.content}>
        <div className={classes.wrapper}>
          <Card>
            <CardContent>
              <form method="post">
                <div
                  className={classNames(classes.logo, `text-xs-center pb-xs`)}
                >
                  {/* <img
                    src={`${process.env.PUBLIC_URL}/static/images/logo-dark.svg`}
                    alt=""
                  /> */}
                  <Typography variant="h3">Epinmada</Typography>
                </div>
                <TextField
                  id="name"
                  label="Nom"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="surname"
                  label="Prénom"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="email"
                  label="Email"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="password"
                  label="Mot De Passe"
                  className={classes.textField}
                  type="password"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="cpassword"
                  label="Confirmez le mot de passe"
                  className={classes.textField}
                  type="password"
                  fullWidth
                  margin="normal"
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Créez votre compte
                </Button>
                <Box mt={2}>
                  <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Se connecter avec google"
                    // className={classes.textField}
                    onSuccess={onSuccessGoogle}
                    onFailure={onFailureGoogle}
                    cookiePolicy={'single_host_origin'}
                  />
                </Box>
                <div className="pt-1 text-xs-center">
                  <Link to="/forgot">
                    <Button>Mot de passe oublié?</Button>
                  </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="/signin">
                    <Button>Accéder à votre compte</Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Signup;
