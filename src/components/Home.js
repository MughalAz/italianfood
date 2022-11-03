import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

export default function Home() {
    const [open, setOpen] = useState(false);
    return (
        <div className='home'>
            <div className='container-fluid pt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Card.Img variant="top" src="./assets/images/logo.png" className='w-25 ms-5' />
                        <h1 className='home-heading pt-5 ps-5'>Italian Food</h1>
                        <p className='home-para ps-5'>LOREMIPSUM DOLOR</p>
                        <Button
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            style={{ color: '#2e3034', fontSize: '18px', fontWeight: 'bold', borderRadius: '20px', padding: '5px 30px', marginLeft: '50px', backgroundColor: '#fff' }}
                        >
                            READ MORE
                        </Button>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className='text-white ms-5 pt-3'>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </Collapse>
                        <p className='home-para-2 ps-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                    <div className='col-md-6'>
                        <Card.Img variant="top" src="./assets/images/home-image.png" className='' style={{ marginTop: '100px', marginBottom: '-100px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
