"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { api } from "@/lib/axios";
import { useCartStore } from "@/components/utills/store/cartStore";
import { useWishlistStore } from "@/components/utills/store/wishlistStore";
import Image from "next/image";
import Button from "@/components/share/Button";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCartStore();
  const { toggleWishlist, wishlist } = useWishlistStore();

  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await api.get(`/product/${id}`);
        console.log("Product:", res.data);
        setProduct(res.data);
      } catch (error) {
        console.error("Product fetch error:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const isWishlisted = wishlist.some((i) => i._id === product._id);

  // ✅ FIX IMAGE SOURCE
  const imageUrl = product.images?.length
    ? `http://localhost:8080${product.images[0]}`
    : product.image
      ? `http://localhost:8080${product.image}`
      : "/no-image.png";

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* ✅ FIX title */}
      <h1 className="text-2xl font-bold">{product.title}</h1>

      <Image
        src={imageUrl || "/no-image.png"}
        width={500}
        height={500}
        alt={product.title}
        className="object-contain"
        unoptimized
      />
      <p className="text-xl font-semibold">${product.price}</p>

      {/* Quantity */}
      <div className="flex gap-2 my-4">
        <Button
          title="-"
          style="bg-gray-500 p-2 hover:cursor-pointer"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        />
        <span>{quantity}</span>
        <Button
          title="+"
          style="bg-gray-500 p-2 hover:cursor-pointer"
          onClick={() => setQuantity((q) => q + 1)}
        />
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <Button
          title=" Add to Cart"
          style="Button"
          onClick={() =>
            addToCart({
              _id: product._id,
              name: product.title, // ✅ FIX
              price: product.price,
              image: imageUrl, // ✅ FIX
              quantity,
            })
          }
        />

        <button
          onClick={() =>
            toggleWishlist({
              _id: product._id,
              name: product.title, // ✅ FIX
              price: product.price,
              image: imageUrl, // ✅ FIX
            })
          }
          className="border px-4 py-2 rounded"
        >
          {isWishlisted ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
