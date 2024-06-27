// pages/ssg.tsx
import { GetStaticProps } from 'next';
import { Product } from '../../types';
import { fetchProducts } from '../lib/fetchProducts';

const SSGPage = ({ products }: { products: Product[] }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Static Site Generation (SSG)</h1>
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

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts();
  return {
    props: {
      products,
    },
    revalidate: 10, // Revalida a cada 10 segundos (opcional)
  };
};

export default SSGPage;
