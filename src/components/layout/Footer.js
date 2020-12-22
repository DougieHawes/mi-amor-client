import "./style.min.css";

import { Button1 } from "../utils/buttons";
import { Input1 } from "../utils/inputs";

const Footer = () => (
  <footer className="footer">
    <div className="footer-section">
      <h4 className="footer-section-title">Newsletter Signup</h4>
      <form className="newsletter-submit">
        <Input1 type="text" placeholder="enter email..." />
        <Button1 icon="fas fa-pen-nib" />
      </form>
      <div className="social-logos">
        <i className="social-logo fab fa-facebook-f" />
        <i className="social-logo fab fa-twitter" />
        <i className="social-logo fab fa-instagram" />
        <i className="social-logo fab fa-youtube-square" />
        <i className="social-logo fab fa-comment" />
      </div>
    </div>
    <div className="footer-section">
      <h4 className="footer-section-title">Mi Amor</h4>
      <ul className="footer-links">
        <li className="footer-link">About Us</li>
        <li className="footer-link">FAQ's</li>
        <li className="footer-link">Contact Us</li>
        <li className="footer-link">Privacy Policy</li>
        <li className="footer-link">Cookie Policy</li>
      </ul>
    </div>
    <div className="footer-section">
      <h4 className="footer-section-title">Orders</h4>
      <ul className="footer-links">
        <li className="footer-link">Gift Vouchers</li>
        <li className="footer-link">Delivery & Returns</li>
        <li className="footer-link">Payment & Security</li>
        <li className="footer-link">Rewards Program</li>
      </ul>
    </div>
    <div className="footer-section">
      <h4 className="footer-section-title">Our Store</h4>
      <ul className="footer-links">
        <li className="footer-link">Hair Colour Match</li>
        <li className="footer-link">Hair Extensions Q&A</li>
        <li className="footer-link">Video Tutorials</li>
        <li className="footer-link">Clip-In Guide</li>
        <li className="footer-link">Affiliates</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
