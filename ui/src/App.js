import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Footer from "./components/Footer";
import JumboTron from "./components/JumboTron";
import ProjectCard from "./components/ProjectCard";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Projects from './Projects';
import Fab from "@material-ui/core/es/Fab/Fab";
import EmailIcon from '@material-ui/icons/Email'
import red from '@material-ui/core/colors/red'
import orange from '@material-ui/core/colors/orange'

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
  fab: {
    backgroundColor: red[500],
    color: theme.palette.grey[100],
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
  },
  typography: { useNextVariants: true },
});

const App = props => {
  const {classes} = props;
  return (
    <React.Fragment>
      <CssBaseline/>
      <MuiThemeProvider theme={theme}>
        <div className={"backdrop"}>
          <AppBar position={"sticky"} className={classes.header}>
            <Toolbar>
              <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                className={classes.toolbarTitle}
              >
                &#10218;  Acari Cyberspace &#10219;
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={classes.layout}>
            <main>
              <JumboTron/>
              <Grid container spacing={40}>
                {Projects.map(project => (
                  <Grid item key={project.title} xs={12} md={6}>
                    <ProjectCard project={project}></ProjectCard>
                  </Grid>
                ))}
              </Grid>
            </main>
          </div>
          <Fab href={'mailto:alexsimons9999@gmail.com?subject=Hey, Alex! Do you have time to talk?'}
               size={"large"}
               title={'You like sending emails, don\'t you?'}
               className={classes.fab}>
            <EmailIcon/>
          </Fab>
          <Footer/>
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
