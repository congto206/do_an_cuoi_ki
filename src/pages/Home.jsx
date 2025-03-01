import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSnowflake } from "react-icons/fa";
import NavbarComponent from "../components/NavbarComponent";

const Home = () => {
  const navigate = useNavigate();


  // Style cải tiến với hiệu ứng mượt mà
  const styles = {
    banner: {
      backgroundImage: "url('/images/banner.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "450px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      textAlign: "center",
    },
    bannerOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7))",
    },
    bannerText: {
      position: "relative",
      fontSize: "3rem",
      fontWeight: "bold",
      color: "white",
      fontFamily: "'Montserrat', sans-serif",
      textShadow: "3px 3px 8px rgba(0,0,0,0.6)",
      animation: "fadeIn 1.2s ease-in-out",
    },
    heading: {
      fontSize: "2.2rem",
      fontWeight: "bold",
      color: "#007bff",
      fontFamily: "'Poppins', sans-serif",
      marginBottom: "15px",
    },
    paragraph: {
      fontSize: "1.3rem",
      color: "#444",
      fontFamily: "'Poppins', sans-serif",
      maxWidth: "700px",
      margin: "0 auto",
    },
    button: {
      fontSize: "1.2rem",
      padding: "12px 25px",
      fontFamily: "'Montserrat', sans-serif",
      borderRadius: "8px",
      background: "#007bff",
      border: "none",
      transition: "all 0.3s ease",
    },
    buttonHover: {
      background: "#0056b3",
      transform: "scale(1.05)",
    },
  };

 

  return (
    <>
      <NavbarComponent />

      {/* Banner */}
      <div style={styles.banner}>
        <div style={styles.bannerOverlay}></div>
        <h1 style={styles.bannerText}>Chào mừng đến với cửa hàng điều hòa! ❄️</h1>
      </div>

      {/* Nội dung chính */}
      <Container className="text-center mt-5">
        <h2 style={styles.heading}>
          <FaSnowflake color="#007bff" /> Điều hòa chất lượng, giá tốt! <FaSnowflake color="#007bff" />
        </h2>
        <p style={styles.paragraph}>
          Chúng tôi cung cấp các dòng điều hòa chính hãng, tiết kiệm điện và bền bỉ.
        </p>
        <Button variant="primary" style={styles.button} onClick={() => navigate("/products")}>
          <FaShoppingCart /> Xem sản phẩm
        </Button>
      </Container>

      
    </>
  );
};

export default Home;
