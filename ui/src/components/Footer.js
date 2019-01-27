import Typography from "@material-ui/core/es/Typography/Typography";
import Reach from "../images/reach_orange.svg";
import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Fab from "@material-ui/core/es/Fab/Fab";
import GitHub from "./Github";
import {Code, Home} from "@material-ui/icons";
import Card from "@material-ui/core/es/Card/Card";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import yellow from "@material-ui/core/es/colors/yellow";
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
    textAlign: 'center',
  },
  socialLink: {
    marginRight: '0.5em',
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
    title: "Frugal AWS Dev's Source Code",
    link: 'https://github.com/cyclic-reference/frugal-aws-ui',
    icon: (<Code/>),
  },
  {
    title: "Alex's GitHub Profile",
    link: 'https://github.com/cyclic-reference',
    icon: (<GitHub/>),
  },
  {
    title: "Alex's Home",
    link: 'https://acari.io',
    icon: (<Home/>),
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
                Built by Alex Simons.
              </Typography>
              <Typography color={'inherit'}>
                Since you are reading this, chances, are I sent you here.
                If you happened to stumble across this site then, "Hi! Nice to meet you!"
              </Typography> <br/>
              <Typography color={'inherit'}>
                Feel free to browse my sites below.
              </Typography>
            </CardContent>
            <div align="center" className={classes.social}>
              <GridList cellHeight={64} className={classes.gridList} cols={socialLinks.length}>
                {socialLinks.map(socialLink => (
                  <GridListTile key={socialLink.title} cols={1}>
                    <Fab
                      classes={'primary'}
                      className={classes.socialLink}
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
        <a style={{textDecoration: 'none'}} href={'https://acari.io'} target={'_blank'}>
          <ReactSVG svgStyle={{width: '100%', height: "100%"}}
                    src={Reach}/>
        </a>
      </div>
    </footer>
    <div style={{paddingLeft: '1em', color: '#EAEAEA', opacity: 0.25}}>
      <Typography color={"inherit"}>
        v1.0.0
      </Typography>
    </div>
  </React.Fragment>;
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer)
