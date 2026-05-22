import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiClock, FiSearch, FiSend } from 'react-icons/fi';
import { getAssetPath } from '../utils/asset';

const flights = [
  { airline: 'Emirates', from: 'Dhaka', to: 'Dubai', departure: '10:00 AM', duration: '5h 30m', price: 45000, image: getAssetPath('flight/a.jpg') },
  { airline: 'Qatar Airways', from: 'Dhaka', to: 'Doha', departure: '2:00 PM', duration: '5h 15m', price: 42000, image: getAssetPath('flight/b.jpg') },
  { airline: 'Singapore Airlines', from: 'Dhaka', to: 'Singapore', departure: '8:00 PM', duration: '4h 45m', price: 38000, image: getAssetPath('flight/c.jpg') },
  { airline: 'Turkish Airlines', from: 'Dhaka', to: 'Istanbul', departure: '6:00 AM', duration: '8h 10m', price: 55000, image: getAssetPath('flight/d.jpg') },
  { airline: 'Biman Bangladesh', from: 'Dhaka', to: 'London', departure: '3:00 AM', duration: '11h 20m', price: 75000, image: getAssetPath('flight/e.jpg') },
  { airline: 'Qatar Airways', from: 'Dhaka', to: 'Abu Dhabi', departure: '9:00 PM', duration: '5h 50m', price: 43000, image: getAssetPath('flight/f.jpg') },
];

const Flights: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const filteredFlights = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return flights;
    return flights.filter((flight) =>
      [flight.airline, flight.from, flight.to].some((field) => field.toLowerCase().includes(value))
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-wider text-amber-600">Flights</p>
            <h1 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Book your next flight</h1>
            <p className="mt-3 max-w-2xl text-slate-600">Search routes, compare prices, and send the selected route into the booking form.</p>
          </div>
          <label className="relative w-full lg:w-96">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full rounded-md border border-slate-300 bg-white py-3 pl-11 pr-4 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              placeholder="Search airline or city"
              aria-label="Search flights"
            />
          </label>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredFlights.map((flight, index) => (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              key={`${flight.airline}-${flight.to}`}
              className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm"
            >
              <img src={flight.image} alt={`${flight.airline} to ${flight.to}`} className="h-48 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-black text-slate-950">{flight.airline}</h2>
                    <p className="mt-1 text-sm font-semibold text-slate-600">{flight.from} to {flight.to}</p>
                  </div>
                  <p className="rounded-md bg-emerald-50 px-3 py-2 font-black text-emerald-700">BDT {flight.price.toLocaleString()}</p>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-2">
                    <FiSend className="text-amber-600" />
                    {flight.departure}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FiClock className="text-rose-600" />
                    {flight.duration}
                  </span>
                </div>
                <button
                  className="mt-5 w-full rounded-md bg-slate-950 px-4 py-3 font-bold text-white hover:bg-slate-800"
                  onClick={() => navigate('/bookings', { state: { bookingType: 'flight', from: flight.from, to: flight.to } })}
                >
                  Book Now
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredFlights.length === 0 && (
          <div className="mt-8 rounded-md border border-slate-200 bg-white p-8 text-center text-slate-600">
            No flights match your search.
          </div>
        )}
      </div>
    </main>
  );
};

export default Flights;
