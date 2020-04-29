import React from 'react';
import JumboTron from "./JumboTron";
import ProjectCard from "./TopicCard";

function Landing(props) {
  const {classes, Topics} = props;
  return (
    <div className={classes.layout}>
      <main>
        <JumboTron/>
        <div>
          {Topics.map((topic, idx) => (
            <div key={topic.title}>
              <div>
                <ProjectCard topic={topic}/>
              </div>
              {idx < Topics.length - 1 && <hr className={classes.topicDivider}/>}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Landing;
