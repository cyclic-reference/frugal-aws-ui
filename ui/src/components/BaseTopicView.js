import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import withRouter from "react-router/es/withRouter";
import Link from "react-router-dom/es/Link";
import Button from "@material-ui/core/es/Button";

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing.unit,
  },
  fab: {
    position: 'fixed',
    top: theme.spacing.unit * 2,
    left: theme.spacing.unit * 2,
  },
  postContainer: {},
  layout: {
    padding: '1.5em',
    borderRadius: '0.5em',
    color: '#fff'
  }
});


function BaseTopicView({children, classes, topic}) {
  return (
    <div className={classes.layout}>
      <div className={classes.postContainer}>
        {children}
      </div>
      <div style={{display: 'flex'}}>
        {
          topic.previousPage ?
            <Link to={topic.previousPage}><Button variant={"contained"}
                                                  size='medium'
                                                  color='primary'>&#60;&#60;  Previous Topic</Button></Link>
            :
            null
        }
        <div style={{flexGrow: 1}}/>
        {
          topic.nextPage ?
            <Link to={topic.nextPage}><Button variant={"contained"}
                                              size='medium'
                                              color='primary'>Next Topic &#62;&#62;</Button></Link>
            :
            null
        }
      </div>
    </div>
  );
}

export default withRouter(withStyles(styles)(BaseTopicView));
