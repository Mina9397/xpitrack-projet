"use client"

import { useState } from "react"
import Sidebar from "./Sidebar"
import { Link } from "react-router-dom"

function StockManagement() {
  const [productName, setProductName] = useState("")
  const [category, setCategory] = useState("")
  const [quantity, setQuantity] = useState("")
  const [expiryDate, setExpiryDate] = useState("")

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Lait Délice 1L",
      quantity: 28,
      status: "Near Expiry",
      expiryDate: "2023-04-08",
      snag: "Near Expiry",
    },
  ])

  const handleAddProduct = (e) => {
    e.preventDefault()
    const newProduct = {
      id: products.length + 1,
      name: productName,
      quantity: Number.parseInt(quantity),
      status: "In Stock",
      expiryDate: expiryDate,
      snag: "",
    }

    setProducts([...products, newProduct])

    // Reset form
    setProductName("")
    setCategory("")
    setQuantity("")
    setExpiryDate("")
  }

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
            <input type="text" placeholder="Search here" className="search-input" />
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
            <h2>Add products</h2>
            <form onSubmit={handleAddProduct}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Products Name"
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
                  placeholder="mm/dd/yy"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>

          <div className="divider"></div>

          <div className="select-item-container">
            <button className="select-item-button">
              Select an item <i className="fas fa-chevron-down"></i>
            </button>
          </div>

          <div className="products-table">
            <table>
              <thead>
                <tr>
                  <th className="checkbox-column">
                    <input type="checkbox" />
                  </th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>STATUS</th>
                  <th>Expiration Date</th>
                  <th>Snag</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>{product.status}</td>
                    <td>{product.expiryDate}</td>
                    <td>{product.snag}</td>
                    <td className="action-column">
                      <button className="edit-icon">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="delete-icon">
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StockManagement
