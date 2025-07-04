import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const CabinCard = ({ cabin, onViewMore }) => {
  return (
    <Card className="shadow-sm h-100">
      <div className="position-relative">
        <Badge 
          bg="warning" 
          text="dark"
          className="position-absolute top-0 end-0 m-2"
          style={{ zIndex: 2, fontSize: '0.9rem' }}
        >
          ${cabin.price}/noche
        </Badge>
        <Card.Img 
          variant="top" 
          src={cabin.image[0]} 
          alt={cabin.title}
          style={{ height: '250px', objectFit: 'cover' }}
        />
      </div>
      
      <Card.Body className="d-flex flex-column">
        <Card.Title className="h5">
          {cabin.title} N°{cabin.id} – {cabin.shortDescription}
        </Card.Title>
        <Card.Text className="flex-grow-1">
          {cabin.description}
        </Card.Text>
        <Button 
          variant="warning" 
          className="w-100 fw-bold"
          onClick={() => onViewMore(cabin)}
        >
          Ver Más
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CabinCard;