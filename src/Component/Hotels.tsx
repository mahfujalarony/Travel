import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiMapPin, FiSearch, FiStar } from 'react-icons/fi';
import { getAssetPath } from '../utils/asset';

const hotels = [
  { name: 'Ocean Breeze Resort', location: 'Cox Bazar', image: getAssetPath('hotel/a.jpg'), description: 'Beachfront resort with ocean-view rooms and breakfast.', rating: 4.8, price: 9500 },
  { name: 'Cityscape Hotel', location: 'Dhaka', image: getAssetPath('hotel/b.jpg'), description: 'Central business hotel with meeting rooms and airport pickup.', rating: 4.5, price: 7200 },
  { name: 'Mountain Retreat', location: 'Bandarban', image: getAssetPath('hotel/c.jpg'), description: 'Quiet hillside stay with guided nature trails.', rating: 4.7, price: 6800 },
  { name: 'Sunset Paradise Inn', location: 'Bali', image: getAssetPath('hotel/d.jpg'), description: 'Boutique inn close to restaurants, beach, and local tours.', rating: 4.6, price: 8800 },
  { name: 'Urban Oasis Hotel', location: 'Singapore', image: getAssetPath('hotel/e.jpg'), description: 'Modern rooms, rooftop pool, spa, and fast city access.', rating: 4.4, price: 11200 },
  { name: 'Forest Haven Lodge', location: 'Sylhet', image: getAssetPath('hotel/f.jpg'), description: 'Nature lodge surrounded by tea gardens and forest views.', rating: 4.9, price: 7600 },
];

const Hotels: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const filteredHotels = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return hotels;
    return hotels.filter((hotel) =>
      [hotel.name, hotel.location, hotel.description].some((field) => field.toLowerCase().includes(value))
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-wider text-amber-600">Hotels</p>
            <h1 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Find your perfect stay</h1>
            <p className="mt-3 max-w-2xl text-slate-600">Filter hotels by city, name, or amenity and continue directly to booking.</p>
          </div>
          <label className="relative w-full lg:w-96">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full rounded-md border border-slate-300 bg-white py-3 pl-11 pr-4 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              placeholder="Search hotel or city"
              aria-label="Search hotels"
            />
          </label>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredHotels.map((hotel, index) => (
            <motion.article
              key={hotel.name}
              className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={hotel.image} alt={hotel.name} className="h-48 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-black text-slate-950">{hotel.name}</h2>
                    <p className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
                      <FiMapPin className="text-rose-600" />
                      {hotel.location}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-3 py-2 font-black text-amber-700">
                    <FiStar />
                    {hotel.rating}
                  </span>
                </div>
                <p className="mt-4 min-h-[48px] text-sm leading-6 text-slate-600">{hotel.description}</p>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <p className="font-black text-emerald-700">BDT {hotel.price.toLocaleString()}/night</p>
                  <button
                    className="rounded-md bg-slate-950 px-4 py-3 font-bold text-white hover:bg-slate-800"
                    onClick={() => navigate('/bookings', { state: { bookingType: 'hotel', hotelLocation: hotel.location } })}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredHotels.length === 0 && (
          <div className="mt-8 rounded-md border border-slate-200 bg-white p-8 text-center text-slate-600">
            No hotels match your search.
          </div>
        )}
      </div>
    </main>
  );
};

export default Hotels;
