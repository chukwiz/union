import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render(){
        return(
            <div>
                <footer className="footer-top-area pt-100 pb-70">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="single-widget">
            <a href="index.html">
              <img src="assets/img/footer-logo.png" alt="Image" />
            </a>
            <p>
              Lorem ipsum dolor sitamet,cons adipiscing elit, sed do eiusmod te
              incididunt ut labore et dolore Lorem ipsum dolor sitamet,cons
              adipiscing dolore Lorem ipsum dolor.
            </p>
            <div className="social-area">
              <ul>
                <li>
                  <a href="#">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-twitter" />
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
                <li>
                  <a href="#">
                    <i className="bx bxl-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-widget contact">
            <h3>Contact Us</h3>
            <ul>
              <li className="pl-0">
                <a href="tel:Phone:+822456974">
                  <i className="flaticon-call" />
                  <span>Hotline:</span>
                  Phone: +822456974
                </a>
              </li>
              <li className="pl-0">
                <a href="mailto:support@unionfinanceinvestment.com">
                  <i className="flaticon-email" />
                  <span>Email:</span>
                  support
                </a>
              </li>
              <li>
                <i className="flaticon-maps-and-flags" />
                <span>Address:</span>
                Suite 110 12 South Bridge, Edinburgh, Scotland, EH1 1DD
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-widget">
            <h3>Service Links</h3>
            <ul>
              <li>
                <Link to="/structured-finance">Structured Finance</Link>
              </li>
              <li>
                <Link to="/financial-services">Financial Services</Link>
              </li>
              <li>
                <Link to="/consulting-services">Consulting Services</Link>
              </li>
              <li>
                <Link to="/portfolio-management">Portfolio Management Services</Link>
              </li>
              <li>
                <Link to="/mutual-funds">Mutual Funds</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-widget">
            <h3>Newsletter</h3>
            <p className="newsletter-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <div className="subscribe-wrap">
              <form className="newsletter-form" data-toggle="validator">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  name="EMAIL"
                  required
                  autoComplete="off"
                />
                <button className="default-btn" type="submit">
                  Subscribe
                </button>
                <div id="validator-newsletter" className="form-result" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer Top Area */}
  {/* Start Footer Bottom Area */}
  <footer className="footer-bottom-area footer-bottom-electronics-area">
    <div className="container">
      <div className="copy-right">
        <p>
          Copyright @2020 Union Finance Investment
        </p>
      </div>
    </div>
  </footer>
  {/* End Footer Bottom Area */}
  {/* Start Go Top Area */}
  <div className="go-top">
    <i className="bx bx-chevrons-up" />
    <i className="bx bx-chevrons-up" />
  </div>
            </div>
        )
    }
}

export default Footer;