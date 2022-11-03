import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Contact() {
  return (
    <>
      <div className='contact'>
        <h3 className='contact-heading'>Lorem Ipsum Dolor Sit Amer</h3>
        <p className='contact-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
        <div className='rectangle'></div>
      </div>
      <div className='container mb-5'>
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col>
              <>
                <Card.Body>
                  <Card.Title className='contact-heading-1 mt-3' style={{ fontSize: '40px' }}>Lorem Ipsum</Card.Title>
                  <Card.Text className='pt-4' style={{ color: '#333d42', fontSize: '20px' }}>
                    Lorem ipsum dolor sit amet, consecte
                    sectetur adipisicing elit, tation omne
                    ullamco laboris nisi ut aliqolore.
                  </Card.Text>
                </Card.Body>
              </>
            </Col>
          ))}
        </Row>
      </div>
      <div className='container'>
        <p className='contact-para-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
        <h3 className='lorem'>Lorem Ipsum</h3>
      </div>
      <div className='title-background'>
        <div className='container'>
          <h1 className='title-heading'>TITLE HERE</h1>
          <p className='title-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
          <div className='title-form'>
            <InputGroup className="mb-3 mt-5">
              <Form.Control
                aria-label="Default"
                placeholder='Your Email'
                aria-describedby="inputGroup-sizing-default"
                style={{ borderRadius: '30px' }}
              />
              <InputGroup.Text id="inputGroup-sizing-default" style={{ backgroundColor: '#54524f', borderRadius: '20px', color: '#fff', marginLeft: '-30px', fontWeight: 'bold', zIndex: '1' }}>
                SUBSCRIBE
              </InputGroup.Text>
            </InputGroup>
          </div>
        </div>
      </div>
    </>
  )
}
