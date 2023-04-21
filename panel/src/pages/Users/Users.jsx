import { Wrapper } from "../../components";
import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "react-query";
import http from "../../helper/makeRequest";
import Loading from "../../components/Loadings/Loading";

const useStyles = makeStyles(theme => ({
  avatar: {
    display: "inline-block",
    margin: 0,
    [theme.breakpoints.up("sm")]: {
      width: 70,
      height: 70
    },
    [theme.breakpoints.down("xs")]: {
      width: 64,
      height: 64
    },
    marginBottom: theme.spacing(1),
  },
}));

const Users = () => {
  const classes = useStyles();

  const { data, isLoading } = useQuery("users", () => http.get("/users").then(response => response.data));

  if (isLoading) {
    return <Loading />
  }

  return (
    <Wrapper>
      <Grid container spacing={1}>
        {
          data?.map((user, index) => (
            <Grid item xs={12} key={index} sm={6} md={4} xl={3}>
              <Link to="#">
                <Card>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={8}>
                        <Typography variant="h6" gutterBottom>
                          {user.name} <b>{user.surnamr}</b>
                        </Typography>
                        <Typography variant="caption" gutterBottom>
                          {user.email}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          {user.phone}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <div className="text-xs-center">
                          <Avatar
                            alt={user.name}
                            className={classNames(classes.avatar)}
                          />
                          <Typography variant="body1" gutterBottom>
                            {user.typeText}
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))
        }
      </Grid>
    </Wrapper>
  );
};

export default Users;
