import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from "@material-ui/icons/Menu";
import withRouter from "react-router/es/withRouter";
import IconButton from "@material-ui/core/IconButton";
import ReactSVG from "react-svg";
import Link from "react-router-dom/es/Link";
import home from "../images/home.svg";

const styles = theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    color: theme.palette.grey[900],
    marginLeft: -12,
    marginRight: 20,
  },
  grow: {
    flexGrow: 1,
  },
});


class MenuNavigation extends React.Component {
  state = {
    drawerOpen: false,
  };



  toggleDrawer = (open) => () => {
    this.setState({
      drawerOpen: open,
    });
  };

  render() {
    const {classes, topics} = this.props;
    const menuTopics = topics.reduce((a,b)=>{
      a.push(b);
      return a;
    }, [
      {
        title: 'Home',
        displayImage: home,
        path: '/',
      }
    ]);
    const fullList = (
      <div className={classes.fullList}>
        <List>
          {menuTopics.map((topic, index) => (
            <Link key={topic.title} to={topic.path} style={{textDecoration: 'none'}}>
              <ListItem button style={{backgroundColor: index % 2 === 0 ? '#f6f6f6': 'white'}}>
                <ListItemIcon><ReactSVG
                  svgStyle={{width: '50px', height: '50px'}}
                  src={topic.displayImage}/></ListItemIcon>
                <ListItemText primary={topic.title}/>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider/>
      </div>
    );

    return (
      <div>
        <IconButton
          onClick={this.toggleDrawer(true)}
          className={classes.menuButton} aria-label="Menu">
          <Menu/>
        </IconButton>
        <Drawer anchor="top" open={this.state.drawerOpen} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {fullList}
          </div>
        </Drawer>
      </div>
    );
  }
}

MenuNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  topics: PropTypes.array.isRequired,
};

export default withRouter(withStyles(styles)(MenuNavigation));
