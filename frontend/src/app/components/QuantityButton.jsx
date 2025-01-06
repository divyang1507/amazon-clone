"use client";
import { useState } from "react";

const QuantityButton = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="flex items-center gap-4 border border-gray-200 rounded">
      {/* Decrement Button */}
      <button
        onClick={decrement}
        className="bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 active:scale-95 transition-transform">
        -
      </button>

      {/* Quantity Display */}
      <span className="text-md font-semibold">{quantity}</span>

      {/* Increment Button */}
      <button
        onClick={increment}
        className="bg-gray-200 text-gray-800 px-3 py-1 rounded shadow hover:bg-gray-300 active:scale-95 transition-transform">
        +
      </button>
    </div>
  );
};

export default QuantityButton;
