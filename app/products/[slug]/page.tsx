"use client";

import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Any } from 'next-sanity';

interface Product {
  _id: string;
  name: string;
  imageUrl: string;
  details: string;
  price: number;
  size: string;
  stock: number;
  quantity?: number; 
}

export default function Product() {
  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]); // Local cart state
  const { slug } = useParams();
  const id = slug;

  
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const query = `*[_type == 'product' ]{
          _id,
          name,
          "imageUrl": image.asset->url,
          details,
          price,
          size,
          stock
        }`;
        try {
          const response = await client.fetch(query);
          const index = response.findIndex((item: Any) => item._id == id);
          const data = response[index];
          setProduct(data || null);
        } catch (error) {
          console.error('Error fetching product:', error);
          setProduct(null);
        }
      };

      fetchData();
    }
  }, [id]);

  
  const handleAddToCart = () => {
    if (product) {
      setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item._id === product._id);
        if (existingProduct) {
          
          return prevCart.map((item) =>
            item._id === product._id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          );
        }
        // Add new product to the cart
        return [...prevCart, { ...product, quantity: 1 }];
      });
      alert(`${product.name} has been added to your cart.`);
    }
  };

  
  console.log('Cart:', cart);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-medium text-gray-700">Product not found</h1>
      </div>
    );
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          {/* Left side: Product Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={400}
              height={300}
              className="rounded-lg object-cover"
              layout="responsive"
            />
          </div>
          {/* Right side: Product Details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="leading-relaxed text-base text-gray-700 mb-4">{product.details}</p>
            <div className="flex items-center space-x-4 mb-4">
              <h2 className="text-2xl font-medium text-indigo-600">${product.price}</h2>
              <span className="text-lg text-gray-500">Size: {product.size}</span>
            </div>
            <div className="text-lg text-gray-700 mb-6">
              {product.stock > 0 ? (
                <span className="text-green-500">In Stock</span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </div>
            <button
              className="text-white bg-indigo-500 py-3 px-6 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300"
              onClick={handleAddToCart}
              disabled={product.stock === 0} // Disable button if out of stock
            >
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
