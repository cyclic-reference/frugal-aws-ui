import lambda from './images/lambda.svg';
import purple from "@material-ui/core/es/colors/purple";
import blue from "@material-ui/core/es/colors/blue";
import green from "@material-ui/core/es/colors/green";
import red from "@material-ui/core/es/colors/red";
import hystrix from './images/hystrix.png';
import vertx from './images/Vert.x_Logo.svg'
import pen from './images/pen.svg'
import A from './images/A.svg';

const topics = [
  {
    title: 'What is Production?',
    exerpt: 'Are you curious about functional programming? If so this is a great place to start your declarative journey!',
    color: purple[500],
    displayImage: lambda,
    path: '/production',
  },
  {
    title: 'Where do I start?',
    exerpt:
      'Applications today need to be able to respond in the face of adverse conditions. The circuit breaker pattern is a great place to start.',
    color: blue[500],
    displayImage: hystrix,
    path: '/production',
  },
  {
    title: 'How do I start?',
    exerpt:
      'Who does not like doing more with less? Especially when you have to pay for AWS EC2 usage hours!',
    color: green[500],
    displayImage: vertx,
    path: '/production',
  },
  {
    title: 'How Do I go to Production?',
    exerpt:
      'There are a lot of problems that exist and cannot be solved by a simple google search alone!',
    color: purple[500],
    displayImage: pen,
    path: '/production',
  },
  {
    title: 'How much is Production?',
    exerpt:'I am always learning, whether it is about a new tool, framework, paradigm or something else exciting. ',
    color: red[500],
    displayImage: A,
    path: '/production',
  },
]

export default topics;
