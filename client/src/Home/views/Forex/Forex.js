import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Chart from '../../components/Chart/Chart';

class  Forex extends Component {
    render(){
        return(
            <div>
  <div className="page-title-area bg-17">
    <div className="container">
      <div className="page-title-content">
        <h2>Forex</h2>
        <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        
          <li>Investments</li>
          <li>Forex</li>
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
              <img src="assets/img/forext.jpg" alt="Image" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-content" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h2>Forex</h2>
            <p style={{textAlign:"center"}}>
            The 95% of amateur traders don’t get consistent profits. Do you want to
             be one of the other 5% profitable investors? Forex Investment Companies are 
             what you are looking for!
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

  <section className="choose-us-area choose-us-area-two pt-100 pb-70">
    <div className="container">
      <div className="section-title">
        <h2>What is a Forex Investment Company?</h2>
      </div>
      <div className="row">
      <div className="col-sm-12">
          <p><i className="flaticon-checked" style={{marginRight:"10px",fontSize:"20px",color:"#262566"}} />  A forex investment company is a financial business which provides trading services in your broker’s accounts.
          Your account will be operated by a professional group of asset managers paying an agreed monthly fee. That fee
           will be automatically deducted of your broker’s account if the account gets profits</p>
          <p><i className="flaticon-checked" style={{marginRight:"10px",fontSize:"20px",color:"#262566"}} />  Let us manage your account and get profits at last in your Forex investments</p>
          <p><i className="flaticon-checked" style={{marginRight:"10px",fontSize:"20px",color:"#262566"}} />  Feel the peace of mind that gives having a managed account by a Forex investment company. We’ll be getting profits for you meanwhile you are walking or sleeping</p>
      </div>
      </div>
    </div>
  </section>

  {/* End About Area */}

  <section className="choose-us-area-three pt-100 pb-70">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="single-choose wow fadeInUp" data-wow-delay=".2s">
          <span className="flaticon-left-quotes-sign" />
          <h5 style={{textAlign:"center"}}>
          We offer our investors access to high-growth investment opportunities in trading on the stock and currency markets.
We implement the latest developments in trading and financial market analysis and offer our participants a choice of
 2 investment plans. Our company benefits from an extensive network of global clients
          </h5>
          <Link to="/register">
          <i className="flaticon-right" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

  {/*  */}

  <section className="about-area ptb-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-content">
            <h2>Benefits For You</h2>
            <div className="about-list">
            <ul>
                <li>
                  <i className="flaticon-checked" />
                  Professional Management of Your Forex Investment Account
                </li>
                <li>
                  <i className="flaticon-checked" />
                  No Forex Trading Skills Required
                </li>
                <li>
                  <i className="flaticon-checked" />
                  No Precious Time Required
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Minimum Deposit 10,000 US dollars
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Secure: Money Deposited with a Regulated FOREX Broker
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Guarantees Safety to Every Client’s Investment
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Equity Protection Guaranteed
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Low Performance Fee
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Strict Money Management Rules
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Safety of Your Private Information
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Offshore Trading No Tax Deducted
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Beneficial Partnership Conditions
                </li>
                <li>
                  <i className="flaticon-checked" />
                  24/7 Customer Support
                </li>
              </ul>
            </div>
            <Link to="/register" className="default-btn">
              Get Started
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-img-3 wow fadeInRight" data-wow-delay=".2s">
            <img src="assets/img/about-img-3.jpg" alt="Image" />
            <div className="about-img-2">
              <img src="assets/img/forex.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  */}

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

export default Forex;