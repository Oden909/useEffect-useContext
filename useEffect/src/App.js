import React, { useEffect, useState } from 'react';
import Product from './components/Product';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleRemove = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <div className="product-grid">
        {products.map((product) => (
          <Product key={product.id} product={product} onRemove={handleRemove} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
