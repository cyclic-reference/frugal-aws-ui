import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import PropTypes from 'prop-types';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Footer from "./components/Footer";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Topics from './Topics';
import Fab from "@material-ui/core/es/Fab/Fab";
import EmailIcon from '@material-ui/icons/Email'
import yellow from '@material-ui/core/colors/yellow'
import orange from '@material-ui/core/colors/orange'
import Landing from "./components/Landing";
import MenuNavigation from "./components/MenuNavigation";
import Shrug from './images/shrug_shadow.png';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  reach: {
    verticalAlign: 'middle',
    maxWidth: '100%',
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  header: {
    backgroundColor: '#E0E0E0',
    marginBottom: '1em',
  },
  toolbarTitle: {
    color: theme.palette.grey[900],
    flex: 1,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  shrugContainer: {
    padding: '1em',
    marginTop: '2em',
    textAlign: 'center',
    borderRadius: '5px',
  },
  goHomeContainer: {
    color: '#EEEEEE',
    backgroundColor: 'rgba(55,55,55,0.75)',
    borderRadius: '5px',
    textAlign: 'center',
    margin: '32px auto',
    padding: '48px',
    maxWidth: '400px',
    cursor: 'pointer',
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
  },
});


const theme = createMuiTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
  },
  typography: {useNextVariants: true},
});

const App = props => {
  const {classes} = props;
  return (
    <React.Fragment>
      <CssBaseline/>
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className={"backdrop"}>
            <AppBar position={"sticky"} className={classes.header}>
              <Toolbar>
                <MenuNavigation topics={Topics}/>
                <Typography
                  component="h2"
                  variant="h5"
                  color="inherit"
                  noWrap
                  className={classes.toolbarTitle}
                >
                  The Frugal AWS Dev
                </Typography>
              </Toolbar>
            </AppBar>
            <Switch>
              <Route path={'/'} exact component={() => <Landing classes={classes} Topics={Topics}/>}/>
              {Topics
                .filter(topic => !!topic.viewComponent)
                .map(topic => <Route path={topic.path} component={props=><topic.viewComponent {...props} classes={classes}/>}/>)}
              <Route component={() => <div>
                <div className={classes.shrugContainer}>
                  <img
                    src={Shrug}
                    alt="¯\_(ツ)_/¯"/>
                </div>
                <Link to={'/'} style={{textDecoration: 'none'}}>
                  <div className={classes.goHomeContainer}>
                    <h1>Hmmm, I can't seem to find that...</h1>
                    <div className="btn btn-primary">
                      Go Home
                    </div>
                  </div>
                </Link>
              </div>
              }/>
            </Switch>
            <Footer/>
          </div>
        </Router>
      </MuiThemeProvider>
    </React.Fragment>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);