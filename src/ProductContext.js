import { createContext, useState, useContext } from "react";

// Create the Product Context
const ProductContext = createContext();

// Custom hook to use the Product Context
export const useProducts = () => useContext(ProductContext);

// Provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Function to add a product
  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  // Function to edit a product
  const editProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  // Function to delete a product
  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        addProduct,
        editProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
