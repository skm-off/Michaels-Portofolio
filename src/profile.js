// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Michael",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "Currently residing in Duesseldorf Germany, I have developed my career mainly in the United Kingdom, where I worked as a Data Manager followed by being a Software Engineer, which gives me a full understanding of Full Stack Development.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  // {
  //   name: "CSS3",
  //   // svg: '',
  //   faClass: "fab fa-css3",
  // },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  // {
  //   name: "SASS",
  //   // svg: '',
  //   faClass: "fab fa-sass",
  // },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  // {
  //   name: "Python",
  //   // svg: '',
  //   faClass: "fab fa-python",
  // },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "PHP",
    // svg: '',
    faClass: "fab fa-php",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects & Experience";
const projects = [
  {
    id: "project1",
    name: "BWT Best Water Home (Google Play)",
    skills: ["React, TypeScript, JavaScript"],
    url: "https://play.google.com/store/apps/details?id=com.bwt.athomeapp&pcampaignid=web_share",
  },
  {
    id: "project2",
    name: "BWT Pearl Connect (Google Play)",
    skills: ["React, TypeScript, C++"],
    url: "https://play.google.com/store/apps/details?id=com.procopi.bwtpearlconnect&pcampaignid=web_share",
  },
  {
    id: "project3",
    name: "Eventr (IOS + Android)",
    skills: ["React, TypeScript, JavaScript"],
    url: "https://eventr.bwtsoftpauer.com",
  },
  {
    id: "project4",
    name: "BWT Best Water Home (Apple Store)",
    skills: ["React, TypeScript, JavaScript"],
    url: "https://apps.apple.com/at/app/bwt-best-water-home/id1317692659",
  },
  {
    id: "project5",
    name: "BWT Pearl Connect (Apple Store)",
    skills: ["React, TypeScript, C++"],
    url: "https://apps.apple.com/at/app/bwt-pearl-connect/id1597937813",
  },
  {
    id: "project6",
    name: "Vitalograph",
    skills: ["MySQL, Microsoft SQL Server "],
    url: "https://vitalograph.com",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "GitHub - Personal Projects";
const miscellaneous = [
  {
    id: "misc1",
    name: "This Website",
    url: "https://github.com/skm-off/Michaels-Portofolio",
  },
  {
    id: "misc2",
    name: "UE Project (In Progress)",
    url: "https://github.com/skm-off",
  },
  {
    id: "misc3",
    name: "/ Future Project /",
    url: "https://cdn.pixabay.com/photo/2017/10/26/17/51/under-construction-2891888_1280.jpg",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you have the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  subtitles1:
    "Thank you for reading !",

  subtitles2:
  "If you are interested to contact me, either send me a message here or click one of my profiles below",
  copyright: "Michael Schenk",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/michael-schenk-a8209858/",
  resume: "https://mega.nz/file/ZOAjAK6R#1jqZrZwijusYFWLaExo_XsGwoEm1fC6GYgoa73K977s",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
