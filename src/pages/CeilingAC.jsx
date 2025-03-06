import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import products from "../data/products.json";
import { debounce } from "lodash";
import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";
import Footer from "../components/Footer";


const CeilingAC = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  const debouncedHandleScroll = useMemo(() => {
    return debounce(() => {
      setShowButton(window.scrollY > 300);
    }, 200);
  }, [setShowButton]);
  
  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [debouncedHandleScroll]);
  


  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.category === "ceiling" &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (priceFilter === "all" || product.price <= priceFilter)
  );

  return (
    <>
      <NavbarComponent />
      <Container className="mt-4">
        <h2 className="text-center title">Ceiling AC</h2>
        
        {/* Thanh tìm kiếm và bộ lọc giá */}
        <div className="filter-bar">
          <Form.Control
            type="text"
            placeholder="🔍 Search products..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Form.Select className="price-filter" value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
            <option value="all">All Prices</option>
            <option value="500">Up to $500</option>
            <option value="1000">Up to $750</option>
            <option value="2000">Up to $1000</option>
          </Form.Select>
        </div>

        <Row className="mt-4">
          {filteredProducts.map((product) => (
            <Col key={product.id} lg={4} md={6} sm={12} className="mb-4">
              <Card className="product-card">
                <Card.Img variant="top" src={product.image} className="product-img" />
                <Card.Body className="text-center d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold">{product.name}</Card.Title>
                  <Card.Text className="text-danger fs-5 fw-bold">${product.price}</Card.Text>
                  <div className="button-group mt-auto">
                    <Button variant="primary" className="details-btn" onClick={() => navigate(`/product/${product.id}`)}>
                      <FaInfoCircle /> Details
                    </Button>
                    <Button variant="success" className="buy-btn" onClick={() => navigate(`/product/${product.id}`)}>
                      <FaShoppingCart /> Buy
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {showButton && <button onClick={scrollToTop} className="back-to-top">⬆️</button>}

      <style>
        {`
        /* Tiêu đề nổi bật */
        .title {
          font-size: 2rem;
          font-weight: bold;
          color: #007bff;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }

        /* Thanh tìm kiếm & bộ lọc */
        .filter-bar {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          justify-content: center;
        }

        .search-input {
          width: 40%;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid #ddd;
        }

        .price-filter {
          padding: 10px;
          border-radius: 10px;
          border: 1px solid #ddd;
        }

        /* Ảnh sản phẩm */
        .product-img {
          height: 250px;
          object-fit: cover;
          border-radius: 10px;
        }

        /* Card sản phẩm - Glassmorphism */
        .product-card {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease-in-out;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .product-card:hover {
          transform: scale(1.05);
        }

        /* Định dạng nút */
        .button-group {
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }

        .buy-btn, .details-btn {
          flex: 1;
          padding: 10px;
        }

        .buy-btn {
          background-color: #28a745;
          border: none;
        }

        .buy-btn:hover {
          background-color: #218838;
        }

        .details-btn {
          background-color: #007bff;
          border: none;
        }

        .details-btn:hover {
          background-color: #0056b3;
        }

        /* Nút cuộn lên đầu trang */
        .back-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
        }
        `}
      </style>
      <Footer />

    </>
  );
};

export default CeilingAC;