import React from 'react';
import {Carousel} from 'react-bootstrap';

class CarouselModule extends React.Component {
  render() {
    return (
      <div className="bg-carousel">
        <div className="container">
            <h1 class="some-title underline-title">Quelques photos</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./primate1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>PRIMATE 1</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./primate2.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>PRIMATE 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./primate3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>PRIMATE 3</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}

export default CarouselModule;
