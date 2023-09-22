import React from 'react';
import { useSelector } from 'react-redux';
import '../homepage/home.css';
import Footer from './footer'; // Import the Footer component
import { Link } from 'react-router-dom'; // Import Link for navigation
import { IconName } from "react-icons/vsc";

function Home() {
  // Get the featured products from the Redux store
  const featuredProducts = useSelector((state) => state.featuredProducts.products);

  // Get user data from the Redux store
  const user = useSelector((state) => state.user);

  return (
    <div className="home-container">
    {/* Navigation Bar */}
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/deals">Deals</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li> {/* Add the Dashboard link */}
      </ul>
      <div className="profile-icon">
          {/* Add your profile icon here */}
          <i className="fas fa-user"></i>
        </div>
    </nav>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Trusted Medical Supplies Provider</h1>
          <p>Bringing quality healthcare products to your doorstep.</p>
        </div>
      </section>

      {/* Search bar */}
      <section className="search-bar">
        <div className="search-container">
          <input type="text" placeholder="Search for medical products" />
          <button>Search</button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="row">
          {featuredProducts.map((product) => (
            <div className="col sm-4" key={product.id}>
              <img src={product.imageUrl} alt={product.name} className="st" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <Link to={`/product/${product.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </section>

    

      {/* Product Categories */}
      <section className="product-categories">
        <h2>Medical Categories</h2>
        <ul>
          <li><a href="/category1">Category 1</a></li>
          <li><a href="/category2">Category 2</a></li>
          <li><a href="/category3">Category 3</a></li>
          {/* Add more category links */}
        </ul>
      </section>

      {/* Promotions */}
      <section className="promotions">
        <h2>Special Promotions</h2>
        <div className="promotion-item">
          <img src="promotion-image1.jpg" alt="Promotion 1" />
          <p>Get 20% off on selected items. Limited time offer!</p>
        </div>
        <div className="promotion-item">
          <img src="promotion-image2.jpg" alt="Promotion 2" />
          <p>Free shipping on orders over $50.</p>
        </div>
        {/* Add more promotions */}
      </section>

      {/* Footer */}
      <Footer /> {/* Render the Footer component here */}
    </div>
  );
}

export default Home;
