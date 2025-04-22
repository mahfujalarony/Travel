import React  from 'react';
import { motion } from 'framer-motion';


type Item = {
    id: number;
    location: string;
    view: string;
    duration: string;
    url: string;
};

const Selling: React.FC = () => {
    const data: Item[] = [
        {
            id: 1,
            location: 'Rome, Italty',
            view: '$5.42k',
            duration: '10 Days Trip',
            url: './Rectangle 14.png',
        },
        {
            id: 2,
            location: 'London, UK',
            view: '$4.2k',
            duration: '12 Days Trip',
            url: './Rectangle 14.jpg',
        },
        {
            id: 3,
            location: 'Full Europe',
            view: '$15k',
            duration: '28 Days Trip',
            url: './Rectangle 14 (1).png',
        },
    ];



    return (
        <div data-aos="fade-up" className="flex flex-col items-center py-12 px-4 bg-gray-50">
            <h1 className="text-lg font-semibold text-gray-500 tracking-wider">Top Selling</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-8">Top Destinations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
                {data.map((d, index) => (
                    <motion.div
                        key={d.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index*0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={d.url}
                            alt={d.location}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-semibold text-gray-800">{d.location}</h3>
                                <p className="text-yellow-500 font-bold">{d.view}</p>
                            </div>
                            <p className="text-gray-600 text-sm">{d.duration}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Selling;