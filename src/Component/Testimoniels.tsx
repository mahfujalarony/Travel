import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Review = {
  id: number;
  url: string;
  description: string;
  location: string;
};

const Testimonials: React.FC = () => {
  const data: Review[] = [
    {
      id: 1,
      url: "./download (1).jpg",
      description:
        "An incredible experience! The service was top-notch, and the destinations were breathtaking. Highly recommend!",
      location: "Paris, France",
    },
    {
      id: 2,
      url: "./images.jpg",
      description:
        "Traveling with this agency was seamless and enjoyable. Everything was perfectly organized!",
      location: "Tokyo, Japan",
    },
    {
      id: 3,
      url: "./download.jpg",
      description:
        "A trip of a lifetime! The team made sure every detail was perfect. Will book again!",
      location: "New York, USA",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextToggle = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  // const prevToggle = () => {
  //   setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  // };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = data[currentIndex];

  return (
    <section className="relative flex flex-col lg:flex-row justify-between items-center min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        className="flex flex-col w-full lg:w-[40%] space-y-8 md:space-y-12 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-600">
            TESTIMONIALS
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-800 leading-tight mt-2">
            What People Say <br className="hidden lg:inline" />
            About Us
          </h1>
        </div>
        <button
          onClick={nextToggle}
          className="hover:cursor-pointer focus:outline-none"
        >
          <motion.div
            className="flex space-x-3 justify-center lg:justify-start"
            whileHover={{ scale: 1.1 }}
          >
            {data.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-indigo-600" : "bg-gray-300"
                }`}
                onClick={() => goToTestimonial(index)}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.div>
        </button>
      </motion.div>

      
      <motion.div
        onClick={nextToggle}
        className="relative w-full lg:w-[50%] mt-12 lg:mt-0 bg-white rounded-xl shadow-2xl p-6 md:p-8 cursor-pointer"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial.id}
            className="flex items-start space-x-4 md:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
              src={currentTestimonial.url}
              alt={`Testimonial from ${currentTestimonial.location}`}
            />
            <div className="flex flex-col space-y-4">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                "{currentTestimonial.description}"
              </p>
              <p className="text-sm md:text-base font-semibold text-indigo-600">
                {currentTestimonial.location}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Testimonials;