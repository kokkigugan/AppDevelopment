import React, { useState, useEffect } from "react";
import "../header/track.css";
import axios from "axios";

const TrackingProgress = () => {
  const [orderProgress, setOrderProgress] = useState(0);
  const [product,setProduct] = useState([]);

  const getData = async()=>{
    const response = await axios.get("http://localhost:8181/api/cart/all/prod");
    setProduct(response.data);
  }


  useEffect(() => {
    const interval = setInterval(() => {
      // Update the order progress (0 to 100)
      setOrderProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
    }, 2000);

    getData();

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
      <div className="getin">
        {product && product.map((prod) => (
            <div className="order-product" key={prod.id}>
              <h4>{prod.name}</h4>
              <h7>{prod.price}</h7>
            </div>
        ))}
      </div>
    </div>
  );
};

export default TrackingProgress;
