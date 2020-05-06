import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <div>
            <div className="preloader">
    <div className="lds-ripple">
      <div />
      <div />
    </div>
  </div>
                <header className="header-area fixed-top">
    <div className="top-header-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="header-content-left">
              <p>Welcome To Union Finance Investment</p>
            </div>
          </div>
          <div className="col-lg-8">
            <ul className="header-content-right">
              <li>
                <a href="tel:+822456974">
                  <i className="bx bx-phone-call" />
                  Call Us For Inquiry: +822456974
                </a>
              </li>
              <li>
                <a href="mailto:hello@surety.com">
                  <i className="bx bx-envelope" />
                  Email: support@unionfinanceinvestment.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Start Navbar Area */}
    <div className="nav-area nev-style-two">
      <div className="navbar-area">
        {/* Menu For Mobile Device */}
        <div className="mobile-nav">
          <a href="index.html" className="logo">
            <img src="assets/img/logo.png" alt="Logo" />
          </a>
        </div>
        {/* Menu For Desktop Device */}
        <div className="main-nav">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
              <a className="navbar-brand" href="index.html">
                <img src="assets/img/home-one-logo.png" alt="Logo" />
              </a>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <Link to = "/" className="nav-link dropdown-toggle active">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link dropdown-toggle">
                      Services
                      <i className="bx bx-plus" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/structured-finance" className="nav-link">
                          Structured Finance
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/financial-services" className="nav-link">
                          Financial Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/consulting-services" className="nav-link">
                          Consulting Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/portfolio-management" className="nav-link">
                          Portfolio Management Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/mutual-funds" className="nav-link">
                          Mutual Funds
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link dropdown-toggle">
                      Investments
                      <i className="bx bx-plus" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/forex" className="nav-link">
                          Forex
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/cryptocurrency" className="nav-link">
                          Cryptocurrency
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/retirement" className="nav-link">
                          Retirement
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                        <Link to="/our-team" className="nav-link">
                          Our Team
                        </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link dropdown-toggle">
                      About
                      <i className="bx bx-plus" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/our-philosophy" className="nav-link">
                          Our Philosophy
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/investment-approach" className="nav-link">
                          Investment Approach
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/investment-process" className="nav-link">
                          Investment Process
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/our-vision" className="nav-link">
                          Our Vision & Story
                        </Link>
                      </li>
                      {/* <li className="nav-item">
                        <Link to="/testimonials" className="nav-link">
                          Testimonials
                        </Link>
                      </li> */}
                    </ul>
                  </li>
                  <li className="nav-item">
                        <Link to="/contact-us" className="nav-link">
                          Contact Us
                        </Link>
                  </li>
                  <li className="nav-item">
                        <Link to="/faq" className="nav-link">
                          Faq
                        </Link>
                  </li>
                  <li>
                  <Link to="/login" className="default-btn2">
                      Log In
                    </Link>
                  </li>
                  <li>
                  <Link to="/register" className="default-btn">
                      Sign Up
                    </Link>
                  </li>
                </ul>
                {/* Start Other Option */}
                <div className="others-option">
                  <div className="subscribe">
                  
                    
                  </div>
                  <div className="sidebar-menu">
                    <a href="#" data-toggle="modal" data-target="#myModal2">
                      <i className="bx bx-grid-alt" />
                    </a>
                  </div>
                </div>
                {/* End Other Option */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    {/* End Navbar Area */}
  </header>
  {/* End Heder Area */}
  {/* Start Sidebar Modal */}
  <div className="sidebar-modal">
    <div className="modal right fade" id="myModal2">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="bx bx-x" />
              </span>
            </button>
            <h2 className="modal-title">
              <a href="index.html">
                <img src="assets/img/logo.png" alt="Logo" />
              </a>
            </h2>
          </div>
          <div className="modal-body">
            <div className="sidebar-modal-widget">
              <h3 className="title">About Us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, asperiores doloribus eum laboriosam praesentium
                delectus unde magni aut perspiciatis cumque deserunt dolore
                voluptate, autem pariatur.
              </p>
            </div>
            <div className="sidebar-modal-widget">
              <h3 className="title">Additional Links</h3>
              <ul>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
                <li>
                  <Link to="/register">Sign In</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="sidebar-modal-widget">
              <h3 className="title">Contact Info</h3>
              <ul className="contact-info">
                <li>
                  <i className="bx bx-location-plus" />
                  Address
                  <span>Suite 110 12 South Bridge, Edinburgh, Scotland, EH1 1DD</span>
                </li>
                <li>
                  <i className="bx bx-envelope" />
                  Email
                  <span>support@unionfinanceinvestment.com</span>
                </li>
                <li>
                  <i className="bx bxs-phone-call" />
                  Phone
                  <span>+822456974</span>
                </li>
              </ul>
            </div>
            <div className="sidebar-modal-widget">
              <h3 className="title">Connect With Us</h3>
              <ul className="social-list">
                <li>
                  <a href="#">
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
            </div>
        )
    }
}

export default Header;