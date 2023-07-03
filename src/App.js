import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import AboutAyushman from './Components/AboutAyushman/AboutAyushman';
import Features from './Components/Features/Features';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <AboutAyushman/>
      <Features/>
      <Content/>
      <Footer/>
    </div>
  );
};

export default App;
