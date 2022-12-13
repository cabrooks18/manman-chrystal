import React from 'react';
import 'tailwindcss/tailwind.css';
import Nav from './Nav';
import Cart from './Cart';
import Menu from './Menu';
import Footer from './Footer';
import Carousel from './Carousel';
import Calendar from './Calendar';



function App() {
  return (
    <div>
      <Nav />
      <Calendar />
      <Cart />
      <Menu />
      <Carousel />
      <Footer />
      

      {/* <Hero />
        <Features />
        <Footer /> */}
    </div>
  );
}

export default App;
