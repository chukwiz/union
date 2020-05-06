import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Chart from '../../components/Chart/Chart';

class  MutualFunds extends Component {
    render(){
        return(
            <div>
  <div className="page-title-area bg-17">
    <div className="container">
      <div className="page-title-content">
        <h2>Mutual Funds</h2>
        <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        
          <li>Services</li>
          <li>Mutual Funds</li>
        </ul>
      </div>
    </div>
  </div>
  {/* End Page Title Area */}
  {/* Start About Area */}
  <section className="about-area ptb-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-img-3 wow fadeInRight" data-wow-delay=".2s">
            <img src="assets/img/about-img-3.jpg" alt="Image" />
            <div className="about-img-2">
              <img src="assets/img/portman.jpg" alt="Image" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-content">
            <h2>Mutual Funds</h2>
            <p>
            Mutual Funds and Initial Public Offerings (IPOs) offer an opportunity to invest in a diversified,
             professionally managed basket of securities at a relatively low cost. They are an excellent
              option for clients who are looking for a diversified investment portfolio offering liquidity
               and transparency.
            </p>
            <p>
            Union Finance Investment provides comprehensive transaction support to its clients for undertaking investments in the primary markets via mutual funds & IPOs.
            </p>
            <p>
            We, at Union Finance Investment offer personalized services for investments (including mutual funds of 
            all types: Equity funds, Growth and Value Funds, Large-Cap and Small-Cap Funds, Bond Fund,
             Foreign Stocks Funds, Money Market Funds, Sector Funds & Asset Allocation Funds) & IPOs.
            </p>
            <Link to="/register" className="default-btn">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*  */}
  {/* End About Area */}
  
  <section className="choose-us-area choose-us-area-two pt-100 pb-70">
  <div className="container">
    <div className="section-title">
      <h2>We help you find the best investment opportunities</h2>
      <p>We specialise in providing our clients with access to carefully selected UK investment
       providers across a whole range of markets including residential and commercial property.
        After applying our Smart network and direct relationships with providers, we are able to 
        present opportunities that the private investor cannot gain access to on their own.</p>
    </div>
    <div className="row">
      <div className="col-lg-4 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".2s">
          <span className="flaticon-left-quotes-sign" />
          <h3>Boost Your Annual Income</h3>
          <p>
          High Rate Interest payments can be made at Quarterly, Bi-annually or Annual intervals
          </p>
          {/* <Link to="/register">
          <i className="flaticon-right" />
          </Link> */}
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-left-quotes-sign" />
          <h3>As Safe As Houses</h3>
          <p>
          Investor capital is secured by way of a Legal Charge against physical UK properties
          </p>
          {/* <Link to="/register">
          <i className="flaticon-right" />
          </Link> */}
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-left-quotes-sign" />
          <h3>End-to-End Service</h3>
          <p>
          An investment consultant can assist you throughout matching investment options to your requirements.
          </p>
          {/* <Link to="/register">
          <i className="flaticon-right" />
          </Link> */}
        </div>
      </div>
    </div>
  </div>
</section>

  {/* Start Service Area Two */}
  
  {/* End Service Area */}
  {/* End Business Contact Area */}
  
  {/* End Business Contact Area */}
  {/* Start Get Quot Area */}
  <section className="get-quat-area ptb-100">
    <div className="container">
      <div className="section-title">
        <h2>Request a Consultation</h2>
        <p>
          Submit a request and we will get back to you via Email
        </p>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="get-quat-img wow fadeInLeft" data-wow-delay=".3s">
            <img src="assets/img/callfemale.png" alt="Image" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="quat-form">
            <div className="tab">
              {/* <ul className="tabs">
                <li>
                  <a href="#">
                    <div className="dot" />
                    Car
                  </a>
                </li>
                
              </ul> */}
              <div className="tab_content">
                <div className="tabs_item">
                  {/* <p>Start with your zip code to compare car insurance</p> */}
                  <div className="form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="Name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="Email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="textarea"
                        className="form-control"
                        id="Number"
                        placeholder="Details"
                      />
                    </div>
                    
                    <button type="submit" className="default-btn">
                      Submit Request
                    </button>
                    <ul className="ratings">
                      {/* <li>45 Ratings</li> */}
                      <li className="right">
                        Already a Member?
                        <Link to="/login">
                          SIGN IN
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

        )
    }
}

export default MutualFunds;