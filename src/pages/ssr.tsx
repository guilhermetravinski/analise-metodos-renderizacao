// pages/ssr.tsx
import { GetServerSideProps } from 'next';
import { Product } from '../../types';
import { fetchProducts } from '../lib/fetchProducts';

const SSRPage = ({ products }: { products: Product[] }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Server-Side Rendering (SSR)</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p>{product.description}</p>
            <p className="text-lg font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await fetchProducts();
  return {
    props: {
      products,
    },
  };
};

export default SSRPage;
