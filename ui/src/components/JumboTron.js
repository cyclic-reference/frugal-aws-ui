import Typography from "@material-ui/core/es/Typography/Typography";
import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  principles: {
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '1em',
  },
  principle: {
    paddingRight: '1em',
    marginBottom: '0.5em'
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
});

const JumboTron = props => {
  const {classes} = props;

  return <React.Fragment>
    <Paper className={classes.mainFeaturedPost}>
      <div className={"acari-heading"}>
        <div className={classes.mainFeaturedPostContent}>
          <Typography align={'center'} component="h1" variant="h3" color="inherit" gutterBottom>
            The Frugal AWS Developer
          </Typography>
          <Typography align={'center'} variant="h5" color="inherit" paragraph>
            How to go to production on a budget.
          </Typography>
        </div>
      </div>
    </Paper>
  </React.Fragment>;
};

JumboTron.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JumboTron)
