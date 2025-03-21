import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <>
      <NavbarComponent /> {/* Thêm navbar vào đây */}
      <div className="login-container d-flex align-items-center justify-content-center">
        <Container fluid>
          <Row className="vh-100 align-items-center justify-content-center">
            <Col md={8} className="shadow-lg rounded-4 overflow-hidden login-box d-flex">
              {/* Logo */}
              <div className="logo-container d-flex align-items-center justify-content-center bg-dark w-50">
                <img src="/images/logo.jpg" alt="Logo" className="img-fluid" style={{ maxWidth: "280px" }} />
              </div>

              {/* Form đăng nhập */}
              <div className="p-5 w-50">
                <h2 className="fw-bold text-center mb-4">Login</h2>
                <Form onSubmit={handleLogin}>
                  {/* Email */}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaEnvelope />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ height: "60px", fontSize: "1.2rem" }}
                      />
                    </InputGroup>
                  </Form.Group>

                  {/* Password */}
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaLock />
                      </InputGroup.Text>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ height: "60px", fontSize: "1.2rem" }}
                      />
                    </InputGroup>
                  </Form.Group>

                  {/* Forgot password */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                  <a href="#" className="text-decoration-none text-dark fw-bold">Forgot password?</a>
                  </div>
                  {/* Login button */}
                  <Button variant="dark" type="submit" className="w-100 py-3 fw-bold">
                    Login
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Login;
