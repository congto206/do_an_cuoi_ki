import React from "react";

const PopUpModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={product.image} alt={product.name} className="popup-image" />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">Giá: {product.price}₫</p>
      </div>
    </div>
  );
};
<style>
{`
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background: none;
}

.popup-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.price {
  font-weight: bold;
  color: red;
}

`}
</style>

export default PopUpModal;
