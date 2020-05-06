import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Chart from '../../components/Chart/Chart';

class  FinancialServices extends Component {
    render(){
        return(
            <div>
  <div className="page-title-area bg-17">
    <div className="container">
      <div className="page-title-content">
        <h2>Financial Services</h2>
        <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        
          <li>Services</li>
          <li>Financial Services</li>
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
              <img src="assets/img/about-img-2.jpg" alt="Image" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-content">
            <h2>Financial Services</h2>
            <p>
            The services sector is an area where we see great changes and innovation to meet the new market needs.
             The services sector is going to take a greater market position relative to other sectors.
            </p>
            <p>
            According to the OECD, the service sector now accounts for over 70% of total employment and value
             added in OECD economies. It also represents almost all employment growth in the OECD area.
            </p>
            <p>
            Bloomberg indicates that services continue to be the most sought after commodity in the private
             sector.We accompanied several financial advisory firms and asset management companies, financial services 
             software companies and consulting firms Management
            </p>
            <Link to="/register" className="default-btn">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className>
    <div className="container">
      <div className="section-title">
        <span>Financial Services</span>
        <h2>Our definition of Financial Services</h2>
        <p>
          Oppor ipsum suspendice consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore mua. Quis ipsum suspendices
          gravida.
        </p>
      </div>
      <div className="row">
        <div className="pb-70">
          <h2 style={{textAlign:"left"}}>For Corporations</h2>
          <p><i className="flaticon-checked" style={{marginRight:"10px",fontSize:"20px",color:"#262566"}} />Financial
           services are economic services provided by the financial sector, which encompass a wide range of 
           organizations managing money, including credit card companies, banks, credit card companies, insurance 
           companies, accounting firms, consumer finance companies, securities brokerage, investment funds, goods real 
           estate funds and some public or semi-public services</p>
          <p>
          <i className="flaticon-checked" style={{marginRight:"10px",fontSize:"20px",color:"#262566"}} />
          While there are many companies specializing in the financial sector, there are many more companies that
           provide services to professionals or individuals outside finance
          </p>
          <p>
          <i className="flaticon-checked" style={{marginRight:"10px",fontSize:"20px",color:"#262566"}} />
          Highly qualified and experienced staff give independent advice on such financial services as pensions, inheritance tax,
           life assurance and protection, health insurance, employee benefits, investments, business protection and wealth
            planning. We help companies pivot into more profitable directions where they can expand and grow. It is 
            inevitable that individuals and companies will end up making a few mistakes; we help them correct these mistakes.
          </p>
          <p>
          <i className="flaticon-checked" style={{marginRight:"10px",fontSize:"20px",color:"#262566"}} />
          We help companies turnaround their non-profitable ventures into something that benefits them. Our specialty lies in
           understanding what makes a company special and what makes it tick.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section className="about-area ptb-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-content">
            <h2>Business Planning and strategy</h2>
            <p>
            Our clients are often surprised by the possibilities we present to them; we work with leading
             institutions in the banking, insurance and asset management sectors in all major areas, including:
            </p>
            <div className="about-list">
            <ul>
                <li>
                  <i className="flaticon-checked" />
                  Retail banking
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Private banking and wealth management
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Corporate banking and capital markets
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Transaction banking
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Asset management
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Life and property insurance
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Health insurance
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Risk, liquidity and capital management
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Stock markets and financial market infrastructure
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
          <Chart/>
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
            <h2>Business plan market</h2>
            <p>
            Union Finance Investment has deep expertise in financial services, but we also look beyond the industry and draw upon
             our capabilities experience. We tailor these offerings to the needs of our financial services clients
              to help them solve problems or pursue opportunities in many areas, including:
            </p>
            <div className="about-list">
            <ul>
                <li>
                  <i className="flaticon-checked" />
                  Growth strategy
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Organizational effectiveness
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Operational excellence
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Compliance
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Information technology
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Mergers and acquisitions
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Change management
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Private equity
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Performance improvement
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Customer experience
                </li>
              </ul>
            </div>
            <Link to="/register" className="default-btn">
              Get Started
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-img-3 wow fadeInLeft" data-wow-delay=".2s">
            <img src="assets/img/about-img-3.jpg" alt="Image" />
            <div className="about-img-2">
              <img src="assets/img/about-img-2.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  */}
  {/* End About Area */}
  

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

export default FinancialServices;