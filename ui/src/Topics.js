import Question from './images/Question.svg';
import presentation from './images/presentation.svg';
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
    displayImage: dogecoin,
    path: '/dolla/dolla/bill/yall',
    viewComponent: (PayForProd),
    previousPage: '/go/to/production',
  },
  {
    title: 'Do you like sides?',
    exerpt: 'Presentations are great, they can condense most of what you want to say in just a few slides.' +
      'You will be able to find all of the topics above in a convenient slide show format.',
    displayImage: presentation,
    buttonText: 'View Slides',
    href: 'https://frugal-aws.acari.io/presentation',
    viewComponent: (PayForProd),
  },
];

export default topics;
