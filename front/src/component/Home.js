import React, { useEffect, useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import Middle from './Middle';

const Home = () => {
  const [stats, setStats] = useState({
    internet: 0,
    spaces: 0,
    members: 0,
    reviews: 0,
  });

  const targetValues = {
    internet: 150,
    spaces: 20,
    members: 200,
    reviews: 99.9,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => ({
        internet: prevStats.internet < targetValues.internet ? prevStats.internet + 5 : targetValues.internet,
        spaces: prevStats.spaces < targetValues.spaces ? prevStats.spaces + 2 : targetValues.spaces,
        members: prevStats.members < targetValues.members ? prevStats.members + 10 : targetValues.members,
        reviews: prevStats.reviews < targetValues.reviews ? (parseFloat(prevStats.reviews) + 0.5).toFixed(1) : targetValues.reviews,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, [targetValues.internet, targetValues.spaces, targetValues.members, targetValues.reviews]);

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function changeSlide() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }

    const interval = setInterval(changeSlide, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">bid</div>
        <ul>
          <li><a href="home">Home</a></li>
          <li><a href="about">About</a></li>
          <li>
            <a href="home">Spaces</a>
            <div className="dropdown">
              <ul><a href="about">Space</a></ul>
              <ul><a href="home">Detail</a></ul>
            </div>
          </li>
          <li>
            <a href="home">Bids</a>
            <div className="dropdown">
             <ul> <a href="home">Completed</a></ul>
              <ul><a href="home">Ongoing </a></ul>
            </div>
          </li>
          <li><a href="home">Contact</a></li>
        </ul>
        <a href="home" className="get-started">Get Started</a>
      </nav>

      <div className="slideshow-container">
        <div className="slide active" style={{ backgroundImage: "url(/img5.jpg)" }}></div>
        <div className="slide" style={{ backgroundImage: "url(/img6.png)" }}></div>
        <div className="slide" style={{ backgroundImage: "url(/img7.jpg)" }}></div>
        <div className="overlay">
          <h6>Welcome To Our Auction System</h6>
          <h1>Types Of Bids Include Auction Bids<br /> Online Bids<br />And Sealed Bids</h1>
          <p>Bidding that has no limits!</p>
          <div className="button-container">
            <a href="#" className="btn" id="c1">START BIDING</a>
            <a href="#" className="btn" id="c2">VIEW Completed BIDS</a>
          </div>
        </div>

        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>

      <section className="cards">
        <div className="card">
          <div className="content">
            <h3>Ultra-fast Internet</h3>
            <p>{stats.internet}mb/s</p>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h3>Available Places</h3>
            <p>{stats.spaces}+</p>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h3>Active Members</h3>
            <p>{stats.members}+</p>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h3>Positive Review</h3>
            <p>{stats.reviews}%</p>
          </div>
        </div>
      </section>

      <Middle />

      <footer className="footer">
        <div className="block">
          <div className="footer-top">
            <h2>Ready to visit our place in person?</h2>
            <button className="tour-btn">Book a Tour</button>
          </div>
          <hr id="h1"></hr>

          <div className="footer-main">
            <div className="footer-section">
              <img src="img3.jpg" alt="Logo" className="footer-logo" />
              <p>Winning bids and delivering exceptional items with innovative and tailored solutions</p>
             
            </div>

            <div className="footer-section">
              <h6>Contact</h6>
              <p>+1 (234) 567 890</p>
              <p>bids@mail.com</p>
              <h6>Adresse</h6>
              <p>323 lac1</p>
              <p>07.00 AM - 19.00 PM</p>
            </div>

            <div className="footer-section">
              <h4>Explore</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Spaces</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Disclaimer</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <hr id="h1"></hr>

          <div className="footer-bottom">
            <p>&copy;2025 ASK Project</p>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Services</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

