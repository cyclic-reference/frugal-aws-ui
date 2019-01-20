import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  GooglePlusIcon,
  LinkedinIcon,
  TwitterIcon,
  RedditIcon,
  EmailIcon,
} from 'react-share';

const styles = theme => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
});

class SocialShare extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: !state.open,
    }));
  };

  render() {
    const { children, sharingUrl, project } = this.props;
    const { anchorEl, open } = this.state;
    const id = open ? 'simple-popper' : null;

    return (
      <div>
        <div onClick={this.handleClick}>
          {children}
        </div>
        <Popper id={id} open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper style={{display: 'flex', cursor: 'pointer'}} onClick={()=>this.setState({open: false})}>
                <TwitterShareButton
                  title={project.title + '. ' + project.exerpt}
                  url={sharingUrl}>
                  <TwitterIcon size={48}></TwitterIcon>
                </TwitterShareButton>
                <LinkedinShareButton
                  title={project.title}
                  description={project.exerpt}
                  url={sharingUrl}>
                  <LinkedinIcon size={48}></LinkedinIcon>
                </LinkedinShareButton>
                <FacebookShareButton
                  title={project.title}
                  quote={project.exerpt}
                  url={sharingUrl}>
                  <FacebookIcon size={48}></FacebookIcon>
                </FacebookShareButton>
                <RedditShareButton
                  title={project.title}
                  url={sharingUrl}>
                  <RedditIcon size={48}></RedditIcon>
                </RedditShareButton>
                <EmailShareButton
                  subject={project.title}
                  body={project.exerpt}
                  url={sharingUrl}>
                  <EmailIcon size={48}></EmailIcon>
                </EmailShareButton>
                <GooglePlusShareButton
                  title={project.title}
                  url={sharingUrl}>
                  <GooglePlusIcon size={48}></GooglePlusIcon>
                </GooglePlusShareButton>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    );
  }
}

SocialShare.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SocialShare);
