/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/loadingGraph"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tanmay Kenjale",
  title: "Hi, I'm Tanmay",
  subTitle: emoji(
    "An aspiring Data Scientist with a background in Software Engineering and Statistics and a current student in Georgia Tech's MS Analytics program! 🐝"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1UfWDtO5cD6W_xQZ-4L26TgIOgnXE3y6D/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tkenjale",
  linkedin: "https://www.linkedin.com/in/tanmaykenjale/",
  gmail: "tkenjale3@gatech.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About Me",
  subTitle: "Passionate about Data Science, Machine Learning, and their Business Applications",
  skills: [
    emoji(
      "🔸 Collect, transform, and preprocess data with SQL, Python, Pandas, and Numpy"
    ),
    emoji("🔸 Visualize data with Python and R libraries"),
    emoji(
      "🔸 Develop machine learning models and conduct model selection with Scikit-Learn to solve business problems"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "PySpark",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gtLogo2.png"),
      subHeader: "Master of Science in Analytics",
      duration: "Aug 2022 - Dec 2023",
      desc: "Taking courses in Machine Learning, Natural Language Processing, Analytics, and Business."
    },
    {
      schoolName: "University of North Carolina at Charlotte",
      logo: require("./assets/images/unccLogo.png"),
      subHeader: "Bachelor of Science in Computer Science and Statistics",
      duration: "Aug 2018 - May 2022",
      desc: "Conducted research in Dimensionality Reduction. Took courses in Software Engineering, Data Science, and Statistics.",
      descBullets: ["Graduated as a Crown Scholar with Dual Honors"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Pandas / Numpy / Scikit-Learn", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL",
      progressPercentage: "85%"
    },
    {
      Stack: "Machine Learning and Statistics",
      progressPercentage: "85%"
    },
    {
      Stack: "AWS / Spark / Big Data Analysis",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Teaching Assistant",
      company: "Georgia Tech",
      companylogo: require("./assets/images/gtLogo2.png"),
      date: "Aug 2022 – Present",
      desc: "I am a teaching assistant for CSE 6040: Computing for Data Analysis, an introductory graduate course in data analysis with Python and SQL.",
      descBullets: [
        "Answer student questions and help debug their code",
        "Host office hours to go over class content and homeworks"
      ]
    },
    {
      role: "API Developer/Data Science Intern",
      company: "Syneos Health",
      companylogo: require("./assets/images/syneosLogo.png"),
      date: "May 2021 – Aug 2021",
      desc: "A clinical research organization that helps companies with managing and operating clinical trials.",
      descBullets: [
        "Created interactive tables with SQL to help trials manage their own administrative data",
        "Created a real-time clinical data monitoring dashboard for customers with ggplot and R Shiny",
        "Preprocessed unstructured text datasets with Python to extract clinical keywords"
      ]
    },
    {
      role: "Undergraduate Researcher",
      company: "UNC Charlotte",
      companylogo: require("./assets/images/unccLogo.png"),
      date: "Jan 2021 – Apr 2022",
      desc: "Researched dimension reduction techniques to experimentally determine which technique should be used in different applications.",      
      descBullets: [
        "Created thesis and poster presented at UNCC's Undergraduate Research Conference",
        "Created a Jupyter Notebook that intuitively explains Sliced Inverse Regression through simulation and visualization (see SIR-vs-PCA below)"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "",
  achievementsCards: [
    {
      title: "AWS Certified Developer - Associate",
      subtitle:
        "Certified in key development tools and cloud architecture in AWS.",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credly.com/badges/9dba9f4e-b92b-44e0-a8dc-f6aec30a7306/public_url"
        }
      ]
    },
    {
      title: "UNCC Undergraduate Research Conference",
      subtitle: "Presented my year-long Math Honors Thesis project at a conference.",
      image: require("./assets/images/urcLogo.png"),
      imageAlt: "URC Logo",
      footerLink: [
        {
          name: "Thesis", 
          url: "https://drive.google.com/file/d/107P9ChXLFUXnzkx-he915Mw7gGN6SYzg/view?usp=sharing"
        },
        {
          name: "Poster",
          url: "https://drive.google.com/file/d/1HrE9A3MMTF8qLpF8dhm2qiYSXBHeppm1/view?usp=sharing"
        }
      ]
    },
    {
      title: "Crown Scholar / Dual Honors",
      subtitle: "Awarded a full-ride scholarship at UNCC for outstanding merit and passion for research. Graduated with University Honors and Math Honors and a 4.0 GPA.",
      image: require("./assets/images/unccLogo.png"),
      imageAlt: "UNCC Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-9194345817",
  email_address: "tkenjale3@gatech.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
