import Category from "./Category";

import Hero from "./Hero";
import NextBooking from "./NextBooking";
import Selling from "./Selling";
import Subscribe from "./Subscribe";
import Testimoniels from "./Testimoniels";


function Home() {

  return (
    <div>
      <Hero />
      <Category />
      <Selling />
      <NextBooking />
      <Testimoniels />
      <Subscribe />
    </div>
  );
}

export default Home;
