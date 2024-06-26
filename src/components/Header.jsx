import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/drive-logo-1.png";
import hero from "../assets/suzuki-grand-vitara.jpg";

const Header = () => {
    return (
    <div>
      <header id="header" className="transparent-header semi-transparent">
      {/* navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
        <img src={logo} alt="Drive logo" height="30" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      </header>

      
      <section>
        <div style={{ backgroundImage: `url(${hero})`, backgroundPosition: "50% 50%", backgroundSize: "100% 140%" }} data-0-top="background-size: 100%" data-top-bottom="background-size: 120%">
            <div className="container">
                <div className="row mt-6">
                    <div className="col-md-5">
                        <h2 className="display-4 fw-light ls-1 lh-sm" style={{ color: "#FFF", fontWeight: "bold" }}>THE FUTURE OF DRIVING <span class="fw-normal">Beauty</span> Pros.</h2>
                        <div className="before-title ls-3 mb-5 text-smaller" style={{ color: "#FFF", fontWeight: "bold" }}>Get a brand new car today with just a few clicks - Smart, Quick & Easy - With Drive!</div>
                        <a href="/" className="btn btn-primary flex-md-shrink-0 mt-5">Apply Now</a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Header;