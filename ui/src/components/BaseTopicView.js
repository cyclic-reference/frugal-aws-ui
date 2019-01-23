import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import withRouter from "react-router/es/withRouter";
import Link from "react-router-dom/es/Link";

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing.unit,
  },
});


function BaseTopicView(props) {
  return (
    <div>
      <Link to={'/'} style={{textDecoration: 'none'}}>
        Home
      </Link>
      {props.children}
      <div>Feeter</div>
    </div>
  );
}

export default withRouter(withStyles(styles)(BaseTopicView));