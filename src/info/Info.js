import self from "../img/self.jpeg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock7 from "../img/mock7.png"
import mock8 from "../img/mock8.png"
import bg1 from "../img/bg1.jpg"   // 👈 added your bg1 image

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
    initials: "VJ", 
    position: "a Final Year Student",
    selfPortrait: self,
    backgroundImage: bg1,   // 👈 added here for background usage
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text:'fueled by coffee'
        },
        {
            emoji: '🌎',
            text:'based in Gurugram'
        },
        {
            emoji: "💼",
            text:"Computer Science Intern at Celebal Technologie"
        },
        {
            emoji: "📧",
            text:"vasubajaj2001@gmail.com"
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
    bio: "Bonjour! ""I’m Vasudha Jain, a final-year Computer Science student passionate about building scalable systems and solving real-world problems through code 💻. I love exploring new tech 🔍, learning constantly 📚, and reflecting on AI’s impact 🤖. Outside studies, I enjoy mindful walks 🌿 and staying updated on tech trends 🌐. Excited to collaborate on AI projects and innovative ideas — let’s connect! 🚀",
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
            source: "https://github.com/jainvasu1/Forms-and-Form-Validation",
            image: mock1
        },
        {
            title: "Profile Card",
            source: "https://github.com/jainvasu1/Profile-Card",
            image: mock7
        },
        {
            title: "Spotify Clone",
            source: "https://github.com/jainvasu1/Spotify-clone1",
            image: mock8
        },
        {
            title: "TO Do List-React",
            source: "https://github.com/jainvasu1/Todolist-App-React.js",
            image: mock2
        },
    ]
}
