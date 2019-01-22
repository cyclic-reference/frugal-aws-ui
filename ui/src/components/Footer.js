import Typography from "@material-ui/core/es/Typography/Typography";
import Reach from "../images/reach_yellow.svg";
import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Fab from "@material-ui/core/es/Fab/Fab";
import GitHub from "./Github";
import LinkedIn from "./LinkedIn";
import {Code} from "@material-ui/icons";
import Card from "@material-ui/core/es/Card/Card";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import yellow from "@material-ui/core/es/colors/yellow";
import Trello from "./Trello";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ReactSVG from "react-svg";

const styles = theme => ({
  footer: {
    borderRadius: theme.spacing.unit,
    marginTop: theme.spacing.unit * 8,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  social: {
    padding: '0.25em',
    justifyContent: 'space-evenly',
    marginBottom: theme.spacing.unit * 3,
  },
  socialLink: {
    marginRight: '0.5em',
    backgroundColor: yellow[600],
    color: theme.palette.grey[900],
  },
  card: {
    color: theme.palette.grey[200],
    backgroundColor: 'rgba(55,55,55,0.75)',
  },
  link: {
    color: theme.palette.grey[200],
  },
  aboutCard: {
    maxWidth: 400,
  },
});

const socialLinks = [
  {
    title: "Acari Cyberspace's Source Code",
    link: 'https://github.com/cyclic-reference/acari-ui',
    icon: (<Code/>),
  },
  {
    title: "Alex's GitHub Profile",
    link: 'https://github.com/cyclic-reference',
    icon: (<GitHub/>),
  },
  {
    title: "Alex's Kanban",
    link: 'https://trello.com/b/JUPDhYNk/how-to-spend-free-time',
    icon: (<Trello/>),
  },
  {
    title: "Alex's Linkedin",
    link: 'https://www.linkedin.com/in/alex-simons-1a459610a/',
    icon: (<LinkedIn/>),
  },
];

const Footer = props => {
  const {classes} = props;

  return <React.Fragment>
    <footer className={classes.footer}>
      <div align="center">
        <div className={classes.aboutCard} xs={12} md={6}>
          <Card className={classes.card} elevation={0}>
            <CardContent>
              <Typography color={'inherit'} variant="h6" gutterBottom>
                What is Alex Simons like?
              </Typography>
              <Typography color={'inherit'}>
                I have a ton of words that I would choose to describe myself .
                However if I had to choose only one, that one would be: <strong>Driven</strong>.
                I am driven to reach my full potential and use every day to get closer to that goal.
                If you want to read more about me please see <a className={classes.link} target={'_blank'} href={'https://blog.acari.io/about/index.html'}>this post.</a>
              </Typography><br/>
              <Typography color={'inherit'}>
                Since you are reading this, chances, are I sent you here.
                If you happened to stumble across this site then, "Hi! Nice to meet you!"
              </Typography> <br/>
              <Typography color={'inherit'}>
                Feel free to say "Hey!" or visit my social sites below.
              </Typography>
            </CardContent>
            <div align="center" className={classes.social}>
              <GridList cellHeight={64} className={classes.gridList} cols={4}>
                {socialLinks.map(socialLink => (
                  <GridListTile key={socialLink.title} cols={1}>
                    <Fab className={classes.socialLink}
                         title={socialLink.title}
                         href={socialLink.link}
                         target={'_blank'}>
                      {socialLink.icon}
                    </Fab>
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </Card>
        </div>
      </div>
      <div style={{textAlign: 'center'}}>
        <ReactSVG svgStyle={{width:'100%', height:"100%"}}
                  src={Reach}/>
      </div>
    </footer>
    <div style={{paddingLeft: '1em', color: '#EAEAEA', opacity: 0.25}}>
      <Typography color={"inherit"}>
        v1.2.1
      </Typography>
    </div>
  </React.Fragment>;
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer)
