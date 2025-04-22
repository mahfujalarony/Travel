import { motion } from "framer-motion"; 

const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse xl:flex-row items-center justify-between min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
   
      <motion.div
        className="flex flex-col space-y-6 md:space-y-8 lg:space-y-10 xl:max-w-[50%] text-center xl:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-red-600 tracking-wide">
          Best Destinations Around the World
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight md:leading-snug text-gray-800">
          Travel, Enjoy <br className="hidden lg:inline" />
          and Live a New <br className="hidden lg:inline" />
          Full Life
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-md mx-auto xl:mx-0">
          Discover breathtaking destinations and create unforgettable memories. Let your journey begin with us, exploring the world in style and comfort.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
          <button className="relative px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
            Find Out More
          </button>
          <button className="relative flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold border-2 border-indigo-600 rounded-lg shadow-md hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105">
            <img src="./y.png" className="w-6 mr-2" alt="Play Icon" />
            Play Demo
          </button>
        </div>
      </motion.div>

      <motion.div
        className="relative mb-12 xl:mb-0 xl:max-w-[45%]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <img
          src="./image.png"
          className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] object-cover rounded-lg shadow-2xl"
          alt="Travel Destination"
        />
        <img
          src="./Decore.png"
          className="absolute top-[-150px] sm:top-[-200px] right-[-50px] sm:right-[-100px] md:right-[-150px] lg:right-[-200px] w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] z-0 opacity-50"
          alt="Decorative Element"
        />
      </motion.div>
    </section>
  );
};

export default Hero;