import BaseTopicView from "../components/BaseTopicView";
import React from "react";
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = theme => ({
  thing: {
    color: 'red'
  }
});

const WhatIsProd = ({classes}) => (
  <BaseTopicView>
    <div className={classes.thing}>Ello govna</div>
  </BaseTopicView>
);

export default withStyles(styles)(WhatIsProd);