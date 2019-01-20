import Typography from "@material-ui/core/es/Typography/Typography";
import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  principles: {
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '1em',
  },
  principle:{
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
})


const principles = [
  'Continuous Improvement',
  'Ownership',
  'Bias for Action',
  'Focus',
  'Curiosity',
  'Open-mindedness',
  'Efficiency',
  'Stability',
];

const JumboTron = props => {
  const {classes} = props;

  return <React.Fragment>
    <Paper className={classes.mainFeaturedPost}>
      <div className={"acari-heading"}>
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                Dedicate to being great.
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Here is a rich collection of various projects that capture the principals that I have dedicated to
                <span style={{fontStyle: 'italic'}}> my</span> passion.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div variant="dense" className={classes.principles}>
          {principles.map(principle => (
            <div color="inherit" className={classes.principle} key={principle}>
              &raquo; {principle}
            </div>
          ))}
        </div>
      </div>
    </Paper>
  </React.Fragment>;
}

JumboTron.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JumboTron)
