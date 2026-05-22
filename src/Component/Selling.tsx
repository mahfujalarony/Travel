import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import { getAssetPath } from '../utils/asset';

type Item = {
    id: number;
    location: string;
    price: string;
    duration: string;
    url: string;
};

const Selling: React.FC = () => {
    const navigate = useNavigate();
    const data: Item[] = [
        {
            id: 1,
            location: 'Rome, Italy',
            price: '$5.42k',
            duration: '10 Days Trip',
            url: getAssetPath('Rectangle 14.png'),
        },
        {
            id: 2,
            location: 'London, UK',
            price: '$4.2k',
            duration: '12 Days Trip',
            url: getAssetPath('Rectangle 14.jpg'),
        },
        {
            id: 3,
            location: 'Full Europe',
            price: '$15k',
            duration: '28 Days Trip',
            url: getAssetPath('Rectangle 14 (1).png'),
        },
    ];

    return (
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-sm font-black uppercase tracking-wider text-amber-600">Top Selling</p>
                        <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Curated destinations</h2>
                    </div>
                    <button
                        onClick={() => navigate('/bookings')}
                        className="inline-flex w-fit items-center gap-2 rounded-md border border-slate-300 px-4 py-3 font-bold text-slate-800 hover:bg-slate-50"
                    >
                        Build itinerary
                        <FiArrowRight />
                    </button>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {data.map((d, index) => (
                        <motion.article
                            key={d.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm"
                        >
                            <img src={d.url} alt={d.location} className="h-64 w-full object-cover" />
                            <div className="p-5">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-black text-slate-950">{d.location}</h3>
                                        <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-600">
                                            <FiMapPin className="text-rose-600" />
                                            {d.duration}
                                        </p>
                                    </div>
                                    <p className="rounded-md bg-emerald-50 px-3 py-2 font-black text-emerald-700">{d.price}</p>
                                </div>
                                <button
                                    onClick={() => navigate('/bookings')}
                                    className="mt-5 w-full rounded-md bg-slate-950 px-4 py-3 font-bold text-white hover:bg-slate-800"
                                >
                                    Reserve Package
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Selling;
