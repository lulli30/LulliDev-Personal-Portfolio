// Components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import Head from "next/head";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <>
      <Head>
        <title>LulliDev | Work</title>
        <meta
          name="description"
          content="LulliDev specializes in AI, Machine Learning, and Software Engineering."
        />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <div className="relative min-h-screen h-full w-full overflow-hidden bg-gradient-to-b from-gray-950 to-teal-950/30 pt-40 md:pt-52 xl:pt-60 pb-20 md:pb-28 xl:pb-36">
        <Circles />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col xl:flex-row items-center xl:items-start gap-x-16">
            {/* Text Section */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center xl:text-left xl:w-[35%] xl:sticky xl:top-12 xl:self-start mb-12 xl:mb-16"
            >
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                className="inline-block mb-4 px-3 py-1 bg-teal-900/30 border border-teal-700/20 rounded-full text-teal-400 text-sm font-medium"
              >
                Portfolio
              </motion.div>

              <h2 className="text-5xl font-bold mb-2 tracking-tight">
                My{" "}
                <span className="text-gradient bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                  Work
                </span>
              </h2>

              <p className="text-gray-300 text-lg mb-10 max-w-[350px] mx-auto xl:mx-0 leading-relaxed">
                Explore my portfolio of projects showcasing expertise in web
                development, AI solutions, and full-stack applications. Each
                project represents my commitment to creating impactful digital
                solutions.
              </p>

              <div className="hidden xl:block">
                <div className="flex flex-col gap-6 mt-12 border-l-2 border-teal-700/30 pl-6">
                  <div className="flex flex-col">
                    <span className="text-teal-400 font-medium text-xl mb-1">
                      Expertise
                    </span>
                    <span className="text-gray-300">
                      Full-Stack Development, AI/ML, Web Applications
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-teal-400 font-medium text-xl mb-1">
                      Focus
                    </span>
                    <span className="text-gray-300">
                      Building scalable and efficient solutions
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-teal-400 font-medium text-xl mb-1">
                      Tech Stack
                    </span>
                    <span className="text-gray-300">
                      React, Node.js, Python, MySQL, TensorFlow
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Slider Section */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full max-w-[300px] sm:max-w-full xl:w-[65%] -mt-16 md:-mt-12 xl:mt-0 mx-auto sm:mx-0 mb-12 xl:mb-16"
            >
              <div className="relative overflow-hidden">
                <div className="bg-gradient-to-r from-gray-900/80 to-teal-900/20 backdrop-blur-sm rounded-2xl p-3 md:p-5 border border-gray-800/50 shadow-xl">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-medium text-teal-100">
                      Featured Projects
                    </h3>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 text-xs font-medium text-teal-300 bg-teal-900/50 rounded-full border border-teal-700/30">
                        Web Apps
                      </span>
                      <span className="px-2 py-1 text-xs font-medium text-teal-300 bg-teal-900/50 rounded-full border border-teal-700/30">
                        AI/ML
                      </span>
                      <span className="px-2 py-1 text-xs font-medium text-teal-300 bg-teal-900/50 rounded-full border border-teal-700/30">
                        Portfolio
                      </span>
                      <span className="px-2 py-1 text-xs font-medium text-teal-300 bg-teal-900/50 rounded-full border border-teal-700/30">
                        Games
                      </span>
                      <span className="px-2 py-1 text-xs font-medium text-teal-300 bg-teal-900/50 rounded-full border border-teal-700/30">
                        Python
                      </span>
                    </div>
                  </div>

                  {/* Ensuring No Extra Space */}
                  <div className="h-auto !overflow-hidden">
                    <WorkSlider />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-teal-900/20 to-transparent"></div>
        <Bulb />
      </div>

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

export default Work;
