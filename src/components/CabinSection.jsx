import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CabinCard from './CabinCard';
import CabinModal from './CabinModal';
import cabinsData from '../data/cabins.json';

const CabinSection = () => {
  const [cabins, setCabins] = useState([]);
  const [selectedCabin, setSelectedCabin] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setCabins(cabinsData);
  }, []);

  const handleViewMore = (cabin) => {
    setSelectedCabin(cabin);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCabin(null);
  };

  return (
    <section className="bg-light py-5" id="cabañas">
      <Container>
        <Row className="mb-4">
          <Col lg={8} className="offset-lg-2 text-center">
            <h2 className="display-4 mb-4">Nuestras Cabañas</h2>
            <p className="text-center fw-semibold text-secondary fs-5">
              Ofrecemos 3 tipos de cabañas acorde a tus necesidades:
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {cabins.map((cabin) => (
            <Col lg={4} key={cabin.id}>
              <CabinCard cabin={cabin} onViewMore={handleViewMore} />
            </Col>
          ))}
        </Row>
      </Container>

      <CabinModal 
        show={showModal} 
        onHide={handleCloseModal} 
        cabin={selectedCabin} 
      />
    </section>
  );
};

export default CabinSection;