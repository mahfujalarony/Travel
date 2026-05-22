import { useState } from "react";
import { motion } from 'framer-motion';
import { HeartIcon as OutlineHeart } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeart } from '@heroicons/react/24/solid';
import { FiCheckCircle } from "react-icons/fi";
import { getAssetPath } from "../utils/asset";

const steps = [
  { title: "Choose Destination", description: "Select route, stay, dates, and travelers from one flow." },
  { title: "Review Options", description: "Compare price, timing, rating, and trip details clearly." },
  { title: "Confirm Request", description: "Submit a clean travel request with instant feedback." },
];

const NextBooking = () => {
  const [liked, setLiked] = useState(false);

  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-wider text-amber-600">Process</p>
          <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Book your next trip in 3 clear steps</h2>
          <div className="mt-8 space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex gap-4 rounded-md border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-slate-950 font-black text-white">{index + 1}</span>
                <div>
                  <h3 className="font-black text-slate-950">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.article
          className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <img src={getAssetPath("Rectangle 17.jpg")} alt="Trip to Greece" className="h-72 w-full object-cover" />
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black text-slate-950">Trip to Greece</h3>
                <p className="mt-2 text-sm font-semibold text-slate-600">14-19 June by Robin Jones</p>
              </div>
              <button
                onClick={() => setLiked(!liked)}
                className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50"
                aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
              >
                {liked ? <SolidHeart className="h-5 w-5 text-rose-500" /> : <OutlineHeart className="h-5 w-5" />}
              </button>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <span className="rounded-md bg-emerald-50 p-3 text-sm font-bold text-emerald-700">24 people</span>
              <span className="rounded-md bg-amber-50 p-3 text-sm font-bold text-amber-700">6 days</span>
              <span className="rounded-md bg-rose-50 p-3 text-sm font-bold text-rose-700">Greece</span>
            </div>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
              <FiCheckCircle className="text-emerald-600" />
              Wishlist button is interactive
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default NextBooking;
