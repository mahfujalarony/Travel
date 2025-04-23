import React from 'react';
import { motion } from 'framer-motion';

const hotels = [
  {
    name: 'Ocean Breeze Resort',
    image: './hotel/a.jpg',
    description: 'A luxurious beachfront resort with stunning ocean views.',
    rating: 4.8,
  },
  {
    name: 'Cityscape Hotel',
    image: './hotel/b.jpg',
    description: 'Modern hotel in the heart of the city with top amenities.',
    rating: 4.5,
  },
  {
    name: 'Mountain Retreat',
    image: './hotel/c.jpg',
    description: 'Cozy retreat nestled in the serene mountains.',
    rating: 4.7,
  },
  {
    name: 'Sunset Paradise Inn',
    image: './hotel/d.jpg',
    description: 'A charming inn with breathtaking sunset views by the coast.',
    rating: 4.6,
  },
  {
    name: 'Urban Oasis Hotel',
    image: './hotel/e.jpg', 
    description: 'A stylish urban hotel with a relaxing spa and rooftop pool.',
    rating: 4.4,
  },
  {
    name: 'Forest Haven Lodge',
    image: './hotel/f.jpg',
    description: 'A tranquil lodge surrounded by lush forests and nature trails.',
    rating: 4.9,
  },
];

const Hotels: React.FC = () => {
  const fallbackImage = 'https://via.placeholder.com/400x200?text=Hotel+Image';

  return (
    <div className="bg-gray-100 py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Find Your Perfect Hotel</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, delay: index*0.5 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 3 }} 
                onError={(e) => {
                  console.error(`Failed to load image for ${hotel.name}: ${hotel.image}`);
                  e.currentTarget.src = fallbackImage;
                }}
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{hotel.name}</h4>
                <p className="text-gray-600 mb-2">{hotel.description}</p>
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1 text-gray-700">{hotel.rating}/5</span>
                </div>
                <button className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold">Book Now</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
