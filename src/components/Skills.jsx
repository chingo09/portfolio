import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 2, name: "React", icon: <FaReact size={50} /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 4, name: "Python", icon: <FaPython size={50} /> },
    { id: 5, name: "MongoDB", icon: <FaDatabase size={50} /> },
    { id: 6, name: "Java", icon: <FaJava size={50} /> },
    { id: 7, name: "PostgreSQL", icon: <BiLogoPostgresql size={50} /> },
    { id: 8, name: "Next.js", icon: <RiNextjsFill size={50} /> },
    { id: 9, name: "Tailwind CSS", icon: <RiTailwindCssFill size={50} /> },
    { id: 10, name: "Figma", icon: <CgFigma size={50} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Google",
      role: "Lead Software Engineer",
      period: "Nov 2019 - Present",
      description:
        "Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience.",
      logo: "/assets/google.svg",
    },
    {
      id: 2,
      company: "YouTube",
      role: "Software Engineer",
      period: "Jan 2017 - Oct 2019",
      description:
        "Focused on backend systems for large-scale data processing and user engagement features, ensuring seamless functionality and scalability.",
      logo: "/assets/youtube.svg",
    },
  ]);

  const [education] = useState([
    {
      id: 1,
      school: "DePauw University",
      period: "August 2023 - May 2027",
      gpa: "4.0/4.0",
      degree: "Bachelor of Arts in Computer Science",
      relevantcourse: "Data Structures and Algorithms, Web Development, Computer System, Object Oriented Programming (OOP), Artificial Intelligence, Linear Algebra"
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">

      {/*Skills Section*/}

      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border-2 border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-7" src={exp.logo} alt={`${exp.company} logo`} />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-white w-full">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-black"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Education</span>
        </motion.h2>

        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="bg-white p-5 border-2 border-black rounded-md hover:bg-[#27272A] hover:text-white transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center ">
                <div className="flex items-center gap-5">
                  <h2 className="font-semibold text-#71717A text-lg lg:text-xl ">
                    {edu.school}
                  </h2>
                </div>
                <span className="text-#71717A font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {edu.period}
                </span>
              </div>
              <div className="mt-2 flex flex-col gap-1">
                <p className="text-#71717A text-sm/6 lg:text-base font-light">
                  GPA: {edu.gpa}
                  </p>
                  <p className="text-#71717A text-sm/6 lg:text-base font-light">
                  Degree: {edu.degree}
                  </p>
              </div>
              <p className="text-#71717A mt-6 text-sm/6 lg:text-base">
                Coursework: {edu.relevantcourse}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
