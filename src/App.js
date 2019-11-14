import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import Banner from './components/Banner';
import CarouselModule from './components/Carousel';
import Description from './components/Description';
import FooterPage from './components/Footer'


function App() {

  return (
    <div className="App">
      <Navigation />
      <Banner />
      <CarouselModule />
      <Description />
      <FooterPage color="cyan"/>
    </div>
  );
}

export default App;

