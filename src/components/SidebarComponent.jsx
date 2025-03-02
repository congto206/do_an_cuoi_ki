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
      <h4 className="text-center fw-bold py-3">📌 Danh mục sản phẩm</h4>
      <ListGroup variant="flush">
        {menuItems.map((item) => (
          <ListGroup.Item
            key={item.id}
            action
            onClick={() => navigate(`#${item.id}`)}
            className="sidebar-item d-flex align-items-center"
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <style>
        {`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 280px;
          height: 100vh;
          background: linear-gradient(135deg, #2c3e50, #34495e);
          padding: 20px;
          color: white;
          overflow-y: auto;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
        }
        .sidebar h4 {
          font-size: 1.3rem;
          color: #f1c40f;
          border-bottom: 2px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 10px;
        }
        .sidebar-item {
          font-size: 1.1rem;
          color: white;
          padding: 12px 15px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: 5px;
        }
        .sidebar-item .icon {
          font-size: 1.5rem;
          color: #f1c40f;
        }
        .sidebar-item .label {
          flex-grow: 1;
        }
        .sidebar-item:hover {
          background: linear-gradient(135deg, #1abc9c, #16a085);
          transform: scale(1.05);
          color: white;
        }
        `}
      </style>
    </div>
  );
};

export default SidebarComponent;
