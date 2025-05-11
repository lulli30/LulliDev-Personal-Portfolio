import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const workSlides = {
  slides: [
    {
      title: "NextStep AI",
      path: "/NextStep-AI.jpg",
      description:
        "Personalized career pathways in the tech industry. An AI-powered platform that helps users navigate their career journey in technology.",
      tech: ["React", "Next.js", "AI/ML", "Tailwind CSS"],
      link: "https://next-step-ai-eight.vercel.app",
    },
    {
      title: "SPIST Library Management System",
      path: "/SPIST Library.jpg",
      description:
        "A comprehensive web-based library management system for Southern Philippines Institute of Science & Technology. Features include book management, user authentication, and real-time analytics.",
      tech: ["Node.js", "Express", "MySQL", "Bootstrap 5", "JWT"],
      link: "https://github.com/lulli30/spist-library-management-system",
    },
    {
      title: "LulliDev Portfolio",
      path: "/LulliDev.jpg",
      description:
        "My personal portfolio showcasing my work, skills, and experience as a software developer and AI specialist.",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      link: "https://lulli-dev.vercel.app",
    },
    {
      title: "Classroom Cleanup (Pygame)",
      path: "/clean_ers.jpg",
      description:
        "A simple and fun Python game where you play as a student cleaning up trash in a classroom. Built with Pygame, featuring power-ups, custom graphics, and interactive gameplay.",
      tech: ["Python", "Pygame", "MoviePy"],
      link: "https://github.com/lulli30/clean-ers-pygame",
    },
  ],
};

const WorkSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="h-[300px] sm:h-[400px] md:h-[500px]"
      >
        {workSlides.slides.map((project, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="relative rounded-lg overflow-hidden flex items-center justify-center group h-full">
                <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                  {/* Image */}
                  <Image
                    src={project.path}
                    width={1200}
                    height={800}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-teal-950/90 to-gray-950/90 opacity-0 group-hover:opacity-90 transition-all duration-700"></div>
                  {/* Title */}
                  <div className="absolute top-0 left-0 right-0 p-6 -translate-y-full group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex flex-col gap-3">
                      {/* Tag */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech?.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm font-medium text-teal-300 bg-teal-900/50 rounded-full border border-teal-700/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {/* Title */}
                      <div className="text-2xl font-bold text-white mt-2">
                        {project.title}
                      </div>
                      {/* Description */}
                      {project.description && (
                        <p className="text-base text-gray-300 line-clamp-3 mt-1">
                          {project.description}
                        </p>
                      )}
                      {/* Link */}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-lg font-medium text-teal-400 hover:text-teal-300 transition-colors mt-4 px-4 py-2 bg-teal-900/30 border border-teal-700/30 rounded-lg hover:bg-teal-900/50 hover:border-teal-600/50"
                        >
                          View Project <BsArrowRight className="text-xl" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #134e4a !important;
          opacity: 0.7 !important;
        }
        .swiper-pagination-bullet-active {
          background: #0f766e !important;
          opacity: 1 !important;
        }
      `}</style>
    </>
  );
};

export default WorkSlider;
