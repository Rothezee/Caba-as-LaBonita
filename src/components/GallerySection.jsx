import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import carouselData from '../data/carousel.json';

const GallerySection = () => {
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    setCarouselImages(carouselData);
  }, []);

  return (
    <section className="bg-white py-5" id="galeria">
      <Container className="position-relative">
        <Row className="align-items-center mb-4">
          <Col lg={7} className="text-left position-relative">
            <h3 className="h2">Bienvenido al</h3>
            <h1 className="display-2 fw-bold text-primary">PARAÍSO</h1>
          </Col>

          <Col lg={5}>
            <Carousel className="shadow rounded-3" interval={4000}>
              {carouselImages.map((item, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 rounded-3"
                    src={item.image}
                    alt={item.description}
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GallerySection;