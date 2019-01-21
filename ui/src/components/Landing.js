import React from 'react';
import JumboTron from "./JumboTron";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./TopicCard";

function Landing(props) {
  const {classes, Topics} = props;
  return (
    <div className={classes.layout}>
      <main>
        <JumboTron/>
        <Grid container spacing={40}>
          {Topics.map(topic => (
            <Grid item key={topic.title} xs={12} md={6}>
              <ProjectCard topic={topic}></ProjectCard>
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
}

export default Landing;
