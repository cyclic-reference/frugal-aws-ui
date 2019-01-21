import lambda from './images/lambda.svg';
import reach_blue from "./images/reach_blue.svg";
import reach_green from "./images/reach_green.svg";
import reach_purple from "./images/reach_purple.svg";
import reach_red from "./images/reach_red.svg";
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
    reach: reach_purple,
    color: purple[500],
    displayImage: lambda,
    link: {
      href: 'http://learn.acari.io',
      linkText: 'Visit the Site',
    },
    descriptions: [
      'Sometimes words are not enough to convey a concept. However, they say that a picture is worth a thousand words.  So then just maybe words are satisfactory!',
      'Anyways, this is a project that combines word and moving images to help explain functional and declarative programming paradigms as well as many other things!'
    ],
  },
  {
    title: 'Where do I start?',
    exerpt:
      'Applications today need to be able to respond in the face of adverse conditions. The circuit breaker pattern is a great place to start.',
    reach: reach_blue,
    color: blue[500],
    displayImage: hystrix,
    link: {
      href: 'https://hystrix.acari.io',
      linkText: 'Visit the Site',
    },
    descriptions: [
      'Much like the actual devices embedded into residential, commercial, and industrial structures.The latter is designed to prevent a massive surge of electricity from flowing through your circuits. While the former prevents your application from trying to execute commands that are going to fail or take a really long time to respond. It is better to fail fast respond with something, than to never respond at all!',
      "Both are employed to protect the user and in the end that is the part that counts.",
      "This project was designed to highlight a portion of Hystrix's (Netflix's circuit breaker) features. It makes use of the real time metric analysis  that is fed to the dashboard. The data is generated (successfully or unsuccessfully) by a constant stream of command invocations controlled by you!",
      "Lastly, it took me way too long to realize that the Hystrix mascot is a porcupine.",
    ],
  },
  {
    title: 'How do I start?',
    exerpt:
      'Who does not like doing more with less? Especially when you have to pay for AWS EC2 usage hours!',
    reach: reach_green,
    color: green[500],
    displayImage: vertx,
    link: {
      href: 'https://wiki.acari.io',
      linkText: 'Visit the Site',
    },
    descriptions: [
      'This project was about utilizing the asyncronous event driven framework Vertx. It started life as the introduction project on the Vertx documentation page, but then evolved into a little bit more!',
      'The big plus about the asynchronous, event driven (reactive) paradigm, is that you need minimal threads to do any work. Just one thread can chug through the event loop and accomplish so much, without blocking. This works great in tandem with reactive supporting databases such as MongoDB. Meaning that more of the CPU is being utilized, and less threads an working memory has to be used.',
      'Which means that I can get away with a Micro EC2 instance!',
  ],
  },
  {
    title: 'How Do I go tor Production?',
    exerpt:
      'There are a lot of problems that exist and cannot be solved by a simple google search alone!',
    reach: reach_purple,
    color: purple[500],
    displayImage: pen,
    link: {
      href: 'http://blog.acari.io',
      linkText: 'Visit the Blog',
    },
    descriptions: [
      'Which can be annoying at times! I mean someone somewhere has to have had the same problem as I have, right?',
      'Not only is this a knoweldge dump, it is also a continuous exercise in effective written communication. Words are really important, it is up to all of us to be able to communicate clearly with each other! It can be beyond frustrating to not be not able to convey your point. So this is part of the never ending effort to sharpen these skills.',
      'Also, I get to do a bit of programming as well. Which is the nice thing about using the Jekyll blog framework.'
    ],
  },
  {
    title: 'How much is Production?',
    exerpt:'I am always learning, whether it is about a new tool, framework, paradigm or something else exciting. ',
    reach: reach_red,
    color: red[500],
    displayImage: A,
    link: {
      href: 'http://blog.acari.io',
      linkText: 'Visit the Blog',
      hideButton: true,
    },
    descriptions: [
      'If you are reading this, then you are already checking this project out. ',
      'I needed a way to showcase all of the topics that spawn from my explorations.',
      'Fun fact, all of my logos at the bottom of each project all lead to this site!',
    ],
  },
]

export default topics;
