"use client";
import EditProduct from "@/app/components/EditProduct";
import { ListTable } from "@/app/components/ListTable";
import SideBar from "@/app/components/SideBar";
import { ProductContext } from "@/app/Context/ProductContext";
import { useContext, useState } from "react";

const page = () => {
  const { fetchProducts, editproduct } = useContext(ProductContext);
  const [currentView, setCurrentView] = useState("list"); // Toggles between 'list' and 'edit'
  const [selectedProductId, setSelectedProductId] = useState(null); // Stores the ID of the product to be edited
  // Function to handle edit button click
  const handleEditClick = (productId) => {
    setSelectedProductId(productId);
    setCurrentView("edit");
  };

  return (
    <div className="flex">
      <SideBar />
      {currentView === "list" ? (
        <ListTable handleEditClick={handleEditClick} />
      ) : (
        <EditProduct
          productId={selectedProductId}
          onCancel={() => {
            fetchProducts()
            setCurrentView("list");
          }}
        />
      )}
    </div>
  );
};

export default page;
