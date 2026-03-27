// "use client";

// import { useState } from "react";
// import { api } from "@/lib/axios";
// import toast from "react-hot-toast";
// import Button from "@/components/share/Button";

// const initialState = {
//   Fname: "",
//   Lname: "",
//   address: "",
//   bio: "",
// };

// export default function Profile() {
//   const [formData, setFormData] = useState(initialState);

//   const fields = [
//     { name: "Fname", placeholder: "First Name", type: "input" },
//     { name: "Lname", placeholder: "Last Name", type: "input" },
//     { name: "address", placeholder: "Add Address", type: "input" },
//     { name: "bio", placeholder: "Bio", type: "textarea" },
//   ];

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const saveProfile = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       await api.put("/user/profile", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       toast.success("Profile updated");

//       // ✅ Reset form
//       setFormData(initialState);

//     } catch (error) {
//       toast.error("Error saving profile");
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 space-y-4">
//       <h1 className="text-2xl font-bold">Profile</h1>

//       {fields.map((field) =>
//         field.type === "textarea" ? (
//           <textarea
//             key={field.name}
//             name={field.name}
//             placeholder={field.placeholder}
//             value={formData[field.name as keyof typeof formData]}
//             onChange={handleChange}
//             className="border p-2 w-full"
//           />
//         ) : (
//           <input
//             key={field.name}
//             name={field.name}
//             placeholder={field.placeholder}
//             value={formData[field.name as keyof typeof formData]}
//             onChange={handleChange}
//             className="border p-2 w-full"
//           />
//         )
//       )}

//       <Button
//         title="Save Profile"
//         onClick={saveProfile}
//         style="bg-black text-white px-4 py-2 rounded"
//       />
//     </div>
//   );
// }

import React from "react";
import ProfileForm from "@/components/forms/ProfileForm";

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <ProfileForm />
    </div>
  );
};

export default Profile;
