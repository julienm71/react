import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Description from './components/Description';
import CarouselModule from './components/Carousel';
import Cards from './components/Cards';
import Footer from './components/Footer'


function App() {

  const primatesData = [
    { id: 1, name: 'Gorille de l\'Est'},
    { id: 2, name: 'Bonobo'},
    { id: 3, name: 'Chimpanzé'}
  ]

  if (localStorage.getItem("primates") === null) {
    localStorage.setItem('primates', JSON.stringify(primatesData));
  }

  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Description />
      <CarouselModule />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;

