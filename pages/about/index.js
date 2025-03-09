import React, { useState } from "react";
import Link from "next/link";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiMongodb,
  SiFirebase,
  SiNestjs,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiSpacy,
  SiNumpy,
  SiPandas,
  SiNltk,
  SiMysql,
} from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import Head from "next/head";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          { icon: FaHtml5, name: "HTML5" },
          { icon: FaCss3, name: "CSS3" },
          { icon: FaJs, name: "JavaScript" },
          { icon: FaReact, name: "React" },
          { icon: SiNextdotjs, name: "Next.js" },
          { icon: SiFramer, name: "Framer" },
          { icon: FaWordpress, name: "Wordpress" },
        ],
      },
      {
        title: "Backend Development",
        icons: [
          { icon: FaNodeJs, name: "Node.js" },
          { icon: SiNestjs, name: "Nest.js" },
          { icon: SiMongodb, name: "MongoDB" },
          { icon: SiFirebase, name: "Firebase" },
          { icon: SiMysql, name: "MySQL" },
        ],
      },
      {
        title: "Machine Learning",
        icons: [
          { icon: FaPython, name: "Python" },
          { icon: SiTensorflow, name: "Tensorflow" },
          { icon: SiPytorch, name: "Pytorch" },
          { icon: SiScikitlearn, name: "Scikit-learn" },
          { icon: SiSpacy, name: "Spacy" },
          { icon: SiNumpy, name: "Numpy" },
          { icon: SiPandas, name: "Pandas" },
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          { icon: FaFigma, name: "Figma" },
          { icon: SiAdobexd, name: "Adobe XD" },
          { icon: SiAdobephotoshop, name: "Photoshop" },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "ISEAC 2025 Hackathon - Participant", stage: "Feb 26, 2025" },
    ],
  },
  {
    title: "certificates",
    info: [
      {
        title: "Git Started: Introduction to Git & GitHub",
        stage: "Feb 19, 2025",
      },
      {
        title: "Blockchain Basics: Into the Web3 Space",
        stage: "Dec 11, 2024",
      },
      {
        title: "DICT Programming for Beginners & Intermediate using Python",
        stage: "Nov 22, 2022",
      },
      {
        title: "JavaScript OOP: Mastering Modern Object-Oriented Programming",
        stage: "Mar 3, 2025",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title:
          "Bachelor of Science in Computer Science Specializing in Machine Learning",
        stage: "National University - Dasmarinas, Ongoing",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Head>
        <title>LulliDev | About</title>
        <meta
          name="description"
          content="LulliDev specializes in AI, Machine Learning, and Software Engineering."
        />
        <link rel="icon" href="/favicon1.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-teal-950/30 py-24 md:py-32 text-center xl:text-left relative overflow-hidden">
        {/* Background elements */}
        <Circles />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-teal-900/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-teal-900/10 to-transparent"></div>
        <div className="absolute -left-32 top-1/3 w-64 h-64 bg-teal-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -right-32 top-2/3 w-64 h-64 bg-teal-600/5 rounded-full blur-3xl"></div>

        {/* Avatar */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex absolute bottom-0 -left-[320px]"
        >
          <Avatar />
        </motion.div>

        <div className="container mx-auto h-full flex flex-col xl:flex-row gap-x-16 px-6 mt-16 md:mt-12 w-full justify-center lg:items-center">
          {/* Left Section */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left mb-5 xl:mb-0">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="inline-block mb-4 px-3 py-1 bg-teal-900/30 border border-teal-700/20 rounded-full text-teal-400 text-sm font-medium mt-10"
            >
              Software Developer & AI Specialist
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-5 tracking-tight"
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Hi, Im{" "}
              <span className="text-gradient bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                Andrew
              </span>
            </motion.h2>

            <motion.p
              className="max-w-[540px] text-gray-300 mx-auto md:mx-0 mb-2 text-base md:text-lg leading-relaxed"
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              I specialize in Web Development, Machine Learning, and
              Cybersecurity. I love coding, creating impactful projects, and
              continuously expanding my knowledge.
            </motion.p>

            {/* Counters */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-5"
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {[
                { label: "Years of Experience", value: 3 },
                { label: "Satisfied Clients", value: 50 },
                { label: "Finished Projects", value: 9 },
                { label: "Certificates", value: 4 },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-4 rounded-lg bg-gray-800/40 backdrop-blur-sm border border-gray-700/40"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gradient bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent mb-1">
                    <CountUp start={0} end={item.value} duration={3} />+
                  </div>
                  <div className="text-xs sm:text-sm uppercase tracking-wide leading-tight text-gray-400">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="md:flex gap-4 mb-2 mt-2 "
            >
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all"
              >
                Contact Me
              </Link>
              <a
                href="/files/Andrew_CV.pdf"
                download="Andrew_CV.pdf"
                className="px-6 py-3 border ml-2 border-teal-600/30 text-teal-400 font-medium rounded-lg hover:bg-teal-600/10 transition-all"
              >
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Right Section */}
          <motion.div
            className="flex flex-col w-full xl:max-w-[46%]"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {/* Tabs */}
            <div className="flex justify-center xl:justify-start gap-x-4 xl:gap-x-8 mb-1 relative -mt-1 sm:-mt-0">
              <div className="absolute h-[1px] w-full bottom-0 left-0 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
              {aboutData.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  onClick={() => setIndex(itemIndex)}
                  className={`cursor-pointer capitalize text-base xl:text-lg pb-3 px-1 relative transition-all duration-300 
                    ${
                      index === itemIndex
                        ? "text-teal-400 font-medium"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                >
                  {item.title}
                  {index === itemIndex && (
                    <motion.div
                      layoutId="activetab"
                      className="absolute h-[2px] w-full bottom-0 left-0 bg-teal-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="py-8 px-6 bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/40 h-[450px] overflow-auto 
             lg:h-[600px] lg:py-10 lg:px-10 mb-10" // Add size increases for large screens
            >
              {aboutData[index].info.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`mb-8 ${
                    itemIndex !== 0 ? "pt-6 border-t border-gray-700/40" : ""
                  }`}
                >
                  <h3 className="text-xl font-semibold text-white mb-3 lg:text-2xl">
                    {" "}
                    {/* Larger text on large screens */}
                    {item.title}
                  </h3>
                  {item.stage && (
                    <div className="flex items-center mb-4">
                      <div className="h-4 w-4 rounded-full bg-teal-500 mr-2"></div>
                      <p className="text-sm text-teal-300 font-medium lg:text-base">
                        {item.stage}
                      </p>
                    </div>
                  )}
                  {item.icons && (
                    <div className="flex flex-wrap gap-5 mt-4 lg:gap-6">
                      {" "}
                      {/* Larger gap on large screens */}
                      {item.icons.map(({ icon: Icon, name }, i) => (
                        <div
                          key={i}
                          className="relative group flex flex-col items-center"
                        >
                          <div className="p-3 bg-gray-800/60 rounded-lg border border-gray-700/40 transition-all duration-300 group-hover:border-teal-500/50 group-hover:bg-gray-800/90">
                            <Icon className="text-2xl text-teal-400 lg:text-3xl" />
                          </div>
                          <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 group-hover:-bottom-6 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded transition-all duration-300 whitespace-nowrap z-50">
                            {name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>
    </>
  );
};

export default About;
