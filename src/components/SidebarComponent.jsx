import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaFire, FaSnowflake, FaBuilding, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { id: "best", icon: <FaFire />, label: "Điều hòa bán chạy" },
  { id: "window", icon: <FaHome />, label: "Điều hòa cửa sổ" },
  { id: "split", icon: <FaSnowflake />, label: "Điều hòa treo tường" },
  { id: "ceiling", icon: <FaBuilding />, label: "Điều hòa âm trần" },
];

const SidebarComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h4 className="text-center text-light fw-bold py-3">📌 Danh mục sản phẩm</h4>
      <ListGroup variant="flush">
        {menuItems.map((item) => (
          <ListGroup.Item
            key={item.id}
            action
            onClick={() => navigate(`#${item.id}`)}
            className="sidebar-item"
          >
            {item.icon} {item.label}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <style>
        {`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 30%;
          height: 100vh;
          background-color: #2c3e50;
          padding: 10px;
          color: white;
          overflow-y: auto;
        }
        .sidebar-item {
          font-size: 1.1rem;
          color: white;
          padding: 15px;
          cursor: pointer;
          transition: background 0.3s ease-in-out;
        }
        .sidebar-item:hover {
          background: #1abc9c;
        }
        `}
      </style>
    </div>
  );
};

export default SidebarComponent;
