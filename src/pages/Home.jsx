import React from "react";
import { Container, Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSnowflake } from "react-icons/fa";
import NavbarComponent from "../components/NavbarComponent";

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
    bannerOverlay: {
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9))",
    },
    bannerText: {
      position: "relative",
      fontSize: "3rem",
      fontWeight: "bold",
      color: "white",
      fontFamily: "'Montserrat', sans-serif",
      textShadow: "4px 4px 12px rgba(0,0,0,0.6)",
      animation: "fadeIn 1.2s ease-in-out",
    },
    heading: {
      fontSize: "2.8rem",
      fontWeight: "bold",
      color: "#007bff",
      fontFamily: "'Poppins', sans-serif",
      marginBottom: "20px",
      textAlign: "center",
      textTransform: "uppercase",
    },
    paragraph: {
      fontSize: "1.4rem",
      color: "#444",
      fontFamily: "'Poppins', sans-serif",
      maxWidth: "750px",
      margin: "0 auto",
      lineHeight: "1.8",
      textAlign: "center",
    },
    button: {
      fontSize: "1.3rem",
      padding: "14px 35px",
      fontFamily: "'Montserrat', sans-serif",
      borderRadius: "10px",
      background: "linear-gradient(135deg, #007bff, #0056b3)",
      border: "none",
      transition: "all 0.3s ease",
      color: "white",
      boxShadow: "0px 6px 14px rgba(0, 123, 255, 0.3)",
    },
    buttonHover: {
      background: "linear-gradient(135deg, #0056b3, #004494)",
      transform: "scale(1.08)",
      boxShadow: "0px 8px 18px rgba(0, 123, 255, 0.5)",
    },
    icon: {
      color: "#007bff",
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
          <div style={{ ...styles.banner, backgroundImage: "url('/images/banner1.jpg')" }}>
            <div style={styles.bannerOverlay}></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ ...styles.banner, backgroundImage: "url('/images/banner3.jpg')" }}>
            <div style={styles.bannerOverlay}></div>
            <h1 style={styles.bannerText}>Sản phẩm mới về! 🛒</h1>
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
    </>
  );
};

export default Home;
