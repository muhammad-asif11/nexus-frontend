"use client";
import React, { useState } from "react";
import FormField from "./FormField";
import { api } from "@/lib/axios";
import toast from "react-hot-toast";
import Button from "../share/Button";
import { passwordFields, profileFields } from "../utills/const";

const ProfileForm: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    try {
      const token = localStorage.getItem("token");

      const res = await api.put("/user/profile", {
        Fname: form.firstName,
        Lname: form.lastName,
        address: form.address,
        newPassword: form.newPassword,
      });
      console.log("profil update success", res);
      toast.success("Profile updated");
    } catch (error: any) {
      console.error(error.response || error);
      toast.error("Error saving profile");
    }
  };

  return (
    <form
      onSubmit={saveProfile}
      className="bg-white p-6 rounded shadow-md max-w-4xl mx-auto"
    >
      <h2 className="text-Narangi text-xl font-semibold mb-4">
        Edit Your Profile
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-15 gap-y-3">
        {profileFields.map((field) => (
          <FormField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            value={form[field.name as keyof typeof form]}
            onChange={handleChange}
            disabled={field.disabled}
          />
        ))}
      </div>

      <h3 className="text-gray-700 text-lg font-medium mt-6 mb-2">
        Password Changes
      </h3>
      {passwordFields.map((field) => (
        <FormField
          key={field.name}
          name={field.name}
          placeholder={field.placeholder}
          type={field.type}
          value={form[field.name as keyof typeof form]}
          onChange={handleChange}
        />
      ))}

      <div className="flex justify-end gap-2 mt-6">
        <Button
          title="Cancel"
          type="button"
          style="px-4 py-2 border rounded hover:bg-gray-100"
        />
        <Button
          title="Save Changes"
          type="submit"
          style="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        />
      </div>
    </form>
  );
};

export default ProfileForm;
