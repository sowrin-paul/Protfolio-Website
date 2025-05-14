import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    python,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    reacticon,
    codealpha,
    carrent,
    jobit,
    tripguide,
    threejs,
    pytorch,
    itransition
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
  ];
  
  const experiences = [
    {
      title: "Python App Developer",
      company_name: "CodeAlpha",
      icon: codealpha,
      iconBg: "#E6DEDD",
      date: "July 2024 - September 2024",
      points: [
        "Developing and maintaining applications using Python and other related technologies.",
        "Doing indivisual tasks in each month",
        "Implementing user-friendly design.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Developer",
      icon: reacticon,
      iconBg: "#383E56",
      date: "April 2024 - present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with teams including designers, and other team members to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Developer",
      icon: itransition,
      iconBg: "#383E56",
      date: "March 2025 - May 2025",
      points: [
        "Developing and maintaining a web applications using React.js, Node.Js, Express.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CareSerenity",
      description:
        "A web-based platform that allows users to search, adopt, and donate to Orphanages. Organizations that work for orphans can come under one roof and have enormous opportunities to share their work with normal people.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "djangorestapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/sowrin-paul/CareSerenity",
    },
    // {
    //   name: "PForm",
    //   description:
    //     "A web application where people can create their choice specific forms by choosing various templates, personalize the templates.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "node",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "tailwindcss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // },
    {
      name: "Scenerismo",
      description:
        "A comprehensive travel booking platform that allows users to book hotels, tickets for flights, and bus, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "php",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };