import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { Typewriter } from "react-simple-typewriter";
import Head from "next/head";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <>
      <Head>
        <title>LulliDev | Home</title>
        <meta
          name="description"
          content="LulliDev specializes in AI, Machine Learning, and Software Engineering."
        />
        <link rel="icon" href="/favicon1.ico" />
        <link rel="preload" as="image" href="/favicon1.ico" />
      </Head>

      <div className="relative h-full bg-gradient-to-b from-gray-950 to-teal-950/30 overflow-hidden">
        {/* Particles background container */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <ParticlesContainer />
        </div>

        {/* Background explosion effect */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute right-0 bottom-0 z-10 w-[60vw] h-full"
        >
          <div
            className="bg-explosion bg-contain bg-right bg-no-repeat absolute mix-blend-color-dodge hidden lg:block transition-all duration-1000 ease-in-out"
            style={{
              width: "150%",
              height: "100vh",
              bottom: "-10%",
              left: "-35%",
              opacity: 0.14,
            }}
          ></div>
        </motion.div>
        <div className="relative min-h-screen bg-gradient-to-b from-gray-950 to-teal-950/30 overflow-hidden">
          {/* Main Content */}
          <div className="w-full min-h-screen bg-gradient-to-r from-primary/70 via-black/40 to-black/10 relative z-20 flex items-center">
            <div className="container mx-auto flex flex-col justify-center text-center xl:text-left px-6">
              {/* Title & Typewriter */}
              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden xl:flex"
                className="flex flex-col items-center xl:items-start"
              >
                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight mb-1">
                  Lulli<span className="text-teal-500">Dev</span>
                </h1>

                {/* Typewriter Effect */}
                <p className="text-lg md:text-2xl font-medium text-gray-300 mt-1 xl:mt-0 mb-8">
                  <Typewriter
                    words={[
                      "Machine Learning Engineer",
                      "AI Developer",
                      "Software Engineer",
                      "Video Editor",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </p>

                {/* CTA Button */}
                <motion.div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <ProjectBtn />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Avatar Image */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute w-full max-w-[900px] max-h-[900px] -bottom-24 lg:bottom-0 lg:right-[5%] z-20"
        >
          <Avatar />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
