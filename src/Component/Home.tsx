import Category from "./Category";
import Foorter from "./Foorter";
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
      <Foorter />

    </div>
  );
}

export default Home;
