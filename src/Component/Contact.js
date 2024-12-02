import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoStarHalfSharp } from "react-icons/io5";
import Titles from "./Titles";
import Mainlayout from './Layout/Mainlayout';

function Contact() {
    return (
        <Mainlayout>
            <Container className='my-4 p-5' id='contact'>
                <Titles text="CONTACT" className="text-center fs-1 fw-bold mt-2" />
                <div className='d-flex justify-content-center'>
                    <div className='underline1'></div><span><IoStarHalfSharp className='fs-3 text-dark rotate'/></span> <div className='underline1'></div>

                </div>
                <Row>
                    <Col lg={3}></Col>
                    <Col sm={12} md={12} lg={6}>
                        <form>
                            <div className="form-group ">
                                <input type="email" className=" lines my-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="FULL NAME" />
                            </div>
                            <div className="form-group">
                                <input type="password" className=" lines my-4" id="exampleInputPassword1" placeholder="ADDRESS" />
                            </div>
                            <div className="form-group">
                                <input type="password" className=" lines my-4" id="exampleInputPassword1" placeholder="PHONE NUMBER" />
                            </div>
                            <div className="form-group">
                                <textarea type="password" className=" lines my-4" id="exampleInputPassword1" placeholder="MESSAGE" rows={3}/>
                            </div>
                            <button type="submit" className="btn btn-success">SEND</button>
                        </form>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </Container>
        </Mainlayout>
    )
}

export default Contact