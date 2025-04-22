import { motion } from 'framer-motion';
import Home from './Component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Navbar from './Component/Navbar';
import Hotels from './Component/Hotels';
import Bookings from './Component/Bookings';
import Flights from './Component/Flights';
import Footer from './Component/Foorter';
import ScrollToTop from './Component/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}      
        transition={{ duration: 1 }}  
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/bookings' element={<Bookings />} />
          <Route path='/flights' element={<Flights />} />
        </Routes>
      </motion.div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
