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
## What is production like?
For starters, it is pretty great, you should try it out some time!
Here are some characteristics that great production environments contain:

  - Secure Network Traffic
  - Sub-Domain Support
  - Graceful Error Handling
  - Respond Quickly
  - Path Support

### Secure Network Traffic
### Sub-Domain Support
### Graceful Error Handling
### Respond Quickly
### Path Support

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