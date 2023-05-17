import silkenskin from '../../public/featured-img-silken-skin.png'
import tictactoe from '../../public/tictactoe.gif'
import webdevlpr from '../../public/webdevlpr.png'
import comingSoon from '../../public/coming-soon.gif';

import {StaticImageData} from "next/image";

export type ProjectsData = {
  title: string;
  description: string;
  techList: string[];
  thumbnail: StaticImageData;
  githubURL?: string;
  liveURL?: string;
}

const projectsData = [
  {
    title: "Silken Skin Co",
    description:
      "Silken Skin Co Store is an ecommerce website that sells skincare products. The main goal is to provide a convenient and easy-to-use platform for customers to buy their favorite skincare products from the comfort of their own home.",
    techList: [
      "React",
      "TypeScript",
      "Redux",
      "Stripe",
      "Firestore",
      "Firebase Auth",
      "Vite",
    ],
    thumbnail: silkenskin,
    githubURL: "https://github.com/marijanasevo/silkenskin",
    liveURL: "https://silken-skin.netlify.app/"
  },
  {
    title: "webdevlpr",
    description:
      '"Webdevlpr" is a blog about web development. As the internet is' +
      ' accessible to many, its potential for conveying ideas, solving' +
      ' problems, and expressing oneself is virtually endless. I created' +
      ' this blog as a platform to share my excitement and knowledge.',
    techList: [
      "11ty",
      "Nunjucks",
      "JavaScript",
    ],
    thumbnail: webdevlpr,
    liveURL: "https://webdevlpr.com/"
  },
  {
    title: "Unbeatable game",
    description:
      "This project is a game that allows users to play against the computer or another person. The computer is programmed to be strategic and proactive in blocking the user's moves, making the game more challenging and exciting. Do you think you have what it takes to win?",
    techList: [
      "JavaScript",
      "OOP",
      "WebPack",
      "Sass",
    ],
    thumbnail: tictactoe,
    githubURL: "https://github.com/marijanasevo/Tic-Tac-Toe-game",
    liveURL: "https://brilliant-granita-ac585f.netlify.app/"
  },
  {
    title: "Doza Zdravlja",
    description:
      "This website is a comprehensive health resource dedicated to" +
      " providing information on common health concerns. It covers topics" +
      " related to physical and mental health, as well as lifestyle factors that impact overall well-being.",
    techList: [
      "Next.js",
    ],
    thumbnail: comingSoon,
  }
];

export default projectsData;