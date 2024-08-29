import React from 'react';
import './Footer.css'; // Make sure to create and link this CSS file

export default function () {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Khoa Nguyen. All Rights Reserved.</p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}