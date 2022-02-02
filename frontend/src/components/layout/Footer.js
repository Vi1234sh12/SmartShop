import React, { Fragment } from 'react'
import styled from 'styled-components'


const Footer = () => {
    return (
        <Fragment>
            <FooterContainer className="main-footer">
            <div className="footer-middle">
            <div className="container">
            <img src="/images/Smart_logo.png" height="100" margin="left" />
            <br />
            <br />
            <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
            <h4> About </h4>
            <ul className="list-unstyled">
               <li><a href="#">Contact Us</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Shoopi Stories</a></li>
                <li><a href="#">Corporate Infromation</a></li>
                <li><a href="#">Shoopi Wholesale</a></li>
            </ul>
            </div>
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
            <h4> Help </h4>
            <ul className="list-unstyled">
                <li><a href="#">Payments</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Cancellation</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Report Infringement</a></li>
            </ul>
            </div>
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
            <h4> Policy </h4>
            <ul className="list-unstyled">
                <li><a href="#">Return Policy</a></li>
                <li><a href="#">Terms of Use </a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">ERP Compliance</a></li>
            </ul>
            </div>
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
            <h4> Social </h4>
            <ul className="list-unstyled">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">YouTube</a></li>
                <li><a href="#">LinkedIn</a></li>
               
            </ul>
            </div>
            
           
            </div>
           
            {/* Footer Bottom */}
            <div className="footer-bottom">
            <p className="text-xs-center">
            &copy;{new Date().getFullYear()} City Guide Application - All rights reserved
            </p>
            </div>
            </div>
            </div>
            </FooterContainer>
        </Fragment>
    )
}

export default Footer


const FooterContainer = styled.footer`
  .footer-middle{
       background:var(--mainDark);
       padding-top:3rem;
       color:var(--mainWhite);
   }

   .footer-bottom{
       padding-top:3rem;
       padding-bottom:2rem;
   }

   ul li a {
       color:var(--mainGrey);
   }

   ul li a:hover{
       color:var(--mainLightGrey);
   }

`;
