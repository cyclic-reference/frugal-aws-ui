import BaseTopicView from "../components/BaseTopicView";
import React from "react";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Markdown from "../components/Markdown";


const styles = theme => ({
  thing: {
    color: 'red'
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
    whiteSpace: 'preserve',
  },
});

const markdown = `
# yolo
## reps 4 jesus
`;

const WhatIsProd = ({classes}) => (
  <BaseTopicView classes={classes}>
    <div className={classes.thing}>Ello govna</div>
    <Markdown className={classes.markdown}>
      {markdown}
    </Markdown>
  </BaseTopicView>
);

export default withStyles(styles)(WhatIsProd);