import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

export default function Menu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div>
                <div className='container mt-5'>
                    <h1 className='menu-heading'>Lorem Ipsum  Dolor</h1>
                    <p className='menu-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
                </div>
                <div className='container mb-5'>
                    <Row xs={1} md={3} className="g-4">
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <Col>
                                <Card.Img variant="top" src="./assets/images/menu-image-3.png" />
                                <Card.Body>
                                    <Card.Title className='text-center pt-4'>Lorem ipsum</Card.Title>
                                    <Card.Text className='text-center pt-2'>
                                        Lorem ipsum dolor sit amet,<br />
                                        consectetur  adipisicing...
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        ))}
                    </Row>
                    <div className='text-center mt-5'>
                        <Button
                            variant="dark"
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='mb-5'
                            style={{ fontSize: '20px', fontWeight: 'bold', padding: '5px 30px', borderRadius: '30px' }}
                        >
                            SHOW MORE
                        </Button>
                        <Collapse in={open}>
                            <div id="example-collapse-text">
                                <Row xs={1} md={3} className="g-4">
                                    {Array.from({ length: 3 }).map((_, idx) => (
                                        <Col>
                                            <Card.Img variant="top" src="./assets/images/menu-image-2.png" />
                                            <Card.Body>
                                                <Card.Title className='text-center pt-4'>Lorem ipsum</Card.Title>
                                                <Card.Text className='text-center pt-2'>
                                                    Lorem ipsum dolor sit amet,<br />
                                                    consectetur  adipisicing...
                                                </Card.Text>
                                            </Card.Body>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
            <div className='menu-background'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className='menu-heading-1'>Lorem Ipsum Dolor</h1>
                        </div>
                        <div className='col-md-6'>
                            <p className='menu-para-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex quia voluptas sit aspernatur
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <p className='menu-para-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='text-center'>

                        <Button
                            className='mt-5 mb-4'
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            style={{ color: '#27292c', fontSize: '18px', fontWeight: 'bold', borderRadius: '20px', padding: '5px 30px', marginLeft: '50px', backgroundColor: '#fff' }}
                        >
                            MORE INFO
                        </Button>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className='text-white pb-5'>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                labore wes anderson cred nesciunt sapiente ea proident.
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                labore wes anderson cred nesciunt sapiente ea proident.
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                labore wes anderson cred nesciunt sapiente ea proident.
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                labore wes anderson cred nesciunt sapiente ea proident.
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                labore wes anderson cred nesciunt sapiente ea proident.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        </>
    )
}
