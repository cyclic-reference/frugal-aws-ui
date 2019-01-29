import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/es/Button";

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing.unit,
  },
});

const options = {
  overrides: {
    h1: {component: props => <Typography color={'inherit'} gutterBottom variant="h2" {...props} />},
    h2: {component: props => <Typography color={'inherit'} gutterBottom variant="h3" {...props} />},
    h3: {component: props => <Typography color={'inherit'} gutterBottom variant="h4" {...props} />},
    h4: {component: props => <Typography color={'inherit'} gutterBottom variant="h5" {...props} />},
    h5: {component: props => <Typography color={'inherit'} gutterBottom variant="h6" paragraph {...props} />},
    p: {component: props => <Typography color={'inherit'} paragraph {...props} />},
    a: {
      component: props => {
        if (props.children && props.children.filter(child => child.indexOf && child.indexOf('~!@') > -1).length > 0) {
          return <span>{props.href.substring(0, props.href.length - 3)}</span>
        } else {
          return <a {...props} target={"_blank"}>
            <Button variant={"outlined"}
                    size='medium'
                    color='default'>
              {props.children}
            </Button></a>;
        }
      },
    },
    img: {
      component: props => <div className="image-container"><img {...props}/></div>,
      props: {
        style: {
          borderWidth: '4px',
          borderStyle: 'solid',
          borderColor: 'rgb(34,34,34)',
          boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 10px',
        },
      },
    },
    li: {
      component: withStyles(styles)(({classes, ...props}) => (
        <li className={classes.listItem}>
          <Typography color={"inherit"} component="span" {...props} />
        </li>
      )),
    },
  },
};

function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}

export default Markdown;