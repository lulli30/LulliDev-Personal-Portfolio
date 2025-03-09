import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Next Step AI",
    path: "/NextStep-AI.jpg",
    link: "https://next-step-ai-eight.vercel.app",
    description: "Personalized career pathways in the tech industry.",
  },
  {
    title: "Project 5",
    path: "/thumb4.jpg",
    link: "https://project5.com",
    description: "An amazing project showcasing advanced features.",
  },
  {
    title: "Project 6",
    path: "/thumb1.jpg",
    link: "https://project6.com",
    description: "A creative and innovative web solution.",
  },
  {
    title: "Project 7",
    path: "/thumb2.jpg",
    link: "https://project7.com",
    description: "An AI-driven platform for smart automation.",
  },
  {
    title: "Project 8",
    path: "/thumb3.jpg",
    link: "https://project8.com",
    description: "An interactive experience for modern web users.",
  },
];

const WorkSlider = () => {
  return (
    <div className="work-slider-container">
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #66a5a5 !important; /* Lighter Teal */
          opacity: 0.8 !important;
          width: 12px !important;
          height: 12px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #338888 !important; /* Slightly Darker Lighter Teal */
          opacity: 1 !important;
          width: 14px !important;
          height: 14px !important;
        }
      `}</style>

      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination]}
        slidesPerView={1}
        className="h-auto sm:h-[520px] overflow-visible"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card w-full h-full flex flex-col items-center rounded-xl bg-gradient-to-br from-teal-900 to-teal-950 relative overflow-hidden group"
            >
              <div className="relative w-full h-full">
                <Image
                  src={project.path}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-900/80 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-teal-50 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-teal-100 text-center px-6">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center gap-x-2 bg-teal-800/80 px-4 py-2 rounded-full">
                    <span className="text-teal-50 font-medium">
                      LIVE PROJECT
                    </span>
                    <BsArrowRight className="text-teal-50 text-xl ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
