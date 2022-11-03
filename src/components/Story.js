import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


export default function Story() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className='container story-1'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Card.Img variant="top" src="./assets/images/story-image-1.png" className='w-100' />
                    </div>
                    <div className='col-md-6'>
                        <h2 className='story-heading ps-4'>Discount up to<br />
                            50% All Excursions</h2>
                        <p className='story-para ps-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                        <Button
                            variant="dark"
                            className='mt-3 ms-4'
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            style={{ fontSize: '20px', fontWeight: 'bold', padding: '5px 30px', borderRadius: '30px' }}
                        >
                            READ MORE
                        </Button>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className='pt-2'>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                labore wes anderson cred nesciunt sapiente ea proident.
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2 className='story-heading ps-4'>January’s Promo:
                            Buy 1 Get 1 Free!</h2>
                        <p className='story-para ps-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                        <Button
                            variant="dark"
                            className='mt-3 ms-4 mb-3'
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            style={{ fontSize: '20px', fontWeight: 'bold', padding: '5px 30px', borderRadius: '30px' }}
                        >
                            READ MORE
                        </Button>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className='pt-2'>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                labore wes anderson cred nesciunt sapiente ea proident.
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </Collapse>
                    </div>
                    <div className='col-md-6'>
                        <Card.Img variant="top" src="./assets/images/story-image-2.png" className='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
