import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiLogoFacebook } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { RiLinkedinLine } from "react-icons/ri";
import { TiSocialDribbble } from "react-icons/ti";
import Titles from './Titles';
import Mainlayout from './Layout/Mainlayout';

function Footer() {
  return (
    <Mainlayout>
      <div className='bg-dark'>
        <Container className='p-5'>
          <Row className='text-center'>
            <Col sm={12} md={4} lg={4}>
              <div className='text-white my-3'>
                <div className=' fw-bold'>LOCATION</div>
                <div className='my-1'>2215 John Daniel Drive</div>
                <div>Clark, MO 65243</div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div className='text-white my-3'>
                <div className=' fw-bold'>AROUND THE WEB</div>
                <div className='my-3 d-flex justify-content-center  gap-3'>
                  <BiLogoFacebook className=' border rounded-circle circle' />
                  <TiSocialTwitter className=' border rounded-circle circle' />
                  <RiLinkedinLine className=' border rounded-circle circle' />
                  <TiSocialDribbble className=' border rounded-circle circle' />
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <div className='text-white my-3'>
                <div className=' fw-bold'>ABOUT FREELANCER</div>
                <div>Freelance is a free to use, MIT licensed</div>
                <div>Bootstrap theme created by <span><Titles link="Start Bootstrap" class1="text-success text-decoration-none" /></span></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Mainlayout>
  )
}

export default Footer