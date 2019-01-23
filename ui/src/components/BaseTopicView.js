import React from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing.unit,
  },
});


function BaseTopicView(props) {
  return (
    <div>
      <div>Home</div>
      {props.children}
      <div>Feeter</div>
    </div>
  );
}

export default withStyles(styles)(BaseTopicView);