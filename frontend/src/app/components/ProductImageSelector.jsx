'use client'
import React, { useState } from 'react'

const ProductImageSelector = ({images}) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [hoveredImage, setHoveredImage] = useState(null);
  
    const handleMouseEnter = (image) => {
      setHoveredImage(image);
    };
  
    const handleMouseLeave = () => {
      setHoveredImage(null);
    };
  
    const displayedImage = hoveredImage || selectedImage;
  
    return (
      <div className="flex flex-col-reverse md:flex-row items-center gap-6">
        {/* Thumbnails */}
        <div className="flex md:flex-col gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)} // Update on click
              onMouseEnter={() => handleMouseEnter(image)} // Update on hover
              onMouseLeave={handleMouseLeave} // Revert on mouse leave
              className={`p-1 border rounded ${
                displayedImage === image
                  ? "border-blue-500"
                  : "border-gray-300 hover:border-gray-500"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 object-cover rounded"
              />
            </button>
          ))}
        </div>
  
        {/* Main Image */}
        <div className="w-full max-w-lg">
          <img
            src={displayedImage}
            alt="Selected Product"
            className="w-full h-auto object-cover rounded-lg border border-gray-300"
          />
        </div>
      </div>
    );
}

export default ProductImageSelector