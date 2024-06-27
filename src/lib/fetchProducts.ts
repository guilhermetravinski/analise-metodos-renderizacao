// lib/fetchProducts.ts
import { Product } from '../../types';

export const fetchProducts = async (): Promise<Product[]> => {
  // Simular um delay artificial
  await new Promise(resolve => setTimeout(resolve, 2000));
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await res.json();
  return data.map((item: any) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    price: item.price,
  }));
};
