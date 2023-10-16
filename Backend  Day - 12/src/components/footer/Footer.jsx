import React from "react";
import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
  return (
    <>
      <footer className='boxItems'>
        <div className='container flex'>
          <div className="footer-section">
            <p> Designed & Developed By Gugan</p>
            <br/>
            <div className="icon">
              <p>Connect with Social-Media 😒</p>
              <br/>
              <SocialIcon url="https://www.facebook.com" />
              <SocialIcon url="https://twitter.com/Gugans2713" />
              <SocialIcon url="https://www.instagram.com/_.gugxn/" />
              <SocialIcon url="https://www.linkedin.com/in/gugan-s-08a22017a/" />
            </div>
          </div>
          <div className="footer-section">
            <h3>Feedback</h3>
            <p>Send your feedback to <a href="mailto:gugans954@gmail.com">feedback@Ayush.com</a>.</p>
          </div>
          <div className="footer-section">
            <h3>Frequently Asked Questions</h3>
            <ul>
              <li>
                <a href="/faq">How to place an order?</a>
                <p>Follow these steps: [Provide brief instructions here.]</p>
              </li>
              <li>
                <a href="/faq">Shipping options?</a>
                <p>We offer standard and express delivery options during checkout.</p>
              </li>
              <li>
                <a href="/faq">Tracking an order?</a>
                <p>Log in and visit "Order History" for tracking information.</p>
              </li>
            
              {/* Add more FAQ links and concise answers as needed */}
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
