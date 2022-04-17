import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img style={{height: '600px'}}
                    className="d-block w-100"
                    src="https://i0.wp.com/personaltrainersdubai.com/wp-content/uploads/2021/05/PT-Dubai.jpeg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Come To Fulfill Your Dream</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: '600px'}}
                    className="d-block w-100"
                    src="https://www.ihrsa.org/uploads/Articles/Column-Width/_365x235_crop_center-center_75_none/personal-training_men-exercising-tai-chi_column.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Now or Never</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: '600px'}}
                    className="d-block w-100"
                    src="https://i.pinimg.com/736x/67/8b/9b/678b9b3dc048046efc4ad8de0cd1b1fe.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Gain your Confidence Again</h3>
                    <p> </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;