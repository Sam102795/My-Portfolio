import React from 'react'
import Gallery from '../Gallery';
import Buttons from '../Buttons';
import './HomePage.css'; // Ensure this path is correct

export default () => {
  return (
    <div>
      <h1 className="homePageTitle">Welcome to My Portfolio</h1>
      <Gallery/>
      <Buttons/>
      <div className="skills-section">
        <h2>Improving Your Skills</h2>
        <p>Enhancing your skills is a continuous journey that requires dedication, practice, and a willingness to learn. Start by identifying areas where you want to improve and set specific, achievable goals. By committing to ongoing improvement, you can elevate your abilities and achieve greater success in your endeavors.</p>
        <section className="image-gallery">
          <div className="image-container">
            <img src="/img/016.jpg" alt="Home Page" className="home-img" />
            <p className="image-description">Description 1</p>
          </div>
          <div className="image-container">
            <img src="/img/022.jpg" alt="Home Page" className="home-img" />
            <p className="image-description">Description 2</p>
          </div>
          <div className="image-container">
            <img src="/img/023.jpg" alt="Home Page" className="home-img" />
            <p className="image-description">Description 3</p>
          </div>
        </section>
      </div>
    </div>
  );
}
