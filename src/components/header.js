import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="header-slide">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./imgs/header-1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="header-h3">BUILDERS’ BRIDGE</h3>
            <p className="header-txt">
              A marketplace for construction services
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            name="two"
            className="d-block w-100"
            src="./imgs/header-2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="header-h3 ">BUILDERS’ BRIDGE</h3>
            <p className="header-txt ">
              A marketplace for construction services
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./imgs/header-3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="header-h3">BUILDERS’ BRIDGE</h3>
            <p className="header-txt">
              A marketplace for construction services
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ControlledCarousel;
