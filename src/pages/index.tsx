// pages/index.tsx
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">E-commerce Site</h1>
      <div className="flex space-x-4">
        <Link href="/csr" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Client-Side Rendering (CSR)
        </Link>
        <Link href="/ssg" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Static Site Generation (SSG)
        </Link>
        <Link href="/ssr" className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Server-Side Rendering (SSR)
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
