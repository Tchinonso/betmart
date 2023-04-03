import React from "react";
import "./styles/Activity.css";

export default function Activity() {
  const History = (e) => {
    e.preventDefault();
    window.history.back();
  };
  return (
    <div className="activity-display">
      <div className="balance-arrow">
        <h3 onClick={History}> &#10094;</h3>
      </div>

      <div className="activity-display-btn">
        <button>Activity Log</button>
      </div>

      <table className="activity-display-table">
        <tr>
          <th>Device Type</th>
          <th>IP Address</th>
          <th>Action</th>
          <th>Location</th>
          <th>Date/Time</th>
        </tr>
        <tr>
          <td>Iphone 14 pro</td>
          <td>129.43948.677</td>
          <td>Logged In</td>
          <td>Taxes</td>
          <td>23/12/2022 23:23</td>
        </tr>
        <tr>
          <td>samsung s9</td>
          <td>129.34948.644</td>
          <td>Logged In</td>
          <td>Luxembourg</td>
          <td>23/12/2022 23:23</td>
        </tr>
      </table>

      <div className="activity-display-footer">
        <button>Previous</button>
        <h2>1</h2>
        <button>Next</button>
      </div>
    </div>
  );
}
