import React from 'react';

const hotels = [
  {
    name: 'Ocean Breeze Resort',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    description: 'A luxurious beachfront resort with stunning ocean views.',
    rating: 4.8,
  },
  {
    name: 'Cityscape Hotel',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9',
    description: 'Modern hotel in the heart of the city with top amenities.',
    rating: 4.5,
  },
  {
    name: 'Mountain Retreat',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
    description: 'Cozy retreat nestled in the serene mountains.',
    rating: 4.7,
  },
  {
    name: 'Sunset Paradise Inn',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    description: 'A charming inn with breathtaking sunset views by the coast.',
    rating: 4.6,
  },
  {
    name: 'Urban Oasis Hotel',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6',
    description: 'A stylish urban hotel with a relaxing spa and rooftop pool.',
    rating: 4.4,
  },
  {
    name: 'Forest Haven Lodge',
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974',
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
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;