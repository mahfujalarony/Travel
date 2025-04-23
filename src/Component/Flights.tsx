import React from 'react';

import { motion } from 'framer-motion';


const flights = [
  {
    airline: 'Emirates',
    from: 'Dhaka',
    to: 'Dubai',
    departure: '10:00 AM',
    duration: '5h 30m',
    price: 45000,
    image: './flight/a.jpg',
  },
  {
    airline: 'Qatar Airways',
    from: 'Dhaka',
    to: 'Doha',
    departure: '2:00 PM',
    duration: '5h 15m',
    price: 42000,
    image: '/flight/b.jpg',
  },
  {
    airline: 'Singapore Airlines',
    from: 'Dhaka',
    to: 'Singapore',
    departure: '8:00 PM',
    duration: '4h 45m',
    price: 38000,
    image: '/flight/c.jpg', 
  },
  {
    airline: 'Turkish Airlines',
    from: 'Dhaka',
    to: 'Istanbul',
    departure: '6:00 AM',
    duration: '8h 10m',
    price: 55000,
    image: '/flight/d.jpg',
  },
  {
    airline: 'Biman Bangladesh',
    from: 'Dhaka',
    to: 'London',
    departure: '3:00 AM',
    duration: '11h 20m',
    price: 75000,
    image: '/flight/e.jpg',
  },
  {
    airline: 'Qatar Airways',
    from: 'Dhaka',
    to: 'Abu Dhabi',
    departure: '9:00 PM',
    duration: '5h 50m',
    price: 43000,
    image: '/flight/f.jpg',
  },
];


const Flights: React.FC = () => {
  const fallbackImage = 'https://via.placeholder.com/400x200?text=Flight+Image';

  return (
    <div className="bg-gray-100 py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Book Your Next Flight</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flights.map((flight, index) => (
            <motion.div             initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: index*0.5 }}
            viewport={{ once: true, amount: 0.5 }} key={index} 
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <motion.img
                src={flight.image}
                alt={`${flight.airline} to ${flight.to}`}
                className="w-full h-48 object-cover"
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 3 }} 
                onError={(e) => {
                  console.error(`Failed to load image for ${flight.airline}: ${flight.image}`);
                  e.currentTarget.src = fallbackImage;
                }}
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{flight.airline}</h4>
                <p className="text-gray-600 mb-1">
                  {flight.from} to {flight.to}
                </p>
                <p className="text-gray-600 mb-1">Departure: {flight.departure}</p>
                <p className="text-gray-600 mb-1">Duration: {flight.duration}</p>
                <p className="text-green-600 font-semibold mb-2">BDT {flight.price.toLocaleString()}</p>
                <button className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold">Book Now</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flights;