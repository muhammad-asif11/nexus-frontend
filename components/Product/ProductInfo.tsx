"use client";

import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { useCartStore } from "../utills/store/cartStore";
import { useWishlistStore } from "../utills/store/wishlistStore";

type Props = {
  product: any;
};

const ProductInfo: React.FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");

  const addToCart = useCartStore((state) => state.addToCart);
  const { toggleWishlist, wishlist } = useWishlistStore();

  // ✅ check if already in wishlist
  const isWishlisted = wishlist.some(
    (item: any) => item._id === product._id
  );

  // ✅ safe handler for cart
  const handleAddToCart = () => {
    if (!product) return;

    addToCart({
      _id: product._id,
      name: product.title || product.name,
      price: product.price,
      image: product.image,
      quantity,
    });
  };

  // ✅ wishlist handler
  const handleWishlist = () => {
    toggleWishlist({
      _id: product._id,
      name: product.title || product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div>
      {/* Title */}
      <h1 className="text-2xl font-semibold">
        {product.title || product.name}
      </h1>

      {/* Stock */}
      <p className="text-green-600 text-sm">In Stock</p>

      {/* Price */}
      <p className="text-2xl font-bold my-3">${product.price}</p>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">
        {product.description}
      </p>

      <hr className="my-4" />

      {/* Size */}
      <div className="mb-4">
        <p className="mb-2">Size:</p>
        <div className="flex gap-2">
          {["S", "M", "L"].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-3 py-1 border rounded ${
                size === s ? "bg-red-500 text-white" : ""
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Actions */}
      <div className="flex items-center gap-4 mt-4">
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

        {/* 🛒 Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
        >
          Add to Cart
        </button>

        {/* ❤️ Wishlist */}
        <button
          onClick={handleWishlist}
          className="border px-3 py-2 rounded text-xl"
        >
          {isWishlisted ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;