"use client";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useProducts } from "./ProductContext";
import "./Stockmanagement.css"; // advanced CSS assumed here

function StockManagement() {
  const { products, setProducts } = useProducts();

  const [selectedProductId, setSelectedProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Fill form when selecting a product
  useEffect(() => {
    if (selectedProductId) {
      const selected = products.find(
        (p) => p.id === parseInt(selectedProductId)
      );
      if (selected) {
        setProductName(selected.name);
        setCategory(selected.category);
        setQuantity(selected.quantity);
        setExpiryDate(selected.expiryDate);
        setIsEditing(true);
      }
    } else {
      resetForm();
    }
  }, [selectedProductId]);

  const resetForm = () => {
    setProductName("");
    setCategory("");
    setQuantity("");
    setExpiryDate("");
    setSelectedProductId("");
    setIsEditing(false);
  };

  const handleAddOrEditProduct = (e) => {
    e.preventDefault();

    const updatedProduct = {
      id: isEditing ? parseInt(selectedProductId) : products.length + 1,
      name: productName,
      category,
      quantity: Number(quantity),
      expiryDate,
      status: "In Stock",
      snag: "",
    };

    if (isEditing) {
      const updatedProducts = products.map((product) =>
        product.id === parseInt(selectedProductId) ? updatedProduct : product
      );
      setProducts(updatedProducts);
    } else {
      setProducts([...products, updatedProduct]);
    }

    resetForm();
  };

  const handleDeleteProduct = (id) => {
    const filtered = products.filter((p) => p.id !== id);
    setProducts(filtered);
    if (selectedProductId === String(id)) resetForm();
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content stock-management-page">
        <header className="stock-header">
          <div className="stock-title">
            <i className="fas fa-boxes"></i>
            <h1>Stock Management</h1>
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search here"
              className="search-input"
            />
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="notification-icon">
            <i className="fas fa-bell"></i>
          </div>
        </header>

        <div className="stock-content">
          <div className="back-link">
            <Link to="/dashboard">
              <i className="fas fa-arrow-left"></i>
            </Link>
          </div>

          <div className="add-products-section">
            <h2>{isEditing ? "Edit Product" : "Add Product"}</h2>

            {/* Select Product Dropdown */}
            <div className="form-group">
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
              >
                <option value="">Select Product to Edit or Delete</option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Product Form */}
            <form onSubmit={handleAddOrEditProduct}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Product Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="mm/dd/yyyy"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="add-button">
                  {isEditing ? "Save Changes" : "Add Product"}
                </button>
                {isEditing && (
                  <button
                    type="button"
                    className="delete-button"
                    onClick={() =>
                      handleDeleteProduct(parseInt(selectedProductId))
                    }
                  >
                    Delete
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="divider"></div>

          <div className="products-table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Expiration Date</th>
                  <th>Snag</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.quantity}</td>
                    <td>{product.status}</td>
                    <td>{product.expiryDate}</td>
                    <td>{product.snag}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockManagement;
