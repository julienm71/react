import React from 'react';
import {Carousel} from 'react-bootstrap';

class CarouselModule extends React.Component {
  render() {
    return (
        <Carousel>
          {JSON.parse(localStorage.getItem("primates")).length > 0 ? (
            JSON.parse(localStorage.getItem("primates")).map(primate => (
              <Carousel.Item key={primate.id}>
                <img className="d-block w-100" src="./primate1.jpg" alt="First slide"/>
                <Carousel.Caption>
                  <h3 className="some-title2">{primate.name}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))
          ) : (
            <Carousel.Item>
              <img className="d-block w-100" src="./primate1.jpg" alt="First slide"/>
              <Carousel.Caption>
                <h3 className="some-title2">Primate random</h3>
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
    )
  }
}

export default CarouselModule;
