import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const OrderPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "creditCard",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", formData);

    toast.success("Order placed successfully!", {
      position: "top-right",
      autoClose: 3000,
    });

    // Wait for the toast to end, then navigate to the "track-order" page
    setTimeout(() => {
      navigate("/track-order");
    }, 3000);
  };

  return (
    <div className="order-page-container">
      <h1 className="order-page-title">Payment</h1>
      <form className="order-form" onSubmit={handleSubmit}>
        <div className="order-form-input">
          <label className="order-form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="order-form-input-fields"
          />
        </div>
        <div className="order-form-input">
          <label className="order-form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="order-form-input-fields"
          />
        </div>
        <div className="order-form-input">
          <label className="order-form-label">Shipping Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="order-form-input-fields"
          ></textarea>
        </div>
        <div className="order-form-input">
          <label className="order-form-label">Payment Method:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="order-form-input-fields"
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="order-form-button">
          Place Order
        </button>
      </form>
      <Link to="/home" className="order-again-button">
        Order Again
      </Link>
      <ToastContainer />
    </div>
  );
};

export default OrderPage;
