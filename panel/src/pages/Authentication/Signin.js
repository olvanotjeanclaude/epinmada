import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link, Redirect } from "react-router-dom";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { useAuthProvider } from "../../components/AppProvider/AuthProvider";
import { Box } from "@mui/material";
import GoogleAuthLogin from "./GoogleAuthLogin";
import FacebookAuthLogin from "./FacebookAuthLogin";
import { useForm } from "react-hook-form";

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

const Signin = () => {
  const { login, isAuthenticated } = useAuthProvider();
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");

  if (isAuthenticated) {
    window.location.href = "/";
  }

  const classes = useStyles();

  const handleLogin = async (data) => {

    setMessage("");

    const { response } = await login(data);
    const resData = response?.data;

    if (response?.status == 200) {
      window.location.href = "/";
    }

    if (response?.status == 422) {
      const allError = resData?.errors ?? {};
      setMessage(resData?.message ?? "");
    }
  }

  return (
    <div className={classNames(classes.session, classes.background)}>
      <div className={classes.content}>
        <div className={classes.wrapper}>
          <Card>
            <CardContent>
              <form method="post" onSubmit={handleSubmit(handleLogin)}>
                <div
                  className={classNames(classes.logo, `text-xs-center pb-xs`)}
                >
                  {/* <img
                    src={`${process.env.PUBLIC_URL}/static/images/logo-dark.svg`}
                    alt=""
                    className="block"
                  /> */}
                  <h1>EPINMADA</h1>
                  <Typography color="secondary" align="left">
                    {message ?? ""}
                  </Typography>
                </div>
                <TextField
                  id="email"
                  label="Email"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                  error={errors.email ? true : false}
                  onFocus={() => setMessage("")}
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  helperText={errors.email ? "S'il vous plaît, mettez une adresse email valide." : ""}
                />
                <TextField
                  id="password"
                  label="Mot de passe"
                  {...register("password", { required: true })}
                  error={errors.password ? true : false}
                  helperText={errors.password ? "S'il vous plaît entrer le mot de passe" : ""}
                  className={classes.textField}
                  type="password"
                  fullWidth
                  margin="normal"
                  onFocus={() => setMessage("")}
                />
                {/* <FormControlLabel
                  control={<Checkbox value="checkedA" />}
                  label="Stayed logged in"
                  className={classes.fullWidth}
                /> */}
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Connexion
                </Button>

                <Box mt={2}>
                  <GoogleAuthLogin setMessage={setMessage} />
                  {/* <FacebookAuthLogin /> */}
                </Box>
                <div className="pt-1 text-md-center">
                  <Link to="/signup">
                    <Button>S'inscrire</Button>
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

export default Signin;
