import React, { useState } from 'react';
import '../homepage/footer.css';
import { SocialIcon } from 'react-social-icons';
import Rating from 'react-rating-stars-component';

function Footer() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(''); // Add state for the review text

  // Handle rating change
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Handle review text change
  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  // Handle review submission
  const handleSubmitReview = () => {
    // Here, you can submit the rating and review to your backend or handle it as needed
    console.log('Rating:', rating);
    console.log('Review:', review);

    // Clear the review text and reset the rating
    setReview('');
    setRating(0);
  };

  return (
    <footer className="footer">
      <form className="contact-form">
        <div className="title">Contact Us</div>
        <input type="text" placeholder="Your email" className="input" />
        <textarea
          placeholder="Your message"
          value={review} // Bind the review state to the textarea value
          onChange={handleReviewChange} // Handle changes to the review text
        ></textarea>
        <button>Submit</button>
      </form>

      {/* Social Media Links */}
      <div className="social-media">
        <SocialIcon url="https://www.facebook.com" />
        <SocialIcon url="https://www.twitter.com" />
        <SocialIcon url="https://www.instagram.com/_.gugxn/" />
        <SocialIcon url="https://www.linkedin.com" />
      </div>

      {/* Star Rating */}
      <div className="star-rating">
        <h3>Rate Your Experience</h3>
        <Rating
          value={rating}
          count={5}
          size={40}
          color="#ff6600"
          onChange={handleRatingChange}D
        />
      <div className="review-submission">
        <button onClick={handleSubmitReview}>Submit Review</button>
      </div>
      </div>

      {/* Review Submission */}
    </footer>
  );
}

export default Footer;
