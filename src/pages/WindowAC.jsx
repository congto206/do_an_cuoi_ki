import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

const WindowAC = () => {
    const navigate = useNavigate();
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const products = [
        { id: 1, name: "Máy lạnh tủ đứng Samsung Inverter 5 HP AC048BNPDKC/TC 3 Pha", category: "window", image: "/images/maylanhcua1.jpg", price: "$500" },
        { id: 2, name: "Máy lạnh tủ đứng LG Inverter 4 HP ZPNQ36LR5A0 (3 Pha)", category: "window", image: "/images/maylanhcua2.jpg", price: "$450" },
        { id: 3, name: "Máy lạnh tủ đứng Samsung Inverter 4 HP AC048BNPDKC/TC 3 Pha", category: "window", image: "/images/maylanhcua3.jpg", price: "$600" },

    ];

    return (
        <>
            <NavbarComponent />
            <Container className="mt-4">
                <h2 className="text-center text-primary fw-bold">🏢 Điều hòa cửa sổ</h2>
                <Row className="mt-4">
                    {products.map((product) => (
                        <Col key={product.id} lg={4} md={6} sm={12} className="mb-4">
                            <Card className="shadow-lg border-0">
                                <Card.Img variant="top" src={product.image} className="product-img" />
                                <Card.Body className="text-center">
                                    <Card.Title className="fw-bold">{product.name}</Card.Title>
                                    <Card.Text className="text-danger fs-5 fw-bold">{product.price}</Card.Text>
                                    <Button
                                        variant="primary"
                                        className="mt-2"
                                        onClick={() => navigate(`/product/${product.id}`)}
                                    >
                                        🔍 Xem chi tiết
                                    </Button>
                                    <Button variant="success" className="m-2 btn-custom" onClick={() => navigate(`/product/${product.id}`)}>
                                        🛒 Mua ngay
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    ⬆️ Lên đầu trang
                </button>
            )}

            <style>
                {`
                
                .content-container {
                    padding-top: 80px; /* Điều chỉnh khoảng cách xuống dưới */
                    }

                    /* Tiêu đề nổi bật */
                    .title {
                    font-size: 2rem;
                    font-weight: bold;
                    color: #007bff;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
                    }

                    /* Ảnh sản phẩm */
                    .product-img {
                    height: 250px;
                    object-fit: cover;
                    border-radius: 10px;
                    }

                    /* Card sản phẩm */
                    .product-card {
                    border: none;
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                    }

                    .product-card:hover {
                    transform: scale(1.05);
                    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
                    }

                    /* Nút bấm */
                    .btn-custom {
                    background-color: #28a745;
                    border: none;
                    }

                    .btn-custom:hover {
                    background-color: #218838;
                    }
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
                        transition: opacity 0.3s;
                    }

                    .back-to-top:hover {
                        background-color: #0056b3;
                    }
                `}
            </style>
        </>
    );
};

export default WindowAC;
