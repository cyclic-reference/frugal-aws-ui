import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GridList from '@material-ui/core/es/GridList/GridList';
import Button from '@material-ui/core/es/Button/Button';
import HexBottom from '../images/hex-bottom.png';
import SocialShare from "./SocialShare";


const styles = theme => ({
  card: {
    maxWidth: 1000,
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.grey[800],
    backgroundImage: `url(${HexBottom})`,
    backgroundPosition: 'left bottom',
    backgroundRepeat: 'repeat-x',
  },
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
});

class TopicCard extends React.Component {
  state = {expanded: false};

  handleExpandClick = () => {
    this.setState(state => ({expanded: !state.expanded}));
  };

  render() {
    const {classes, topic} = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant='h4' color='inherit' component='h2'>
            {topic.title}
          </Typography>
          <GridList cellHeight={'auto'}>
            <div>
              <Typography aria-multiline={true} component='p' color='inherit'>
                {topic.exerpt}
              </Typography>
            </div>
              <CardMedia
                className={classes.media}
                image={topic.displayImage}
                title={topic.title}
              />
          </GridList>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <SocialShare sharingUrl={topic.link.href} topic={topic}>
            <IconButton aria-label='Share' color={'inherit'}>
              <ShareIcon/>
            </IconButton>
          </SocialShare>
          <div style={{width: '100%', display:'flex'}}>
            <div style={{flexGrow: 0.5}}/>
            <Avatar  aria-label='Reach'
                     className={classes.avatar}

                     sizes={'100%'}
                     src={topic.reach}/>
          </div>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            color={'inherit'}
            aria-expanded={this.state.expanded}
            aria-label='Show more'
          >
            <ExpandMoreIcon/>
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
          <CardContent>
            {
              topic.descriptions.map((description, index) => (
                <Typography key={index}
                            color={'inherit'}
                            paragraph>{description}</Typography>
              ))
            }
          </CardContent>
          { !topic.link.hideButton &&
          (<CardActions>
            <Button href={topic.link.href}
                    target={'_blank'}
                    variant={"contained"}
                    size='medium'
                    color='default'>
              {topic.link.linkText}
            </Button>
          </CardActions>)
          }
        </Collapse>
      </Card>
    );
  }
}

TopicCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopicCard);
