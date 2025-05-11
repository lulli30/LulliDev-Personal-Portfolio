// Components
import ServicesSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import Head from "next/head";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useEffect, useState } from "react";

const Services = () => {
  // Track viewport size
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    // Initial check
    checkScreenSize();

    // Listen for resize events
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <Head>
        <title>LulliDev | Services</title>
        <meta
          name="description"
          content="LulliDev specializes in AI, Machine Learning, and Software Engineering."
        />
        <link rel="icon" href="/favicon1.ico" />
      </Head>

      <section
        className={`relative min-h-screen bg-primary-30 py-16 md:py-24 xl:py-32 flex items-center bg-gradient-to-b from-gray-950 to-teal-950/30 ${
          isLargeScreen ? "overflow-hidden" : ""
        }`}
      >
        {/* Decorative Elements */}
        <Circles />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/10 to-transparent" />

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div
            className={`flex flex-col xl:flex-row gap-8 xl:gap-12 ${
              isLargeScreen ? "items-center" : ""
            }`}
          >
            {/* Text Section */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className={`text-center xl:text-left ${
                isLargeScreen ? "xl:w-[35%] 2xl:w-[30%]" : "xl:w-[40%]"
              }`}
            >
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                className="inline-block mb-4 px-3 py-1 bg-teal-900/30 border border-teal-700/20 rounded-full text-teal-400 text-sm font-medium"
              >
                What I Offer
              </motion.div>

              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white relative mt-4">
                My Services
                <span className="text-gradient bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent">
                  .
                </span>
                <motion.div
                  className="absolute -bottom-3 left-0 xl:w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-500 hidden xl:block"
                  initial={{ width: 0 }}
                  animate={{ width: "6rem" }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                />
              </h2>

              <p className="text-gray-300 text-lg mt-6 xl:mt-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Elevate your business with cutting-edge Websites, AI-powered
                solutions, and tailored Software Development. I bring your ideas
                to life with modern, scalable, and efficient digital solutions
                that drive results.
              </p>

              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                className="mt-8 flex flex-wrap gap-4 justify-center xl:justify-start"
              >
                <div className="px-4 py-2 bg-teal-900/30 border border-teal-700/20 rounded-lg text-teal-400 text-sm">
                  Web Development
                </div>
                <div className="px-4 py-2 bg-teal-900/30 border border-teal-700/20 rounded-lg text-teal-400 text-sm">
                  AI Solutions
                </div>
                <div className="px-4 py-2 bg-teal-900/30 border border-teal-700/20 rounded-lg text-teal-400 text-sm">
                  UI/UX Design
                </div>
              </motion.div>
            </motion.div>

            {/* Slider Section */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className={`w-full ${
                isLargeScreen
                  ? "xl:w-[65%] 2xl:w-[70%]"
                  : "xl:max-w-[55%] xl:ml-auto"
              }`}
            >
              {/* This wrapper will expand the slider in large screens */}
              <div className={isLargeScreen ? "xl:-mr-24 2xl:-mr-32" : ""}>
                <ServicesSlider />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Bulb Decoration */}
        <Bulb />
      </section>
    </>
  );
};

export default Services;
