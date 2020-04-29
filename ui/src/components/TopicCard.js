import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withRouter from "react-router/es/withRouter";
import {Link} from "react-router-dom";


const styles = theme => ({
  card: {},
  media: {
    minHeight: 150,
    backgroundSize: 'contain',
  },
  cardContent: {
    display: 'flex',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    background: theme.palette.grey[700] + '55',
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width: 80,
    height: 80,
  },
  title: {
    color: '#e8ad4f',
    textDecoration: 'underline',
  },
  content: {
    display: 'flex',
    maxHeight: 150,
    maxWidth: 150,
  }
});

class TopicCard extends React.Component {
  state = {expanded: false};

  handleExpandClick = () => {
    this.setState(state => ({expanded: !state.expanded}));
  };

  render() {
    const {classes, topic} = this.props;
    return (
      <div className={classes.card}>
        <div className={classes.content}>
          <div>
            {
              topic.path ? (<Link to={topic.path} style={{textDecoration: 'none'}}>
                <Typography className={classes.title} gutterBottom variant='h4' color='inherit' component='h2'>
                  {topic.title}
                </Typography>
              </Link>) : (
                <a href={topic.href}
                   target={'_blank'}
                   style={{textDecoration: 'none'}}>
                  <Typography className={classes.title} gutterBottom variant='h4' color='inherit' component='h2'>
                    {topic.title}
                  </Typography>
                </a>
              )
            }
            <div>
              <Typography aria-multiline={true} component='p' color='inherit'>
                {topic.exerpt}
              </Typography>
            </div>
          </div>
          <img
            className={classes.media}
            src={topic.displayImage}
            title={topic.title}
          />
        </div>
      </div>
    );
  }
}

TopicCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(TopicCard));
