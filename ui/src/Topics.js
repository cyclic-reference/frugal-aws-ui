import lambda from './images/lambda.svg';
import purple from "@material-ui/core/es/colors/purple";
import blue from "@material-ui/core/es/colors/blue";
import green from "@material-ui/core/es/colors/green";
import red from "@material-ui/core/es/colors/red";
import hystrix from './images/hystrix.png';
import GreenFlag from './images/GreenFlag.svg'
import cloud from './images/cloud.svg'
import A from './images/A.svg';

const topics = [
  {
    title: 'What is Production?',
    exerpt: 'This section will explain the positive traits that are exhibited by well established production environments.',
    color: purple[500],
    displayImage: lambda,
    path: '/production',
  },
  {
    title: 'Where do I start?',
    exerpt:
      'You now have a good fundamental understanding of what a "good" production environment looks like. The next step in your journey is laying out a strategy and figuring out starting place to begin your trip.',
    color: green[500],
    displayImage: GreenFlag,
    path: '/production',
  },
  {
    title: 'How do I develop locally?',
    exerpt:
      'Theory and practice are two separate thing in my mind. Just knowing what needs to happen is half of the battle. ' +
      'This section is devoted in showing how to start putting these block together.',
    color: blue[500],
    displayImage: hystrix,
    path: '/production',
  },
  {
    title: 'How Do I go to Production?',
    exerpt:
      'Thanks to good strategy, the fundamental concepts that helped us develop locally can also be applied to most of our production. ' +
      'Here we will learn how to get our production into AWS while drawing on our past knowledge to guide us along.',
    color: purple[500],
    displayImage: cloud,
    path: '/production',
  },
  {
    title: 'How much is Production?',
    exerpt:'Money talks, throughout the previous section we discussed where we can optimize our costs while deploying to production. ' +
      'Here we recap what can be expected to pay while maintaining our production environment.',
    color: red[500],
    displayImage: A,
    path: '/production',
  },
];

export default topics;
