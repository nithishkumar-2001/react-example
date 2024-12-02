import React from 'react'
import Titles from './Titles'
import { IoStarHalfSharp } from "react-icons/io5";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaDownload } from "react-icons/fa";
import Mainlayout from './Layout/Mainlayout';

function About() {
    return (
        <Mainlayout>
            <div className='bgcolor' id='about'>
                <Titles text="ABOUT" className="text-center fs-1 fw-bold text-white" />
                <div className='d-flex justify-content-center'>
                    <div className='underline'></div><span><IoStarHalfSharp className='fs-3 text-white rotate' /></span> <div className='underline'></div>
                </div>
                <Container>
                    <Row >
                        <Col lg={2}></Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className='text-white fontSize mt-3 py-3'>
                                <div>Freelancer is a free bootstrap theme created by Start</div>
                                <div>Bootstrap. The download includes the complete source</div>
                                <div>files including HTML, CSS, and JavaScript as well as</div>
                                <div>optional SASS stylesheets for easy customization.</div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className='text-white fontSize mt-3 py-3'>
                                <div>You can create your own custom avatar for the</div>
                                <div>masthead, change the icon in the dividers,add your</div>
                                <div>email address to the contact form to make it fully functional!</div>
                                <div></div>
                            </div>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                    <div className='d-flex justify-content-center'>
                        <button className='my-2 p-2 border border-outline-none rounded-2'><span className='px-2'><FaDownload /></span>Free Downlod</button>
                    </div>
                </Container>
            </div>
        </Mainlayout>
    )
}

export default About