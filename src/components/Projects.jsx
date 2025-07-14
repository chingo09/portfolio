import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Putco - Discover what’s nearby in seconds",
    description: "Putco is a web platform for visitors and residents to discover local shops, services, and places in Putnam County using smart search and interactive maps. It also connects users through the PutMedia community, where they can share and explore local experiences.",
    techstack: "Built with React.js, Node.js, MongoDB geospatial queries, Google Places API, Cloudinary, Vite, and Redis caching.",
    image: "/assets/Putco.png",
    link: "https://github.com/chingo09/Putco"
  },
  {
    id: 2,
    title: "FinSavvy - Track it. Save it. Relax. Budgeting made easy",
    description: "FinSavvy is a personal finance platform that helps users track spending, plan savings, and get smart budgeting tips powered by GPT and real-time banking data through Plaid.",
    techstack: "Built with React.js, Chart.js, Node.js, MongoDB, Plaid API and OpenAI API. Automated deployments with Docker and GitHub Actions, hosted on AWS EC2",
    image: "/assets/project1.png",
    link: "https://github.com/PhuocOng/FinSavvy"
  },
  {
    id: 3,
    title: "GoldandGo - No more group chats—just a few clicks to ride together",
    description: "Gold and Go is a campus ride-sharing platform for DePauw students, making it easy to find rides, offer seats, and coordinate trips through matching system, real-time messaging and interactive maps.",
    techstack: "Built with React.js, Node.js, Express, PostgreSQL (PostGIS), Socket.io, Redis, and Firebase Cloud Messaging. Automated deployments with Docker and GitHub Actions, hosted on Heroku.",
    image: "/assets/project1.png",
    link: "https://github.com/chingo09/GoldandGo"
  },
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="text-sm/6 lg:text-base text-[#D4D4D8]">
                {project.description}
              </p>
              <p className="font-light text-sm/6 lg:text-base text-[#D4D4D8]">
                {project.techstack}
              </p>
              <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
