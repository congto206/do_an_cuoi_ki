import React from "react";
import { Button } from "react-bootstrap";
import { FaFire, FaSnowflake, FaBuilding, FaHome, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { id: "best", icon: <FaFire />, label: "Điều hòa bán chạy" },
  { id: "window", icon: <FaHome />, label: "Điều hòa cửa sổ" },
  { id: "split", icon: <FaSnowflake />, label: "Điều hòa treo tường" },
  { id: "ceiling", icon: <FaBuilding />, label: "Điều hòa âm trần" },
];

const SidebarComponent = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <Button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </Button>

      <h4 className="text-center fw-bold py-3">📌 Danh mục sản phẩm</h4>
      {menuItems.map((item) => (
        <Button
          key={item.id}
          variant="outline-light"
          className="sidebar-btn d-flex align-items-center"
          onClick={() => {
            navigate(`#${item.id}`);
            toggleSidebar();
          }}
        >
          <span className="icon">{item.icon}</span>
          <span className="label">{item.label}</span>
        </Button>
      ))}

      <style>
        {`
        .sidebar {
          position: fixed;
          top: 0;
          left: -280px;
          width: 280px;
          height: 100vh;
          background: #2c3e50;
          padding: 20px;
          color: white;
          transition: left 0.3s ease-in-out;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
        }

        .sidebar.open {
          left: 0;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: red;
          color: white;
          border: none;
          font-size: 1.2rem;
          padding: 5px 10px;
        }

        .sidebar-btn {
          width: 100%;
          font-size: 1.1rem;
          color: white;
          padding: 12px 15px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: 8px;
          transition: all 0.3s ease-in-out;
          border: 2px solid white;
          background: transparent;
        }

        .sidebar-btn:hover {
          background: #bdc3c7;
          color: #007bff;
          border-color: #007bff;
          transform: scale(1.1);
        }
        `}
      </style>
    </div>
  );
};

export default SidebarComponent;
