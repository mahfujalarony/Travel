import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { getAssetPath } from "../utils/asset";

type Review = {
  id: number;
  url: string;
  description: string;
  name: string;
  location: string;
};

const data: Review[] = [
  {
    id: 1,
    url: getAssetPath("download (1).jpg"),
    description: "Everything felt organized from the first search to the final confirmation.",
    name: "Sarah Lee",
    location: "Paris, France",
  },
  {
    id: 2,
    url: getAssetPath("images.jpg"),
    description: "The interface made it easy to compare stays and keep the booking details clear.",
    name: "Arif Rahman",
    location: "Tokyo, Japan",
  },
  {
    id: 3,
    url: getAssetPath("download.jpg"),
    description: "A smooth travel planning experience with the right amount of detail.",
    name: "Maya Carter",
    location: "New York, USA",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = data[currentIndex];

  const move = (direction: number) => {
    setCurrentIndex((prev) => (prev + direction + data.length) % data.length);
  };

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-wider text-amber-600">Testimonials</p>
          <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">What travelers say</h2>
          <div className="mt-6 flex gap-3">
            <button onClick={() => move(-1)} className="grid h-11 w-11 place-items-center rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" aria-label="Previous testimonial">
              <FiArrowLeft />
            </button>
            <button onClick={() => move(1)} className="grid h-11 w-11 place-items-center rounded-md bg-slate-950 text-white hover:bg-slate-800" aria-label="Next testimonial">
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-slate-50 p-5 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.article
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-5 sm:flex-row sm:items-start"
            >
              <img className="h-20 w-20 rounded-md object-cover" src={currentTestimonial.url} alt={currentTestimonial.name} />
              <div>
                <p className="text-xl font-semibold leading-8 text-slate-800">"{currentTestimonial.description}"</p>
                <p className="mt-5 font-black text-slate-950">{currentTestimonial.name}</p>
                <p className="text-sm font-semibold text-slate-500">{currentTestimonial.location}</p>
              </div>
            </motion.article>
          </AnimatePresence>
          <div className="mt-6 flex gap-2">
            {data.map((review, index) => (
              <button
                key={review.id}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${currentIndex === index ? "w-8 bg-slate-950" : "w-2.5 bg-slate-300"}`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
