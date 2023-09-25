import React, { useState } from "react";
import "./account.css";
import { Link } from "react-router-dom";

export const Account = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <section className="accountInfo">
        <div className="container boxItems">
          <h1>Account Information</h1>
          <div className="content">
            <div className="left">
              <div className="img flexCenter">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  alt="imgs"
                />
                <img
                  src={selectedImage || "../../assets/images/input.png"}
                  alt=""
                  className="image-preview"
                />
              </div>
            </div>
            <div className="right">
              <label>Username</label>
              <input type="text" required />
              <label>Email</label>
              <input type="text" required />
              <label>Password * </label>
              <input type="text" required />
              <Link to="/home">
                <button type="button">Update</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
