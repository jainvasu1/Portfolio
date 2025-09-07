import self from "../img/self.jpeg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"
import mock7 from "../img/mock7.png"
import mock8 from "../img/mock8.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Vasudha",
    lastName: "Jain",
    initials: "VJ", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Final Year Student",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '📍',
            text: 'based in Gurugram'
        },
        {
            emoji: "💼",
            text: "Computer Science Intern at Celebal Technologie"
        },
        {
            emoji: "📧",
            text: "vasubajaj2001@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/_jainvasu?igsh=MW5jY3czZzY3Z2tzZw==",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/jainvasu1",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/vasudha-jain-50881b263/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

    ],
    bio: "Bonjour! I’m Vasudha Jain 👋,final-year Computer Science student with a strong interest in building scalable, impactful systems. I enjoy exploring new technologies, solving real-world problems through code, and continuously learning to grow as a developer.Outside of academics, I love exploring the latest in tech, taking mindful walks to recharge, and reflecting on how AI is reshaping our world—equal parts exciting, challenging, and full of possibilities.I’m always eager to collaborate on AI-driven projects, research opportunities, and bold ideas that push the boundaries of innovation—let’s connect and create something extraordinary! 🚀",
    skills:
    {
        proficientWith: ['C++', 'javascript', 'HTML5', 'CSS3', 'react', 'node', 'git', 'github','Mysql', 'mongoDB', 'Agile'],
        exposedTo: ['DSA', 'OOPS', 'DBMS']
    }
    ,
    hobbies: [
        {
            label: 'Photography',
            emoji: '📸'
        },
        {
            label: 'Listening to Music',
            emoji: '🎶'
        },
        {
            label: 'Travelling',
            emoji: '✈️'
        }
    ],
    projects: [
        {
            title: "Validation Form",
           // live: "https://domain-search-49l5.onrender.com/",
            source: "https://github.com/jainvasu1/Forms-and-Form-Validation",
            image: mock1
        },
        {
            title: "Profile Card",
            //live: "https://iscon-2k23.netlify.app/",
            source: "https://github.com/jainvasu1/Profile-Card",
            image: mock7
        },
        {
            title: "Spotify Clone",
            //live: "https://synk-rev.vercel.app/",
            source: "https://github.com/jainvasu1/Spotify-clone1",
            image: mock8
        },
        {
            title: "TO Do List-React",
            //live: "https://dlftest.netlify.app/",
            source: "https://github.com/jainvasu1/Todolist-App-React.js",
            image: mock2
        },
        
    ]
}