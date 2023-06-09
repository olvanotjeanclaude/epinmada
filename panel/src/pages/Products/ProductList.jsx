import { ProductCard, Wrapper } from '../../components';
import React, {  useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Checkbox from '@material-ui/core/Checkbox';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { drawerWidth } from '../../styleVariables';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query';
import http from '../../helper/makeRequest';
import Loading from '../../components/Loadings/Loading';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 100
  },
  toolBar: {
    paddingLeft: theme.spacing(1) / 2,
    paddingRight: theme.spacing(1) / 2
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    maxWidth: drawerWidth,
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'transparent',
      overflow: 'visible'
    },
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 56px)'
    },
    [theme.breakpoints.up('sm')]: {
      top: '0',
      height: 'calc(100vh - 64px)'
    },
    border: 0,
    height: 'auto'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
    minWidth: 0
  },
  modal: {
    [theme.breakpoints.down('sm')]: {
      top: '56px'
    },
    [theme.breakpoints.up('sm')]: {
      top: '64px'
    },
    zIndex: '1000'
  },
  backdrop: {
    [theme.breakpoints.down('sm')]: {
      top: '56px'
    },
    [theme.breakpoints.up('sm')]: {
      top: '64px'
    }
  },
  checkbox: {
    width: '24px',
    height: '24px'
  }
}));

const ProductList = () => {
  const classes = useStyles();
  const [opened, setOpened] = useState(false);
  const { data, isLoading } = useQuery("product", () => http.get("/products").then(response => response.data));

  const handleDrawerToggle = () => setOpened(!opened);

  const menu = (
    <>
      <List subheader={<ListSubheader disableSticky>Catégories</ListSubheader>}>
        {data?.categories?.map((category, index) => (
          <ListItem key={category.id}  role={undefined} button>
            <Checkbox
              tabIndex={-1}
              disableRipple
              className={classes.checkbox}
            />
            <ListItemText primary={category.name} />
          </ListItem>
        )
        )}
      </List>
    </>
  );

  return (
    <Wrapper padding={false}>
      <Hidden mdUp>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => handleDrawerToggle()}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Products
            </Typography>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Grid className={classes.root}>
        <Hidden smDown>
          <Drawer
            variant="permanent"
            ModalProps={{
              keepMounted: false,
              className: classes.modal,
              BackdropProps: {
                className: classes.backdrop
              },
              onBackdropClick: handleDrawerToggle
            }}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {menu}
          </Drawer>
        </Hidden>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            open={opened}
            ModalProps={{
              keepMounted: false,
              className: classes.modal,
              BackdropProps: {
                className: classes.backdrop
              },
              onBackdropClick: handleDrawerToggle
            }}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {menu}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <Grid container spacing={1}>
            {isLoading && <Loading />}
           
            {data?.products?.map((product, index) => (
              <Grid item xs={6} sm={6} md={6} lg={4} key={index}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image=""
                />
              </Grid>
            ))}
          </Grid>
        </main>
      </Grid>
    </Wrapper>
  );
};

export default ProductList;
