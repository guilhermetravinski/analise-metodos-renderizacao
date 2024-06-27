// pages/csr.tsx
import { useState, useEffect } from 'react';
import { Product } from '../../types';
import { fetchProducts } from '../lib/fetchProducts';

const CSRPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Client-Side Rendering (CSR)</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map(product => (
            <div key={product.id} className="border p-4 rounded">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p>{product.description}</p>
              <p className="text-lg font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CSRPage;
