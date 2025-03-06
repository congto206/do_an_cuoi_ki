import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="card shadow-sm">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Giá: {product.price} $</p>
        <Link to={`/product/${product.id}`} className="btn btn-primary w-100">
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
