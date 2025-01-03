'use client'
import React, { createContext, useState, useEffect } from "react";

// Create a context
const UserContext = createContext();

// Provider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if there's a token in localStorage
    const token = localStorage.getItem("token");
    
    if (token) {
      // Fetch user data with token if available
      const fetchUserData = async () => {
        const response = await fetch("http://localhost:4000/api/user/profile", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUser(data.user); // Set user data
        } else {
          console.error("Failed to fetch user data");
        }
      };
      fetchUserData();
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
