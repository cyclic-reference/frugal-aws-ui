import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Menu from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

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

    const fullList = (
      <div className={classes.fullList}>
        <List>
          {topics.map((text, index) => (
            <ListItem button key={text.title}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
              <ListItemText primary={text.title}/>
            </ListItem>
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

export default withStyles(styles)(MenuNavigation);
