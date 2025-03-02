import React from "react";
import { Button } from "react-bootstrap";
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
      
      {menuItems.map((item) => (
        <Button
          key={item.id}
          variant="outline-light"
          className="sidebar-btn d-flex align-items-center"
          onClick={() => navigate(`#${item.id}`)}
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
          left: 0;
          width: 280px;
          height: 100vh;
          background: #2c3e50;
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
          margin-bottom: 15px;
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
          background: #bdc3c7; /* Nền xám nhạt */
          color: #007bff; /* Chữ màu xanh dương */
          border-color: #007bff; /* Viền xanh */
          transform: scale(1.1); /* Phóng to khi hover */
        }
        .sidebar-btn .icon {
          font-size: 1.5rem;
          color: #f1c40f;
          transition: color 0.3s ease-in-out;
        }
        .sidebar-btn:hover .icon {
          color: #007bff; /* Icon đổi màu xanh khi hover */
        }
        .sidebar-btn .label {
          flex-grow: 1;
        }
        `}
      </style>
    </div>
  );
};

export default SidebarComponent;
