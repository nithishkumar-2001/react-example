import React from 'react';
import Titles from './Titles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import firstImage from '../Assets/img-1.png';
import secondtImage from '../Assets/img-2.png';
import thirdImage from '../Assets/img-3.png';
import fourthImage from '../Assets/img-4.png';
import fifthImage from '../Assets/img-5.png';
import sixthImage from '../Assets/img-6.png';
import { IoStarHalfSharp } from "react-icons/io5";
import Mainlayout from './Layout/Mainlayout';

function Portfolio() {
    return (
        <Mainlayout>
            <Container className='py-5' id='portfolio'>
                <Titles text="PORTFOLIO" className="text-center fs-1 fw-bold mt-2" />
                <div className='d-flex justify-content-center'>
                    <div className='underline1'></div><span><IoStarHalfSharp className='fs-3 text-dark rotate' /></span> <div className='underline1'></div>
                </div>
                <Row className="g-4 my-3">
                    <Col sm={12} md={6} lg={4}>
                        <img
                            src={firstImage}
                            alt="Portfolio item 1"
                            className="img-fluid zoom"
                        />
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <img
                            src={secondtImage}
                            alt="Portfolio item 2"
                            className="img-fluid zoom"
                        />
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <img
                            src={thirdImage}
                            alt="Portfolio item 3"
                            className="img-fluid zoom"
                        />
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <img
                            src={fourthImage}
                            alt="Portfolio item 3"
                            className="img-fluid zoom"
                        />
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <img
                            src={fifthImage}
                            alt="Portfolio item 3"
                            className="img-fluid zoom"
                        />
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <img
                            src={sixthImage}
                            alt="Portfolio item 3"
                            className="img-fluid zoom"
                        />
                    </Col>
                </Row>
            </Container>
        </Mainlayout>
    );
}

export default Portfolio;
