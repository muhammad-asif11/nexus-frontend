"use client";
import React, { useState } from "react";

type Props = {
  images: string[];
};

const ProductImages: React.FC<Props> = ({ images }) => {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-3">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setSelected(img)}
            className={`w-20 h-20 object-cover rounded cursor-pointer border ${
              selected === img ? "border-red-500" : ""
            }`}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1">
        <img
          src={selected}
          className="w-full h-[400px] object-contain bg-gray-100 rounded"
        />
      </div>
    </div>
  );
};

export default ProductImages;