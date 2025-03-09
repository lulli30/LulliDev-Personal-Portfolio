import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";
import { motion } from "framer-motion";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// Enhanced service data with teal color variants
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Crafting unique brand identities that stand out.",
    color: "teal-light",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Creating intuitive and engaging user experiences.",
    color: "teal-medium",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Building fast, responsive, and scalable websites.",
    color: "teal-dark",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Optimizing your online presence for better reach.",
    color: "teal-accent",
  },
];

// Color map for dynamic styling with teal theme
const colorMap = {
  "teal-light": {
    bg: "bg-gradient-to-br from-teal-800 to-teal-900",
    icon: "bg-teal-400/20 text-teal-300",
    iconHover: "group-hover:bg-teal-400/30 group-hover:text-teal-200",
    border: "border-teal-700/30",
    title: "text-teal-100",
    description: "text-teal-300",
    arrow: "text-teal-400",
    hover: "hover:bg-teal-700/40 hover:shadow-teal-400/20",
  },
  "teal-medium": {
    bg: "bg-gradient-to-br from-teal-900 to-teal-950",
    icon: "bg-teal-500/20 text-teal-300",
    iconHover: "group-hover:bg-teal-500/30 group-hover:text-teal-200",
    border: "border-teal-800/30",
    title: "text-teal-100",
    description: "text-teal-300",
    arrow: "text-teal-400",
    hover: "hover:bg-teal-800/40 hover:shadow-teal-500/20",
  },
  "teal-dark": {
    bg: "bg-gradient-to-br from-teal-950 to-cyan-950",
    icon: "bg-teal-600/20 text-teal-300",
    iconHover: "group-hover:bg-teal-600/30 group-hover:text-teal-200",
    border: "border-teal-800/20",
    title: "text-teal-100",
    description: "text-teal-300",
    arrow: "text-teal-400",
    hover: "hover:bg-teal-900/40 hover:shadow-teal-600/20",
  },
  "teal-accent": {
    bg: "bg-gradient-to-br from-cyan-900 to-teal-950",
    icon: "bg-cyan-500/20 text-cyan-300",
    iconHover: "group-hover:bg-cyan-500/30 group-hover:text-cyan-200",
    border: "border-cyan-800/20",
    title: "text-cyan-100",
    description: "text-cyan-300",
    arrow: "text-cyan-400",
    hover: "hover:bg-cyan-800/40 hover:shadow-cyan-500/20",
  },
};

const ServiceSlider = () => {
  return (
    <div className="bg-gradient-to-b from-gray-950 to-teal-950/30 py-16 px-6 rounded-2xl shadow-xl border border-teal-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-400 mb-3">
            My Servies
          </h2>
          <p className="text-teal-400/80 max-w-lg mx-auto">
            Explore our range of professional services designed to elevate your
            digital presence.
          </p>
        </motion.div>

        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          freeMode={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="h-[300px] sm:h-[340px]"
        >
          {serviceData.map((item, index) => {
            const colors = colorMap[item.color];

            return (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={`${colors.bg} h-full min-h-[320px] rounded-xl px-6 py-8 flex flex-col justify-between backdrop-blur-md shadow-lg border ${colors.border} group cursor-pointer ${colors.hover} transition-all duration-500 hover:scale-105 hover:shadow-xl`}
                  >
                    {/* icon */}
                    <div
                      className={`text-4xl ${colors.icon} ${colors.iconHover} mb-4 p-3 rounded-xl w-16 h-16 flex items-center justify-center transition-all duration-300`}
                    >
                      {item.icon}
                    </div>

                    {/* title & description */}
                    <div className="mb-6">
                      <h3
                        className={`font-bold text-xl mb-3 ${colors.title} group-hover:text-white transition-all`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`leading-relaxed text-sm ${colors.description} group-hover:text-white/80 transition-all`}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* arrow with animation */}
                    <div className="text-2xl self-end overflow-hidden">
                      <div
                        className={`${colors.arrow} group-hover:text-white transform translate-y-0 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300`}
                      >
                        <RxArrowTopRight />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination {
          position: relative;
          margin-top: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-pagination-bullet {
          background: rgba(94, 234, 212, 0.3);
          opacity: 0.6;
          width: 8px;
          height: 8px;
          margin: 0 4px;
          border-radius: 4px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #5eead4, #22d3ee);
          opacity: 1;
          width: 24px;
          height: 8px;
        }
      `}</style>
    </div>
  );
};

export default ServiceSlider;
