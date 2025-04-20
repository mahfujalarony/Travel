import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';


const Footer: React.FC = () => {
  return (
    <div className='flex flex-wrap justify-between p-8 bg-gray-100'>
      {/* Brand Section */}
      <div className='mb-6 md:mb-0'>
        <h1 className='text-2xl font-bold text-blue-600'>Jadoo</h1>
        <p className='text-gray-600 mt-2 max-w-xs'>
          Book your trip in minute, get full Control for much longer.
        </p>
      </div>

      {/* Company Links */}
      <div className='mb-6 md:mb-0'>
        <h1 className='text-lg font-semibold mb-3'>Company</h1>
        <div className='space-y-2'>        
          <p className='text-gray-600 hover:text-blue-600 cursor-pointer'>About</p>
          <p className='text-gray-600 hover:text-blue-600 cursor-pointer'>Careers</p>
          <p className='text-gray-600 hover:text-blue-600 cursor-pointer'>Mobile</p>
        </div>
      </div>

      {/* Content Links */}
      <div className='mb-6 md:mb-0'>
        <h1 className='text-lg font-semibold mb-3'>Content</h1>
        <div className='space-y-2'>
          <p className='text-gray-600 hover:text-blue-600 cursor-pointer'>Help/FAQ</p>
          <p className='text-gray-600 hover:text-blue-600 cursor-pointer'>Press</p>
          <p className='text-gray-600 hover:text-blue-600 cursor-pointer'>Affilates</p>
        </div>
      </div>

      {/* More Links */}
      <div className='mb-6 md:mb-0'>
        <h1 className='text-lg font-semibold mb-3'>More</h1>
        <div className='space-y-2'>
          <p className='text-gray-600 hover:text-blue-600 cursor-pointer'>Airlinefees</p>
          <p className='text-gray-600 hover:text-blue-600 cursor-pointer'>Airline</p>
          <p className='text-gray-600 hover:text-blue-600 cursor-pointer'>Low fare tips</p>
        </div>
      </div>

      {/* Social and App Section */}
      <div>
        <div className='flex space-x-4 mb-4 text-2xl'>
        
          
          <FaFacebook className='text-gray-600 hover:text-blue-600 cursor-pointer' />
          <FaInstagram className='text-gray-600 hover:text-blue-600 cursor-pointer' />
          <FaTwitter className='text-gray-600 hover:text-blue-600 cursor-pointer' />
        </div>
        <div>
          <p className='text-gray-600 mb-2'>Discover Your App</p>
          <div className='flex space-x-2'>
            <button className='flex items-center bg-black text-white px-3 py-1 rounded'>
              <SiGoogleplay className='mr-1' />
              Play Store
            </button>
            <button className='flex items-center bg-black text-white px-3 py-1 rounded'>
              <SiAppstore className='mr-1' />
              App Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;