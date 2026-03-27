"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";

const Product = () => {
  const [products, setProducts] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/product");
        console.log("Products:", res.data);
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            onClick={() => router.push(`/product/${product._id}`)}
            className="border rounded p-3 cursor-pointer hover:shadow-lg transition"
          >
            <img
              src={
                product.images?.length
                  ? `http://localhost:8080${product.images[0]}`
                  : product.image
                    ? `http://localhost:8080${product.image}`
                    : "/no-image.png"
              }
              alt={product.title}
              className="w-full h-40 object-contain"
            />

            <h2 className="text-sm font-medium mt-2">{product.title}</h2>

            <p className="text-red-500 font-semibold mt-1">${product.price}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Product;
