import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row bg-black py-8 my-8 lg:my-16 lg:py-16" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/aboutme.png" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0 text-white ">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="font-light text-[#D4D4D8] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I’m a Computer Science student at DePauw University, graduating in 2027. I’m passionate about software engineering because it lets me build things that help people—whether that’s building something innovative or just creating simple tools that make life easier.
        </p>

        <p className="font-light text-[#D4D4D8] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I enjoy learning by doing and love taking on new projects that push me beyond my comfort zone. Right now, I’m focused on expanding my skills in full-stack development and developing AI-powered applications.
        </p>

        <p className="font-light text-[#D4D4D8] text-sm/6 lg:text-base mt-3 lg:mt-5">
          When I’m not coding, you’ll often find me learning about criminal psychology, sketching in my notebook, or tending to plants—small things that help me unwind and recharge.
        </p>
      </motion.div>
    </div>
  );
}
