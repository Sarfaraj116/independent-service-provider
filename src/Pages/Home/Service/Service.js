
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <Card className='shadow-lg' style={{ width: '18rem' }}>
                <Card.Img style={{ width: "100%" }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                    <Card.Text>
                        Detail: {description}
                    </Card.Text>
                    <Button variant="primary">Book This Course</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;