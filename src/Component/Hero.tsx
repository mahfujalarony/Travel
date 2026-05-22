import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiCalendar, FiMapPin, FiShield } from "react-icons/fi";
import { getAssetPath } from "../utils/asset";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-16">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-700">
            <FiShield />
            Trusted travel planning from Bangladesh
          </p>
          <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Plan flights, hotels, and bookings in one polished travel dashboard.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Jadoo Travel is a professional portfolio project with searchable trip inventory, responsive booking flows, and production-ready user feedback.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => navigate("/bookings")}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 font-bold text-white shadow-sm hover:bg-slate-800"
            >
              Start Booking
              <FiArrowRight />
            </button>
            <button
              onClick={() => navigate("/flights")}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-5 py-3 font-bold text-slate-800 hover:bg-slate-50"
            >
              View Flights
            </button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-slate-200 pt-6">
            <div>
              <p className="text-2xl font-black text-slate-950">18+</p>
              <p className="text-sm text-slate-500">Routes</p>
            </div>
            <div>
              <p className="text-2xl font-black text-slate-950">4.8</p>
              <p className="text-sm text-slate-500">Rating</p>
            </div>
            <div>
              <p className="text-2xl font-black text-slate-950">24/7</p>
              <p className="text-sm text-slate-500">Support</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <img
            src={getAssetPath("Image.png")}
            className="h-[360px] w-full rounded-md object-cover shadow-2xl sm:h-[520px]"
            alt="Traveler planning a journey"
          />
          <div className="absolute bottom-4 left-4 right-4 rounded-md border border-white/60 bg-white/95 p-4 shadow-xl sm:left-auto sm:w-80">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-slate-500">Recommended trip</p>
                <p className="text-lg font-black text-slate-950">Dhaka to Istanbul</p>
              </div>
              <span className="rounded-md bg-amber-100 px-3 py-2 text-sm font-black text-amber-800">BDT 55k</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <FiCalendar className="text-emerald-600" />
                8h 10m
              </span>
              <span className="inline-flex items-center gap-2">
                <FiMapPin className="text-rose-600" />
                Direct options
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
