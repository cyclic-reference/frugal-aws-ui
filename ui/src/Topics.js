import Question from './images/Question.svg';
import purple from "@material-ui/core/es/colors/purple";
import blue from "@material-ui/core/es/colors/blue";
import green from "@material-ui/core/es/colors/green";
import red from "@material-ui/core/es/colors/red";
import build from './images/build.svg';
import GreenLight from './images/GreenLight.svg'
import cloud from './images/cloud.svg'
import dogecoin from './images/dogecoin.svg';
import WhatIsProd from "./views/WhatIsProd";
import WhereToStart from "./views/WhereToStart";
import DevelopLocal from "./views/DevelopLocal";
import GoToProd from "./views/GoToProd";
import PayForProd from "./views/PayForProd";

const topics = [
  {
    title: 'What is Production?',
    exerpt: 'This section will explain the positive traits that are exhibited by well established production environments.',
    color: purple[500],
    displayImage: Question,
    path: '/what/is/production',
    viewComponent: (WhatIsProd),
    nextPage: '/how/to/start',
  },
  {
    title: 'Where do I start?',
    exerpt:
      'Now that a you have a fundamental understanding of what a "good" production environment looks like. ' +
      'The next step in your journey is laying out a cost optimized strategy.',
    color: green[500],
    displayImage: GreenLight,
    path: '/how/to/start',
    viewComponent: (WhereToStart),
    previousPage: '/what/is/production',
    nextPage: '/develop/local',
  },
  {
    title: 'How do I develop locally?',
    exerpt:
      'Theory and practice are two separate things, in my mind. Just knowing what needs to happen is half of the battle. ' +
      'This section is devoted in showing how to start putting these building blocks together.',
    color: blue[500],
    displayImage: build,
    path: '/develop/local',
    viewComponent: (DevelopLocal),
    previousPage: '/how/to/start',
    nextPage: '/go/to/production',
  },
  {
    title: 'How Do I go to Production?',
    exerpt:
      'The fundamental concepts that helped us develop locally can also be applied to most of our production, thanks to good strategy. ' +
      'Here we will learn how to get our production into AWS while drawing on our past knowledge to guide us along on the journey.',
    color: purple[500],
    displayImage: cloud,
    path: '/go/to/production',
    viewComponent: (GoToProd),
    previousPage: '/develop/local',
    nextPage: '/dolla/dolla/bill/yall',
  },
  {
    title: 'How much is Production?',
    exerpt: 'Money talks, the previous section discussed where we can optimize our costs when supporting a production environment. ' +
      'Here we recap how much costs can be expected to maintaining our production environment.',
    color: red[500],
    displayImage: dogecoin,
    path: '/dolla/dolla/bill/yall',
    viewComponent: (PayForProd),
    previousPage: '/go/to/production',
  },
];

export default topics;
