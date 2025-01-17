import './Middle.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaUser } from 'react-icons/fa';

function Middle() {
return (
  <div>
    <div className="middle-section">
      <div className="content">
        <img src="b.png" alt="Logo" className="footer-logo" />
        <p>"Our auction system offers a secure and transparent platform for competitive bidding, ensuring a seamless experience for both buyers and sellers."</p>
      </div>
    </div>

    <div className="office-spaces">
      <h6>Our Auction Spaces</h6>
      <p className="styled-paragraph">Bid on Exclusive Items. Participate in Live Auctions. Win Big.</p>

      <div className="office-grid">
        <div className="office-card">
          <img src="paris.jpg" alt="Art Auction" className="office-image" />
          <div className="office-card-content">
            <h3><FaMapMarkerAlt /> Paris, France</h3>
            <p>Rare Art Auction</p>
            <p>Bid on exclusive and rare paintings from famous artists around the world.</p>
            <p>Starting from $10,000</p>
            <button className="black-button"><FaUser /> Place Bid</button>
          </div>
        </div>

        <div className="office-card">
          <img src="roma.jpg" alt="Vintage Car Auction" className="office-image" />
          <div className="office-card-content">
            <h3><FaMapMarkerAlt />  ROMA,ITALIE</h3>
            <p>Classic Car Auction</p>
            <p>Luxury and vintage car auctions with certified histories and documentation.</p>
            <p>Reserve Price: $50,000</p>
            <button className="black-button"><FaUser /> Bid Now</button>
          </div>
        </div>

        <div className="office-card">
          <img src="monaco.jpg" alt="Electronics Auction" className="office-image" />
          <div className="office-card-content">
            <h3><FaMapMarkerAlt /> MONACO, FRANCE</h3>
            <p>High-Tech Electronics Auction</p>
            <p>Latest technology gadgets and electronics, straight from the manufacturers.</p>
            <p>Starting at $500</p>
            <button className="black-button"><FaUser /> Start Bidding</button>
          </div>
        </div>

        <div className="office-card">
          <img src="dubai.jpg" alt="Real Estate Auction" className="office-image" />
          <div className="office-card-content">
            <h3><FaMapMarkerAlt /> Dubai, UAE</h3>
            <p>Luxury Real Estate Auction</p>
            <p>Bid on high-end properties and luxury villas in prime locations.</p>
            <p>Minimum Bid: $1,000,000</p>
            <button className="black-button"><FaUser /> Join Auction</button>
          </div>
        </div>
      </div>
    </div>
    <section className="how-it-works">
    <h2>How It Works</h2>
    <div className="steps">
      <div className="step">
      <div className="icon">
        <i className="fa fa-user"></i>
      </div>
      <h3>Step 1: Register</h3>
      <p>
        Create your account to start participating in online and live
        auctions.
      </p>
      <button className="learn-more">Learn More</button>
      </div>
      <div className="step">
      <div className="icon">
        <i className="fa fa-gavel"></i>
      </div>
      <h3>Step 2: Choose Your Bid</h3>
      <p>Select the item you want to bid on and place your offer.</p>
      <button className="learn-more">Learn More</button>
      </div>
      <div className="step">
      <div className="icon">
        <i className="fa fa-eye"></i>
      </div>
      <h3>Step 3: Watch the Action</h3>
      <p>Track the bids in real-time and watch as the offers grow.</p>
      <button className="learn-more">Learn More</button>
      </div>
      <div className="step">
      <div className="icon">
        <i className="fa fa-trophy"></i>
      </div>
      <h3>Step 4: Win & Enjoy</h3>
      <p>
        If you're the highest bidder, you'll win the item and receive
        instructions for payment and delivery.
      </p>
      <button className="learn-more">Learn More</button>
      </div>
    </div>
    </section>
    <section class="about-us">
    <div class="container">
      <div class="image-container">
      <img src="img1.jpg" alt="Auction system workspace" />
      </div>
      <div class="text-container">
      <h3>ABOUT US</h3>
      <h2>Empowering the Future of Auctions</h2>
      <p>
        Our auction system is designed to bring transparency and
        efficiency to the bidding process. Whether you're participating in
        online auctions, sealed bids, or live events, we ensure a seamless
        and engaging experience for all users.
      </p>
      <hr />
      <div class="mission-vision">
        <div class="mission">
        <h4>Our Mission</h4>
        <ul>
          <li>Provide an innovative and reliable auction platform.</li>
          <li>Connect buyers and sellers globally.</li>
          <li>Foster trust and collaboration.</li>
        </ul>
        </div>
        <div class="vision">
        <h4>Our Vision</h4>
        <p>
          To become the world's most trusted auction platform, known for
          its cutting-edge technology and exceptional user experience.
        </p>
        </div>
      </div>
      </div>
    </div>
    </section>
    <section class="gallery">
  <h2 class="gallery-title">Birds Photo Gallery</h2>
  <div class="gallery-container">
  <div class="gallery-item">
    <img src="ll.jpg" alt="Beautiful Bird 1" />
    <div class="overlay">
    <h3>LOUVRE</h3>
    </div>
  </div>
  <div class="gallery-item">
    <img src="car.jpg" alt="Beautiful Bird 2" />
    <div class="overlay">
    <h3>ELECTRONIC CARS</h3>
    </div>
  </div>
  <div class="gallery-item">
    <img src="pp.jpg" alt="Beautiful Bird 3" />
    <div class="overlay">
    <h3>RARE PORTRAIS</h3>
    </div>
  </div>
  <div class="gallery-item">
    <img src="r.jpg" alt="Beautiful Bird 3" />
    <div class="overlay">
    <h3>Gallery</h3>
    </div>
  </div>
  <div class="gallery-item">
    <img src="gold.jpg" alt="Beautiful Bird 3" />
    <div class="overlay">
    <h3>GOLD</h3>
    </div>
  </div>
  <div class="gallery-item">
    <img src="kk.jpg" alt="Beautiful Bird 3" />
    <div class="overlay">
    <h3>STATUE</h3>
    </div>
  </div>
  <div class="gallery-item">
    <img src="hh.jpg" alt="Beautiful Bird 4" />
    <div class="overlay">
    <h3>RARE DIAMONDS</h3>
    </div>
  </div>
  <div class="gallery-item">
    <img src="villa.jpg" alt="Beautiful Bird 5" />
    <div class="overlay">
    <h3>VILLA IN CUBA</h3>
    </div>
  </div>
  </div>
</section>

  </div>
);
}

export default Middle;
