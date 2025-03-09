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
        {/* Decorative Circles */}
        <Circles />

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px- 6">
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
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-primary-100 relative mt-12 xl:mt-4">
                My Services
                <span className="text-teal-500">.</span>
                <motion.div
                  className="absolute -bottom-3 left-0 xl:w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-300 hidden xl:block"
                  initial={{ width: 0 }}
                  animate={{ width: "6rem" }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                />
              </h2>
              <p className="text-primary-200 text-lg mt-1 xl:mt-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Elevate your business with cutting-edge Websites, AI-powered
                sleek UI/UX Design, and tailored Software Solutions. I bring
                your ideas to life with modern, scalable, and efficient digital
                solutions.
              </p>
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
