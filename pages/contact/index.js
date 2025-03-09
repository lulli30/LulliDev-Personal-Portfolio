// Import components
import Head from "next/head";

// Import icons
import { BsArrowRight, BsEnvelope, BsPerson, BsChatDots } from "react-icons/bs";

// Import Framer Motion for animations
import { motion } from "framer-motion";

// Import animation variants
import { fadeIn } from "/variants";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResponseMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setResponseMessage("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>LulliDev | Contact</title>
        <meta
          name="description"
          content="LulliDev specializes in AI, Machine Learning, and Software Engineering."
        />
        <link rel="icon" href="/favicon1.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-teal-950/30 text-gray-100 flex items-center">
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 flex items-center justify-center">
          {/* Contact Form Container */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full max-w-[700px] bg-gradient-to-br from-teal-950 to-slate-950 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-6 md:p-10 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-500/5 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>

            {/* Heading */}
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3"
            >
              Lets{" "}
              <span className="text-teal-400 relative">
                connect
                <span className="absolute bottom-1 left-0 w-full h-1 bg-teal-400/30 rounded-full"></span>
              </span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.3)}
              className="text-gray-400 text-center mb-8 md:mb-10"
            >
              Reach out and lets discuss how we can bring your ideas to life
            </motion.p>

            {/* Contact Form */}
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col gap-5 md:gap-6 w-full mx-auto"
              onSubmit={handleSubmit}
            >
              {/* Name and Email Input Group - Stack on mobile, side by side on larger screens */}
              <div className="flex flex-col md:flex-row gap-5 md:gap-6 w-full">
                <div className="relative w-full">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-400">
                    <BsPerson size={20} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 pl-10 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-200 placeholder-gray-500 hover:border-teal-400 focus:border-teal-400 focus:ring focus:ring-teal-400/20 focus:outline-none transition-all"
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-400">
                    <BsEnvelope size={20} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 pl-10 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-200 placeholder-gray-500 hover:border-teal-400 focus:border-teal-400 focus:ring focus:ring-teal-400/20 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="relative w-full">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-400">
                  <BsChatDots size={20} />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-200 placeholder-gray-500 hover:border-teal-400 focus:border-teal-400 focus:ring focus:ring-teal-400/20 focus:outline-none transition-all"
                />
              </div>

              {/* Message Textarea */}
              <div className="relative w-full">
                <textarea
                  name="message"
                  placeholder="Share your thoughts here..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-200 placeholder-gray-500 hover:border-teal-400 focus:border-teal-400 focus:ring focus:ring-teal-400/20 focus:outline-none transition-all resize-y"
                ></textarea>
              </div>

              {/* Response Message */}
              {responseMessage && (
                <div
                  className={`text-center py-2 px-4 rounded-lg ${
                    responseMessage.includes("success")
                      ? "bg-green-500/20 text-green-300"
                      : "bg-red-500/20 text-red-300"
                  }`}
                >
                  {responseMessage}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center md:justify-start mt-2">
                <button
                  className="btn rounded-full bg-gradient-to-r from-teal-500 to-teal-400 text-gray-900 font-medium w-full max-w-[170px] px-6 py-3 transition-all duration-300 
                  flex items-center justify-center overflow-hidden hover:shadow-lg hover:shadow-teal-500/30 relative group disabled:opacity-70"
                  type="submit"
                  disabled={loading}
                >
                  {!loading ? (
                    <>
                      <span className="transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                        Lets Talk
                      </span>
                      <BsArrowRight
                        className="absolute text-[22px] transition-all duration-300 translate-y-[120%] opacity-0 
                        group-hover:translate-y-0 group-hover:opacity-100"
                      />
                    </>
                  ) : (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  )}
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
