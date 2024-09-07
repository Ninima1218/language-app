import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import instagramIcon from '../images/instagram.png';
import linkedinIcon from '../images/linkedin.png';
import '../../fonts/fonts.css';

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 SPEAK UP</p>
      <div className="contact-links">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><a href="mailto:ninima1218@gmail.com">Email Us</a></li>
                        <li><a href="tel:+995598557323">Call Us</a></li>
                        <li><Link to="/contact">Contact Form</Link></li>
                    </ul>
      </div>
      <div className="social-media">
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/no_mark_8/" target="_blank" rel="noopener noreferrer">
                                <img src={instagramIcon} alt="Instagram" className="social-icon" /> Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/nino-markarovi-7a729929b/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinIcon} alt="LinkedIn" className="social-icon" /> LinkedIn
                            </a>
                        </li>
                        {/* Add other contact links if needed */}
                    </ul>
     </div>
               
    </footer>
  );
}

export default Footer;