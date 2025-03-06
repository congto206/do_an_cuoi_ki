import React from "react";
import { Container, Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSnowflake } from "react-icons/fa";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";


const Home = () => {
  const navigate = useNavigate();

  const styles = {
    banner: {
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "450px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      textAlign: "center",
      borderRadius: "12px",
      overflow: "hidden",
    },
    bannerText: {
      position: "relative",
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#ffffff",
      fontFamily: "'Montserrat', sans-serif",
      textShadow: "3px 3px 10px rgba(0,0,0,0.5)",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#0056b3",
      fontFamily: "'Poppins', sans-serif",
      marginBottom: "20px",
      textAlign: "center",
      textTransform: "uppercase",
    },
    paragraph: {
      fontSize: "1.2rem",
      color: "#333",
      fontFamily: "'Poppins', sans-serif",
      maxWidth: "750px",
      margin: "0 auto",
      lineHeight: "1.6",
      textAlign: "center",
    },
    button: {
      fontSize: "1.2rem",
      padding: "12px 30px",
      fontFamily: "'Montserrat', sans-serif",
      borderRadius: "8px",
      background: "linear-gradient(135deg, #0056b3, #004494)",
      border: "none",
      transition: "all 0.3s ease",
      color: "white",
      boxShadow: "0px 4px 10px rgba(0, 86, 179, 0.3)",
    },
    buttonHover: {
      background: "linear-gradient(135deg, #004494, #003377)",
      transform: "scale(1.05)",
      boxShadow: "0px 6px 14px rgba(0, 86, 179, 0.5)",
    },
    icon: {
      color: "#004494",
      margin: "0 8px",
    },
  };

  const handleMouseEnter = (e) => {
    e.target.style.background = styles.buttonHover.background;
    e.target.style.transform = styles.buttonHover.transform;
    e.target.style.boxShadow = styles.buttonHover.boxShadow;
  };

  const handleMouseLeave = (e) => {
    e.target.style.background = styles.button.background;
    e.target.style.transform = "none";
    e.target.style.boxShadow = styles.button.boxShadow;
  };

  return (
    <>
      <NavbarComponent />

      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <div style={{ ...styles.banner, backgroundImage: "url('/images/banner.jpg')" }}>
            <div style={styles.bannerOverlay}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ ...styles.banner, backgroundImage: "url('/images/banner2.jpg')" }}>
            <div style={styles.bannerOverlay}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ ...styles.banner, backgroundImage: "url('/images/banner3.jpg')" }}>
            <div style={styles.bannerOverlay}></div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Main Content */}
      <Container className="text-center mt-5">
        <h2 style={styles.heading}>
          <FaSnowflake style={styles.icon} /> Điều hòa chính hãng, giá tốt! <FaSnowflake style={styles.icon} />
        </h2>
        <p style={styles.paragraph}>
          Chúng tôi cung cấp các dòng điều hòa <strong>tiết kiệm điện</strong>, <strong>bền bỉ</strong> và <strong>chính hãng</strong> với giá cả cạnh tranh nhất.
        </p>
        <Button
          style={styles.button}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate("/products")}
        >
          <FaShoppingCart /> Xem sản phẩm
        </Button>
      </Container>
      <Footer />

    </>
  );
};

export default Home;
