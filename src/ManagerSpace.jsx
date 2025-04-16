import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./managersapace.css"; // Add your custom styles here

const ManagerSpace = () => {
  const [auditData, setAuditData] = useState([]);
  const [form, setForm] = useState({
    product: "",
    systemQty: "",
    physicalQty: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddAudit = () => {
    const difference = form.physicalQty - form.systemQty;
    const newAudit = {
      id: Date.now(),
      ...form,
      difference,
    };
    setAuditData([...auditData, newAudit]);
    setForm({ product: "", systemQty: "", physicalQty: "" });
  };

  const handleDelete = (id) => {
    setAuditData(auditData.filter((entry) => entry.id !== id));
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header title="Manager Space" />

        {/* Inventory Bar */}
        <div className="inventory-bar-container">
          <div className="inventory-bar">
            <div className="status-item out-of-stock">
              <strong>Chicken</strong> is out of stock. Restock immediately!
            </div>
            <div className="status-item near-expiry">
              <strong>Milk</strong>, will expire in 3 days. Consider discounting
              it!
            </div>
            <div className="status-item low-stock">
              <strong>Rice</strong>, has only 5 units left.
            </div>
          </div>
          <div className="legend">
            <div className="legend-item">
              <span className="legend-color out-of-stock-color"></span>Out of
              stock
            </div>
            <div className="legend-item">
              <span className="legend-color near-expiry-color"></span>Near
              Expiry
            </div>
            <div className="legend-item">
              <span className="legend-color low-stock-color"></span>Low Stock
            </div>
          </div>
        </div>

        {/* Inventory Audit */}
        <div className="inventory-audit">
          <h3>Inventory Audit</h3>
          <p>Perform a physical stock count and update your system.</p>

          <div className="audit-form">
            <select name="product" value={form.product} onChange={handleChange}>
              <option value="">Select a product</option>
              <option value="Milk">Milk</option>
              <option value="Chicken">Chicken</option>
              <option value="Rice">Rice</option>
            </select>
            <input
              type="number"
              name="systemQty"
              placeholder="System Quantity"
              value={form.systemQty}
              onChange={handleChange}
            />
            <input
              type="number"
              name="physicalQty"
              placeholder="Physical Quantity"
              value={form.physicalQty}
              onChange={handleChange}
            />
            <button className="btn btn-primary" onClick={handleAddAudit}>
              Add to Table
            </button>
          </div>

          <table className="audit-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>System Qty</th>
                <th>Physical Qty</th>
                <th>Difference</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {auditData.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.product}</td>
                  <td>{entry.systemQty}</td>
                  <td>{entry.physicalQty}</td>
                  <td>{entry.difference}</td>
                  <td>
                    <button onClick={() => handleDelete(entry.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagerSpace;
