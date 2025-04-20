import React, { useState } from "react";
import { motion } from "framer-motion";
import { HeartIcon as OutlineHeart } from '@heroicons/react/24/outline'
import { HeartIcon as SolidHeart } from '@heroicons/react/24/solid'

type Item = {
  id: number;
  url: string;
  title: string;
  description: string;
};

const NextBooking = () => {
  const data: Item[] = [
    {
      id: 1,
      url: "./Group 12.png",
      title: "Choose Destination",
      description:
        "Explore and select your dream destination with ease and excitement.",
    },
    {
      id: 2, 
      url: "./Group 7.png",
      title: "Make Payment",
      description:
        "Securely complete your payment with our trusted and fast process.",
    },
    {
      id: 3, 
      url: "./Group 11.png",
      title: "Reach Airport on Selected Date",
      description:
        "Arrive at the airport on time and start your journey stress-free.",
    },
  ];

  const [liked, setLiked] = useState(false);

  return (
    <section className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16 bg-white">
      
      <motion.div
        className="flex flex-col w-full lg:w-[50%] space-y-8 md:space-y-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center lg:text-left">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-600">
            Easy and Fast
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-800 leading-tight mt-2">
            Book Your Next Trip <br className="hidden lg:inline" />
            in 3 Easy Steps
          </h1>
        </div>
        {data.map((d, index) => (
          <motion.div
            key={d.id}
            className="flex items-start space-x-4 md:space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={d.url}
              alt={d.title}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
            <div className="flex flex-col">
              <h4 className="text-lg md:text-xl font-semibold text-gray-800">
                {d.title}
              </h4>
              <p className="text-sm md:text-base text-gray-600 mt-2 leading-relaxed">
                {d.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

    
      <motion.div
        className="relative w-full lg:w-[45%] mt-12 lg:mt-0 bg-white rounded-xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="./Rectangle 17.jpg"
          alt="Trip to Greece"
          className="w-full h-48 sm:h-64 md:h-80 object-cover"
        />
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Trip to Greece
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            14-19 June by Robin Jone
          </p>
          <div className="flex gap-3 mt-4">
            <img
              src="./LEAF.png"
              alt="Eco-friendly"
              className="w-6 h-6 object-contain"
            />
            <img
              src="./map icon.png"
              alt="Map"
              className="w-6 h-6 object-contain"
            />
            <img
              src="./send.png"
              alt="Share"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center space-x-2">
              <img
                src="./building 1.png"
                alt="People"
                className="w-6 h-6 object-contain"
              />
              <p className="text-sm md:text-base text-gray-600">
                24 People Going
              </p>
            </div>


            <button onClick={() => setLiked(!liked)} className="transition-transform hover:scale-110">
              {liked ? (
              <SolidHeart className="w-6 h-6 text-red-500" />
                 ) : (
             <OutlineHeart className="w-6 h-6 text-gray-600" />
               )}
             </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default NextBooking;