import React from 'react';
import { Carousel } from 'react-bootstrap';

function MyCarousel() {

    const images = [
        "https://images8.alphacoders.com/104/1045499.jpg",
        "https://images8.alphacoders.com/612/612623.jpg",
        "https://images.alphacoders.com/808/808387.jpg",
        "https://images.alphacoders.com/959/959220.jpg",
        "https://images4.alphacoders.com/941/941206.jpg"
    ]

 return (
<div>
<h2 class="d-flex justify-content-center">Nuevas incorporaciones</h2>
<Carousel>
      {images.map((imageUrl, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '450px', overflow: 'hidden' }}>
            <img
              style={{ maxHeight: '100%', width: 'auto' }}
              className="d-block h-100"
              src={imageUrl}
              alt={`Slide ${index + 1}`}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
</div>
 );
}

export default MyCarousel;