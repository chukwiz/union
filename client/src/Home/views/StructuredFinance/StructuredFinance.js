import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class StructuredFinance extends Component {
    render(){
        return(
            <div>
  <div className="page-title-area bg-17">
    <div className="container">
      <div className="page-title-content">
        <h2>Structured Finance</h2>
        <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        
          <li>Services</li>
          <li>Structured Finance</li>
        </ul>
      </div>
    </div>
  </div>
  {/* End Page Title Area */}
  {/* Start Choose Us Area */}
  <section className="choose-us-area choose-us-area-two pt-100 pb-70">
    <div className="container">
      <div className="section-title">
        <h2>We are Award Wining Company</h2>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </p> */}
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="single-choose wow fadeInUp" data-wow-delay=".2s">
            <span className="flaticon-contract" />
            <h3>Segregated Accounts</h3>
            <p>
            Investor’s money is kept in segregated accounts with top-tier banks 
            that cannot be claimed by creditors or used by us. Account base currencies are
             available in EUR, GBP, USD, CHF and JPY
            </p>
            {/* <a href="insurance-details.html">
              <i className="flaticon-right" />
            </a> */}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
            <span className="flaticon-contract" />
            <h3>Negative Balance Protection</h3>
            <p>
            Through the use of an automated transaction monitoring and risk
             management system, a Consulting WP client’s account will never be allowed to reach negative balance.
            </p>
            {/* <a href="insurance-details.html">
              <i className="flaticon-right" />
            </a> */}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="single-choose wow fadeInUp" data-wow-delay=".4s">
            <span className="flaticon-contract" />
            <h3>Insured Client Funds</h3>
            <p>
            We are a proud member of the Investor Compensation Fund which acts as a guarantor of last resort for
             our investors. IFC covers the maximum amount of 100.000 EUR for MiFID clients.
            </p>
            {/* <a href="insurance-details.html">
              <i className="flaticon-right" />
            </a> */}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="single-choose wow fadeInUp" data-wow-delay=".5s">
            <span className="flaticon-contract" />
            <h3>Financial Regulation</h3>
            <p>
            Licensed and registered under the Government of Canada with Business Number (BN): 840439137 and Registry 
            ID: 659839111 in accordance with the Markets and Financial Instruments Directive
            </p>
            {/* <a href="insurance-details.html">
              <i className="flaticon-right" />
            </a> */}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="single-choose wow fadeInUp" data-wow-delay=".5s">
            <span className="flaticon-contract" />
            <h3>Extreme Transparency Policy</h3>
            <p>
            Our Extreme Transparency Policy ensures that the client receives a transparent price feed, transparent liquidity,
             transparent historical data, transparent market information at all times.
            </p>
            {/* <a href="insurance-details.html">
              <i className="flaticon-right" />
            </a> */}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="single-choose wow fadeInUp" data-wow-delay=".5s">
            <span className="flaticon-contract" />
            <h3>USD 825.000.000 NOP</h3>
            <p>
            The total value of all of the client’s open positions combined (net open position) may not 
            surpass USD 825.000.000.
            </p>
            {/* <a href="insurance-details.html">
              <i className="flaticon-right" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Choose Us Area */}
  {/* Start About Area */}
  <section className="about-area ptb-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-content">
            <h2>Gain Access to working capital</h2>
            <p>
            Whether you are a corporation with a supply chain you rely on, a financial institution, 
            a FinTech or a small to mid-sized business, we all rely on working capital to sustain and grow.
            </p>
            <p>
            At Union Finance Investment, we believe that all should have access to the capital markets and access to the financing and structured trade finance they need in order to:
            </p>
            <div className="about-list">
            <ul>
                <li>
                  <i className="flaticon-checked" />
                  Secure a supply chain
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Add incremental revenue
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Get ahead of the competition
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Grow your business
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Increase product and financial solution offerings
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
              <img src="assets/img/banner/banner4.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End About Area */}
  <div className=" pt-100 pb-70">
  <section className>
    <div className="container">
      <div className="section-title">
        <span>Our Service</span>
        <h2>How It Works</h2>
        <p>
          Oppor ipsum suspendice consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore mua. Quis ipsum suspendices
          gravida.
        </p>
      </div>
      <div className="row">
        <div className="pb-70">
          <h2 style={{textAlign:"left"}}>For Corporations</h2>
          <p><i className="flaticon-checked" style={{marginRight:"10px",fontSize:"20px",color:"#262566"}} />  For our corporate clients, we help our clients address both sides of the balance sheet: Accounts 
          payable and Accounts receivable programs, to reduce risk, optimize the balance sheet improve day sales
          outstanding and improve days payable outstanding.</p>
          <p>
          <i className="flaticon-checked" style={{marginRight:"10px",fontSize:"20px",color:"#262566"}} />
             Accounts Payable - Union Finance Investment has created a flexible, scalable reverse factoring solution to address gaps in 
          traditional financing solutions. We extend the reach to the mid and long tail of the supply chain that may
           currently be excluded from your existing financial programs
          </p>
          <p>
          <i className="flaticon-checked" style={{marginRight:"10px",fontSize:"20px",color:"#262566"}} />
             Accounts Receivable - For those times you need access to Accounts Receivable Financing and you are unable
           to access traditional financing, that is when Union Finance Investment is here. We can help you grow your business with
            non-debt working capital. In fact our clients have access to up to $30,000,000+ in capital.
          </p>
        </div>
        <div className="pb-70">
          <h2 style={{textAlign:"left"}}>For Banks</h2>
          <p><i className="flaticon-checked" style={{marginRight:"10px",fontSize:"20px",color:"#262566"}} />  
          Union Finance Investment partners with banks to offer solutions that can improve profitability and address competition head-on.
           In fact, that's why we created McXel, a complementary financial solution for banks. McXel enables banks to offer
            non-debt early payment options to their business customers. With Xel, banks can continue to serve clients in this
             ever-changing regulatory environment by providing additional capital offerings to customers - such as Supply Chain
              Finance and Accounts Receivable Finance.</p>
        </div>
        <div className="pb-70">
          <h2 style={{textAlign:"left"}}>For FinTech Companies</h2>
          <p><i className="flaticon-checked" style={{marginRight:"10px",fontSize:"20px",color:"#262566"}} />  
          Increase your offerings by adding an accelerated payment solution to your platform. Whether you are an ERP, einvoicing, 
          eProcurement or ePayments platform, our Finance as a Solution (FAAS), invoiceXcel(iX) allows you to offer both a 
          working capital solution to your users as well as a technology solution for your platform.iX helps our clients add 
          incremental revenue, jump ahead of their competition,and increases their customer satisfaction. Imagine what it could 
          do for your business!</p>
        </div>
        
      </div>
    </div>
  </section>
</div>

  {/* Start Service Area Two */}
  
  {/* End Service Area */}
  
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

export default StructuredFinance;