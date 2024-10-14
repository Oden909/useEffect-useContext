import React from 'react';
import Stars from './Stars';

const Product = ({ product, onRemove }) => {
  const { thumbnail, title, price, rating } = product;

  return (
    <div className="product-card" onDoubleClick={() => onRemove(product.id)}>
      <img src={thumbnail} alt={title} className="product-image" />
      <div className="product-details">
        <h2>{title}</h2>
        <p>Price: ${price}</p>
        <Stars rating={rating} />
      </div>
    </div>
  );
};

export default Product;
