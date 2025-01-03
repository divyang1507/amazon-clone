"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../Context/UserContext";

const page = () => {
  const [error, setError] = useState(null);
  const router = useRouter();
  const { user } = useContext(UserContext);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token || !user) {
//       router.push("/"); // Redirect to login if no token is found
//     }
//   }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Profile</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Welcome, {user.username}</h2>
          <p>Email: {user.email}</p>
          {/* Display other user details */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default page;
