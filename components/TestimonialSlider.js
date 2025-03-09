import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

// Testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-3.png",
    name: "John Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
];

// Individual Testimonial Component
const TestimonialCard = ({ image, name, position, message }) => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-8 md:px-16">
      {/* Avatar Section */}
      <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
        <div className="flex flex-col justify-center text-center">
          {/* Avatar */}
          <div className="mb-2 mx-auto">
            <Image src={image} alt={name} width={100} height={100} priority />
          </div>
          {/* Name */}
          <div className="text-lg font-semibold">{name}</div>
          {/* Position */}
          <div className="text-[12px] uppercase font-extralight tracking-widest text-gray-100">
            {position}
          </div>
        </div>
      </div>

      {/* Testimonial Message */}
      <div className="flex-1 flex flex-col justify-center relative xl:pl-12 bg-teal-500/10 rounded-lg p-6 md:p-8">
        {/* Quote Icon */}
        <FaQuoteLeft className="text-4xl xl:text-6xl text-gray-400/50 mx-auto md:mx-0" />
        {/* Message */}
        <p className="xl:text-lg text-center md:text-left leading-relaxed text-gray-100">
          {message}
        </p>
      </div>
    </div>
  );
};

const TestimonialSlider = () => {
  return (
    <>
      <style>
        {`
          /* Pagination Styling */
          .swiper-pagination {
            color: teal !important;
            text-align: center;
          }
          .swiper-pagination .swiper-pagination-bullet {
            background-color: teal !important;
            width: 12px;
            height: 12px;
          }
          .swiper-pagination .swiper-pagination-bullet-active {
            background-color: #008080 !important;
          }

          /* Navigation Arrows Styling */
          .swiper-button-next, .swiper-button-prev {
            color: teal !important;
          }

          /* Ensuring arrow icons change color */
          .swiper-button-next::after, .swiper-button-prev::after {
            color: teal !important;
            font-size: 24px !important; /* Adjust arrow size if needed */
          }

          /* Optional: Add hover effect */
          .swiper-button-next:hover::after, .swiper-button-prev:hover::after {
            color: #008080 !important;
          }
        `}
      </style>

      <Swiper
        navigation={true}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="h-[400px] md:h-[450px]"
      >
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
