import React from 'react';
import 'tailwindcss/tailwind.css';
import Nav from './Nav';
import Cart from './Cart';
import Menu from './Menu';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Nav />
      <Cart />
      <Menu />
      <Footer />

      {/* <Hero />
        <Features />
        <Footer /> */}
    </div>
  );
}

export default App;
