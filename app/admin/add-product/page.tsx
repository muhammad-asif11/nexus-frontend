"use client";

import { useState } from "react";
import { api } from "@/lib/axios";
import Button from "@/components/share/Button";
import { Icon } from "@/components/share/Icon";
import FormField from "@/components/forms/FormField";
import FormTextarea from "@/components/forms/FormTextarea";

const AddProduct = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
  });

  const [images, setImages] = useState<File[]>([]);
  const [preview, setPreview] = useState<string[]>([]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Handle multiple images
  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files: File[] = Array.from(e.target.files || []);

    const newImages = [...images, ...files];
    setImages(newImages);

    const newPreview = files.map((file) => URL.createObjectURL(file));

    setPreview((prev) => [...prev, ...newPreview]);
  };

  // ❌ Remove image
  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    const updatedPreview = preview.filter((_, i) => i !== index);

    setImages(updatedImages);
    setPreview(updatedPreview);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // ✅ Append multiple images
      images.forEach((img) => {
        formData.append("images", img); // IMPORTANT: "images"
      });

      await api.post("/product/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("✅ Product Added");

      setForm({
        title: "",
        description: "",
        price: "",
        stock: "",
      });
      setImages([]);
      setPreview([]);
    } catch (error) {
      console.error(error);
      alert("❌ Error uploading product");
    }
  };

  // 🔥 Fields (MAP)
  const inputFields = [
    { name: "title", label: "Product Title", type: "text" },
    { name: "price", label: "Price", type: "number" },
    { name: "stock", label: "Stock", type: "number" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 🔥 Upload Box */}
        <label className="w-40 h-40 border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer bg-gray-100 hover:bg-gray-200 transition">
          <Icon name="plus" className="text-2xl text-gray-600 mb-1" />
          <p className="text-sm text-gray-600">Upload</p>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImages}
            className="hidden"
          />
        </label>

        {/* 🔥 Preview Gallery */}
        {preview.length > 0 && (
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {preview.map((img, index) => (
              <div
                key={index}
                className="relative w-full h-24 border rounded overflow-hidden"
              >
                <img src={img} className="w-full h-full object-cover" />

                {/* ❌ Remove Button */}
                <Button
                  title="✕"
                  type="submit"
                  style="absolute top-1 right-1 bg-black text-white text-xs px-2 rounded"
                  onClick={() => removeImage(index)}
                />
              </div>
            ))}
          </div>
        )}

        {/* 🔥 Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {inputFields.map((field) => (
            <FormField
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              value={form[field.name as keyof typeof form]}
              onChange={handleChange}
            />
          ))}
        </div>

        {/* 🔥 Description */}
        <FormTextarea
          label="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
        />

        {/* Submit */}
        <Button title="Add Product" type="submit" style="Button" />
      </form>
    </div>
  );
};

export default AddProduct;
