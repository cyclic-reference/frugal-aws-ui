import React from 'react';
import JumboTron from "./JumboTron";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./ProjectCard";

function Landing(props) {
  const {classes, Projects} = props;
  return (
    <div className={classes.layout}>
      <main>
        <JumboTron/>
        <Grid container spacing={40}>
          {Projects.map(project => (
            <Grid item key={project.title} xs={12} md={6}>
              <ProjectCard project={project}></ProjectCard>
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
}

export default Landing;
