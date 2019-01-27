import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/es/GridList/GridList';
import Button from '@material-ui/core/es/Button/Button';
import HexBottom from '../images/hex-bottom.png';
import withRouter from "react-router/es/withRouter";
import {Link} from "react-router-dom";


const styles = theme => ({
  card: {
    backgroundColor: "#E9E9E9",
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
          <Link to={topic.path} style={{textDecoration: 'none'}}>
            <Button variant={"contained"}
                    size='medium'
                    color='default'>
              Read More
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }
}

TopicCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(TopicCard));
