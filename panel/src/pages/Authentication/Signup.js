import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
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
  const { handleSubmit, register, watch, formState: { errors } } = useForm();
  
  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    console.log({
      errors
    })
  }

  return (
    <div className={classNames(classes.session, classes.background)}>
      <div className={classes.content}>
        <div className={classes.wrapper}>
          <Card>
            <CardContent>
              <form method="post" onSubmit={handleSubmit(onSubmit)}>
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
                  // error={errors.name}
                  label="Nom"
                  {...register("name", { required: true })}
                  className={classes.textField}
                  fullWidth
                  error={errors.name ? true : false}
                  helperText={errors.name ? "le champ de nom ne peut pas être vide" : ""}
                  margin="normal"
                />
                <TextField
                  id="surname"
                  {...register("surname", { required: true })}
                  label="Prénom"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                  error={errors.surname ? true : false}
                  helperText={errors.surname ? "le champ de prenom ne peut pas être vide" : ""}
                />
                <TextField
                  id="email"
                  label="Email"
                  className={classes.textField}
                  fullWidth
                  error={errors.email ? true : false}
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  helperText={errors.email ? "S'il vous plaît, mettez une adresse email valide." : ""}
                  margin="normal"
                />
                <TextField
                  id="password"
                  {...register("password", { required: true })}
                  label="Mot De Passe"
                  className={classes.textField}
                  type="password"
                  error={errors.password ? true : false}
                  helperText={errors.password ? "le champ mot de passe ne peut pas être vide" : ""}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="cpassword"
                  {...register("cpassword", { required: true, validate: (value) => value === password || "Le mot de passe ne correspond pas", })}
                  label="Confirmez le mot de passe"
                  className={classes.textField}
                  type="password"
                  fullWidth
                  margin="normal"
                  error={errors.cpassword ? true : false}
                  helperText={errors.cpassword ? errors.cpassword.message : ""}
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
                  <GoogleAuthLogin />
                  {/* <FacebookAuthLogin /> */}
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
