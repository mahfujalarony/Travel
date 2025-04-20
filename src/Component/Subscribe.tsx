import React from 'react'

const Subscribe = () => {
  return (
    <div 
      className="relative flex flex-col items-center justify-center w-full min-h-[400px] bg-cover bg-center py-12 px-4 md:px-8 lg:px-16"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
    >
      
      <div className="absolute inset-0 bg-black/50"></div>
      
     
      <div className="relative z-10 flex flex-col items-center space-y-8 text-center">
        <h1 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
        >
          Subscribe to get information, latest news <br className="hidden lg:block" /> 
          and exciting offers about Jadoo
        </h1>
        
        <div className="flex flex-col sm:flex-row w-full max-w-md gap-4">
          <input 
            type="email" 
            placeholder="Your email" 
            className="flex-1 px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Email address"
          />
          <button 
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe