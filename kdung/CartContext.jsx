import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Pagination, ListGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

const categories = [
  { key: "best", title: "🔥 Điều hòa bán chạy nhất" },
  { key: "window", title: "🏠 Điều hòa cửa sổ" },
  { key: "split", title: "❄ Điều hòa treo tường" },
  { key: "ceiling", title: "🏢 Điều hòa âm trần" },
];

const brands = ["Daikin", "Panasonic", "LG", "Mitsubishi", "Toshiba"];

const products = [
  { id: 1, name: "Daikin Inverter 1.5 HP", category: "split", brand: "Daikin", price: 500 },
  { id: 2, name: "Panasonic Inverter 1HP", category: "split", brand: "Panasonic", price: 450 },
  { id: 3, name: "LG DualCool 2HP", category: "window", brand: "LG", price: 600 },
  { id: 4, name: "Mitsubishi Electric 2 HP", category: "split", brand: "Mitsubishi", price: 520 },
  { id: 5, name: "Toshiba Inverter 1HP", category: "best", brand: "Toshiba", price: 430 },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  
  const filteredProducts = products.filter((product) => {
    return (
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedBrand || product.brand === selectedBrand) &&
      (!minPrice || product.price >= minPrice) &&
      (!maxPrice || product.price <= maxPrice)
    );
  });

  return (
    <>
      <NavbarComponent />
      <Container className="mt-4">
        <h2 className="text-center text-primary fw-bold">❄️ Danh sách điều hòa ❄️</h2>
        
        <Row>
          <Col md={3}>
            <h4 className="fw-bold">Bộ lọc</h4>
            <Form>
              <Form.Group>
                <Form.Label>Danh mục</Form.Label>
                <Form.Select onChange={(e) => setSelectedCategory(e.target.value)}>
                  <option value="">Tất cả</option>
                  {categories.map(({ key, title }) => (
                    <option key={key} value={key}>{title}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              
              <Form.Group className="mt-3">
                <Form.Label>Thương hiệu</Form.Label>
                <Form.Select onChange={(e) => setSelectedBrand(e.target.value)}>
                  <option value="">Tất cả</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              
              <Form.Group className="mt-3">
                <Form.Label>Giá từ</Form.Label>
                <Form.Control type="number" onChange={(e) => setMinPrice(e.target.value)} />
              </Form.Group>
              
              <Form.Group className="mt-3">
                <Form.Label>Đến</Form.Label>
                <Form.Control type="number" onChange={(e) => setMaxPrice(e.target.value)} />
              </Form.Group>
            </Form>
          </Col>

          <Col md={9}>
            <Row>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Col key={product.id} md={4} className="mb-4">
                    <Card>
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>Giá: ${product.price}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <p className="text-center">Không tìm thấy sản phẩm nào</p>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;


const products = [
  { id: 1, name: "Daikin Inverter 1.5 HP", category: "split", image: "/images/daikin1.jpg", price: "$500" },
  { id: 2, name: "Panasonic Inverter 1HP", category: "split", image: "/images/daikin2.jpg", price: "$450" },
  { id: 3, name: "LG DualCool 2HP", category: "split", image: "/images/daikin3.jpg", price: "$600" },
  { id: 4, name: "Mitsubishi Electric 2 HP", category: "split", image: "/images/lg1.jpg", price: "$520" },
  { id: 5, name: "Toshiba Inverter 1HP", category: "split", image: "/images/lg2.jpg", price: "$430" },
  { id: 6, name: "Daikin Inverter 1.5 HP", category: "split", image: "/images/lg3.jpg", price: "$500" },
  { id: 7, name: "Panasonic Inverter 1HP", category: "window", image: "/images/maylanhcua1.jpg", price: "$450" },
  { id: 8, name: "LG DualCool 2HP", category: "window", image: "/images/maylanhcua2.jpg", price: "$600" },
  { id: 9, name: "Mitsubishi Electric 2 HP", category: "split", image: "/images/panasonic1.jpg", price: "$520" },
  { id: 10, name: "Toshiba Inverter 1HP", category: "split", image: "/images/panasonic2.jpg", price: "$430" },
  { id: 11, name: "Daikin Inverter 1.5 HP", category: "split", image: "/images/panasonic3.jpg", price: "$500" },
  { id: 12, name: "Panasonic Inverter 1HP", category: "ceiling", image: "/images/sanphamamtuong1.jpg", price: "$450" },
  { id: 13, name: "LG DualCool 2HP", category: "ceiling", image: "/images/sanphamamtuong2.jpg", price: "$600" },
  { id: 14, name: "Mitsubishi Electric 2 HP", category: "ceiling", image: "/images/sanphamamtuong3.jpg", price: "$520" },
  { id: 15, name: "Máy lạnh âm trần Samsung Inverter 3.5 HP AC100TN4DKC/EA (3 Pha)", category: "ceiling", image: "/images/sanphamamtuong4.jpg", price: "$600" },
  { id: 16, name: "Máy lạnh âm trần 1 hướng LG Inverter 2 HP ZTNQ18GTLA0", category: "ceiling", image: "/images/sanphamamtuong5.jpg", price: "$600" },
  { id: 17, name: "Máy lạnh âm trần Samsung Inverter 3.5 HP AC100TN4DKC/EA", category: "ceiling", image: "/images/sanphamamtuong6.jpg", price: "$600" },
  { id: 18, name: "Toshiba Inverter 1HP", category: "best", image: "/images/panasonic1.jpg", price: "$430" },
  { id: 19, name: "Toshiba Inverter 1HP", category: "window", image: "/images/maylanhcua3.jpg", price: "$430" },
  { id: 20, name: "Toshiba Inverter 1HP", category: "best", image: "/images/panasonic1.jpg", price: "$430" },
  { id: 21, name: "Toshiba Inverter 1HP", category: "best", image: "/images/sanphamamtuong3.jpg", price: "$430" },
  { id: 21, name: "Toshiba Inverter 1HP", category: "best", image: "/images/lg3.jpg", price: "$430" },
  { id: 22, name: "Toshiba Inverter 1HP", category: "best", image: "/images/maylanhcua3.jpg", price: "$430" },

];