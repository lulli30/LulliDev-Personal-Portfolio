import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const transitionProps = {
  variants: transitionVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
  transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
};

const TransitionLayer = ({ className, zIndex, delayMultiplier = 1 }) => (
  <motion.div
    className={`fixed top-0 bottom-0 right-full w-screen h-screen ${className}`}
    style={{ zIndex }}
    {...transitionProps}
    transition={{
      ...transitionProps.transition,
      delay: transitionProps.transition.delay * delayMultiplier,
    }}
  />
);

const Transition = () => (
  <>
    <TransitionLayer className="bg-[#0d1d22]" zIndex={30} delayMultiplier={1} />
    <TransitionLayer
      className="bg-[#17333b]"
      zIndex={20}
      delayMultiplier={0.8}
    />
    <TransitionLayer
      className="bg-[#224c58]"
      zIndex={10}
      delayMultiplier={0.6}
    />
  </>
);

export default Transition;
