import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "mingyeolee",
    lastName: "",
    initials: "mingyeolee", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Creator",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '',
            text: 'Writer'
        },
        {
            emoji: '',
            text: 'OJI-SAN'
        },
        {
            emoji: '',
            text: 'Based in KOREA'
        },
        {
            link: "mailto:mingyeoleekr@gmail.com",
            emoji: '',
            text: 'E-mail: Touch This!'
        }
    ],
    socials: [
        {
            link: "https://mingyeolee.com",
            icon: 'fa fa-home',
            label: 'homepage'
        },
        {
            link: "https://mingyeolee.postype.com/",
            icon: "fa fa-book",
            label: 'postype'
        },
        {
            link: "https://twitter.com/mingyeolee",
            icon: "fa fa-twitter",
            label: 'twitter'
        },
        {
            link: "https://www.youtube.com/channel/UC96m7ts6LCfD7ze1HogGB8A",
            icon: 'fa fa-youtube',
            label: 'youtube'
        },
        {
            link: "https://www.twitch.tv/mingyeolee",
            icon: 'fa fa-twitch',
            label: 'twitch'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "The origin of 'mingyeolee' name: That's right. People like me are difficult. I know that I'm broken. But I'd still like it If you didn't give up on me. If I can only be fixed, I will be truly beautiful, So please don't abandon me. (NELL - Separation Anxiety)",
    skills:
        {
            proficientWith: ['Blogging', 'Writing', 'Writing lyrics'],
            exposedTo: ['Streaming', 'Youtube', 'Games', 'Talking', 'Dancing', 'Singing']
        }
    ,
    hobbies: [
        {
            label: 'Blogging',
            emoji: ''
        },
        {
            label: 'Writing',
            emoji: ''
        },
        {
            label: 'Music',
            emoji: ''
        },
        {
            label: 'Security Analysis',
            emoji: ''
        },
        {
            label: 'Stock Investing',
            emoji: ''
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
    {
        title: "Cosmos Sound - Twenty (Lyrics)",
        live: "https://www.youtube.com/watch?v=UU6xV8fhsyo", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
        image: mock1
    },
    {
        title: "zziritchan - VRChat (Lyrics)",
        live: "https://www.youtube.com/watch?v=bDau2SBzsq8",
        image: mock2
    },
    {
        title: "TASTE TEST",
        live: "https://mingyeolee.postype.com/post/12546109",
        image: mock3
    },
    {
        title: "Like",
        live: "https://mingyeolee.postype.com/post/14510509",
        image: mock4
    }
    ]
}