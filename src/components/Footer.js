import React from 'react'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <h3 className='footer-heading'>TITLE HERE</h3>
                        <p className='footer-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim. </p>
                        <div className='social d-flex text-center'>
                            <div className='social-1'><i className="fab fa-instagram text-white"></i></div>
                            <div className='social-1'><i className="fab fa-facebook-f text-white"></i></div>
                            <div className='social-1'><i className="fab fa-twitter text-white"></i></div>
                            <div className='social-1'><i className="fab fa-whatsapp text-white"></i></div>
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <h3 className='footer-heading'>ABOUT</h3>
                                <h5 className='footer-heading-1'>Histry</h5>
                                <h5 className='footer-heading-1'>Our Team</h5>
                                <h5 className='footer-heading-1'>Brand Guidelines</h5>
                                <h5 className='footer-heading-1'>Terms & Condition</h5>
                                <h5 className='footer-heading-1'>Privacy Policy</h5>
                            </div>
                            <div className='col-md-4'>
                                <h3 className='footer-heading'>SERVICES</h3>
                                <h5 className='footer-heading-1'>How To Order</h5>
                                <h5 className='footer-heading-1'>Our Product</h5>
                                <h5 className='footer-heading-1'>Order Status</h5>
                                <h5 className='footer-heading-1'>Promo</h5>
                                <h5 className='footer-heading-1'>Payment Method</h5>
                            </div>
                            <div className='col-md-4'>
                                <h3 className='footer-heading'>OTHER</h3>
                                <h5 className='footer-heading-1'>Conatct Us</h5>
                                <h5 className='footer-heading-1'>Help</h5>
                                <h5 className='footer-heading-1'>Privacy</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
