import React, { useState, useEffect } from "react";
import "../header/track.css";

const TrackingProgress = () => {
  const [orderProgress, setOrderProgress] = useState(0);

  // Simulate order progress updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update the order progress (0 to 100)
      setOrderProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tracking-progress">
      {/* Icon */}
      <i className="icon fas fa-shipping-fast"></i>
      <h3>Order in Transit</h3>
      <p>Your order is on its way to you!</p>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress-indicator"
          style={{ width: `${orderProgress}%` }} // Dynamically set the width
        ></div>
      </div>
    </div>
  );
};

export default TrackingProgress;
