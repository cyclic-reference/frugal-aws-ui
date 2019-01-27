import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import withRouter from "react-router/es/withRouter";
import Link from "react-router-dom/es/Link";
import Fab from "@material-ui/core/es/Fab";
import yellow from "@material-ui/core/colors/yellow";
import home from "../images/home.svg";
import ReactSVG from "react-svg";

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing.unit,
  },
  fab: {
    backgroundColor: yellow[500],
    color: theme.palette.grey[900],
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  postContainer: {
    backgroundColor: 'rgba(155,155,155,1)',
  }
});


function BaseTopicView({children, classes, topic}) {
  return (
    <div className={classes.layout}>
      <Link to={'/'} style={{textDecoration: 'none'}}>
        Go Home
      </Link>
      <div className={classes.postContainer}>
        {children}
      </div>
      {
        topic.previousPage ? <Link to={topic.previousPage}>Previous Topic</Link> : null
      }
      {
        topic.nextPage ? <Link to={topic.nextPage}>Next Topic</Link> : null
      }
      <div>Feeter</div>
      <Link to={'/'} style={{textDecoration: 'none'}}>
        <Fab className={classes.fab}>
          <ReactSVG
            svgStyle={{width: '30px', height: '30px'}}
            src={home}/>
        </Fab>
      </Link>
    </div>
  );
}

export default withRouter(withStyles(styles)(BaseTopicView));