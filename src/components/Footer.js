import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faHome, 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-about">
            <h4><FontAwesomeIcon icon={faHome} className="me-2" /> EstateEase</h4>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> 123 Main Street, Anytown, AT1 2BC</p>
            <p><FontAwesomeIcon icon={faPhone} className="me-2" /> +44 1234 567890</p>
            <p><FontAwesomeIcon icon={faEnvelope} className="me-2" /> contact@estateease.com</p>
          </div>
          <div className="col-md-4 footer-description">
            <h4>About Us</h4>
            <p>EstateEase is your trusted partner in finding the perfect property. We use cutting-edge technology to make your property search seamless and enjoyable.</p>
          </div>
          <div className="col-md-4 footer-social text-md-end">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/_mr_2001__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/in/pavith-bambaravanage-465300293/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 footer-bottom">
            <p>© {new Date().getFullYear()} EstateEase. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;