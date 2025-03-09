import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center p-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact</h5>
            <p><FaMapMarkerAlt /> Address: 123 Đường ABC, Quận 1, TP.HCM</p>
            <p><FaPhone /> Phone: (012) 345-6789</p>
            <p><FaEnvelope /> Email: info@congty.com</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a href="https://www.facebook.com" className="text-white mx-2">
                <FaFacebook size={30} />
              </a>
              <a href="https://www.twitter.com" className="text-white mx-2">
                <FaTwitter size={30} />
              </a>
              <a href="https://www.instagram.com" className="text-white mx-2">
                <FaInstagram size={30} />
              </a>
            </div>
          </Col>
          <Col md={4}>
            <h5>Working Hours</h5>
            <p>Monday - Saturday: 8:00 AM - 6:00 PM</p>
            <p>Sunday: Closed</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
