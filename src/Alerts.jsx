import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";
import "./Alerts.css";

function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/alerts");
        setAlerts(response.data);
      } catch (error) {
        console.error("Error fetching alerts:", error);
      }
    };

    fetchAlerts();
  }, []);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header title="Manager space" />
        <div className="alerts-content">
          <div className="alerts-container">
            {alerts.map((alert, index) => (
              <div key={index} className={`alert alert-${alert.type}`}>
                <div className="alert-content">
                  <strong>{`"${alert.product}"`}</strong> {alert.message}
                </div>
              </div>
            ))}
          </div>

          <div className="legend">
            <div className="legend-item">
              <span className="legend-color legend-red" />
              Out of stock
            </div>
            <div className="legend-item">
              <span className="legend-color legend-yellow" />
              Near Expiry
            </div>
            <div className="legend-item">
              <span className="legend-color legend-green" />
              Low Stock
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alerts;
