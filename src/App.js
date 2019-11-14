import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Description from './components/Description';
import CarouselModule from './components/Carousel';
import Cards from './components/Cards';
import FooterPage from './components/Footer'


function App() {

  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Description />
      <CarouselModule />
      <Cards />
      <FooterPage color="cyan"/>
    </div>
  );
}

export default App;

