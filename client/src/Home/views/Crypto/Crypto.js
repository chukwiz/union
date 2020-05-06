import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Iframe from 'react-iframe';

class  Cryptocurrency extends Component {
    render(){
        return(
            <div>
  <div className="page-title-area bg-17">
    <div className="container">
      <div className="page-title-content">
        <h2>Cryptocurrency</h2>
        <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        
          <li>Investments</li>
          <li>Cryptocurrency</li>
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
        <h2>Top Crptocurrency Price(Current)</h2>
        <div
  style={{
    height: 433,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    boxSizing: "border-box",
    borderRadius: 4,
    textAlign: "right",
    lineHeight: 14,
    fontSize: 12,
    fontFeatureSettings: "normal",
    textSizeAdjust: "100%",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    padding: 0,
    margin: 0,
    width: "100%"
  }}
>
  <div style={{ height: 413, padding: 0, margin: 0, width: "100%" }}>
    <Iframe
      src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=10&pref_coin_id=1505&graph=yes"
      width="100%"
      height="409px"
      scrolling="auto"
      marginWidth={0}
      marginHeight={0}
      frameBorder={0}
      border={0}
      style={{ border: 0, margin: 0, padding: 0 }}
    />
  </div>
</div>

        </div>
        <div className="col-lg-6">
          <div className="about-content" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h2>Cryptocurrency</h2>
            <p style={{textAlign:"center"}}>
            The 95% of amateur traders don’t get consistent profits. Do you want to
             be one of the other 5% profitable investors? Cryptocurrency Investment Companies are 
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

  <section className="about-area ptb-100">
    <div className="container">
      <div className="row align-items-center">
      <div className="col-lg-6">
          <div className="about-content" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h2>Cryptocurrency</h2>
            <p style={{textAlign:"center"}}>
            The 95% of amateur traders don’t get consistent profits. Do you want to
             be one of the other 5% profitable investors? Cryptocurrency Investment Companies are 
             what you are looking for!
            </p>
            <Link to="/register" className="default-btn">
              Get Started
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
        <h2>Current Bitcoin Price Chart</h2>
        <div
  style={{
    height: 560,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    boxSizing: "border-box",
    borderRadius: 4,
    textAlign: "right",
    lineHeight: 14,
    fontSize: 12,
    fontFeatureSettings: "normal",
    textSizeAdjust: "100%",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    padding: 0,
    margin: 0,
    width: "100%"
  }}
>
  <div style={{ height: 540, padding: 0, margin: 0, width: "100%" }}>
    <iframe
      src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505"
      width="100%"
      height="536px"
      scrolling="auto"
      marginWidth={0}
      marginHeight={0}
      frameBorder={0}
      border={0}
      style={{ border: 0, margin: 0, padding: 0, lineHeight: 14 }}
    />
  </div>
</div>


        </div>
        
      </div>
    </div>
  </section>

  {/*  */}

  <section className="choose-us-area choose-us-area-two pt-100 pb-70">
  <div className="container">
    <div className="section-title">
      <h2>WHY UFI IS SPECIAL</h2>
      <p>Voted as one of the Most Trusted Bitcoin Investment site, Union Finance Investment
       is by far the best because you can invest in bitcoin and get paid within a week.</p>
    </div>
    <div className="row">
      <div className="col-lg-6 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".2s">
          <span className="flaticon-left-quotes-sign" />
          <h3>SWIFT PAYMENTS</h3>
          <p>
          Union Finance Investment offers unwavering performance with our world-class matching engine, 
          supporting up to 1,200,000 orders per second. We ensure fast and reliable crypto 
          payments, even at peak times. Our company is processing payments multiple times a
           day automatically including weekends and holidays.
          </p>
        </div>
      </div>
      <div className="col-lg-6 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-left-quotes-sign" />
          <h3>FAST SUPPORT RESPONSE</h3>
          <p>
          The support team is always online 24/7 to give you instant response to all your questions and inquiries.
           Send us an Email to talk to our representative.
          </p>
        </div>
      </div>
      <div className="col-lg-6 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-left-quotes-sign" />
          <h3>SECURE</h3>
          <p>
          We protect your assets with a multi-tier & multi-cluster system architecture. And with our
           SAFU (Secure Assets Fund for Users) guarantee, you can rest assured that your funds are
            secure with Union Finance Investment.
          </p>
        </div>
      </div>
      <div className="col-lg-6 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-left-quotes-sign" />
          <h3>GLOBAL BITCOIN INVESTMENT</h3>
          <p>
          No restrictions, we are available in every country worldwide. Anyone can make money with Bitcoin investment,
           your return on investment is guaranteed and profitable.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  */}

<section className="choose-us-area-three pt-100 pb-70">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="single-choose wow fadeInUp" data-wow-delay=".2s">
          <span className="flaticon-left-quotes-sign" />
          <h2>A simple global bitcoin and financial infrastructure that can empower billions of people.</h2>
          <h5 style={{textAlign:"center"}}>
          Union Finance Investment is designed to provide an easy and efficient way to integrate your trading and investing 
          into our platform. Union Finance Investment started with the idea that a technology-driven brokerage could operate
           with significantly less overhead . Union Finance Investment is accessible to anyone with an entry-level smartphone 
           and data connectivity.
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

<section className="choose-us-area choose-us-area-two pt-100 pb-70">
  <div className="container">
    <div className="section-title">
      <h2>Best Medium To Invest.<br/>
      How To Invest in Bitcoin</h2>
      <p>The steps below are guidelines to investing Bitcoin with Union Finance Investment</p>
    </div>
    <div className="row">
      <div className="col-lg-4 col-sm-12">
        <div className="single-choose wow fadeInUp" data-wow-delay=".2s">
          <span className="flaticon-user" />
          <h3>Create an Account</h3>
          <p>
          Click on get started to create a free account. Login with your email and confirm your Registration
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-user" />
          <h3>Choose a Plan</h3>
          <p>
          We have Flexible bitcoin investment plan to choose from. Choose the plan that suits you
           and deposit the amount you want considering the minimum and maximum bitcoin deposit.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-user" />
          <h3>Withdraw Fund</h3>
          <p>
          Our payment system is fully automated to avoid delay in bitcoin withdrawal.
           On Deposit Maturity, click on Withdraw and your bitcoin will be sent to your provied wallet account automatically.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  {/*  */}

  <section className="services-area ptb-100">
  <div className="container">
    <div className="section-title">
      <h2>WHY CHOOSE US?</h2>
      <p>Our activities are focused on establishing a long-term trust relationship between the company,
       its partners and customers. Our goal - a stable income of each investor. If you choose Bitcoinbanking
        company as your reliable financial partner, you can be assured of a high degree of professionalism of 
        our traders and financial experts.</p>
    </div>
    <div className="row">
      <div className="col-lg-4 col-sm-12">
        <div className="single-choose wow fadeInUp" data-wow-delay=".2s">
          <span className="flaticon-left-quotes-sign" />
          <h3>TRADING</h3>
          <p>
          Trading in crypto currencies is the safest trade that can be made on the stock exchange.
           Just with bitcoin, we have invested billions in our former Wall Street employers.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-left-quotes-sign" />
          <h3>FAST PAYMENTS</h3>
          <p>
          Our company is processing payments multiple times a day Automatically , including weekends and holidays.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-left-quotes-sign" />
          <h3>GLOBAL INVESTMENT</h3>
          <p>
          Our Company’s investment offer is available to all Bitcoin users around the world
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-sm-12">
        <div className="single-choose wow fadeInUp" data-wow-delay=".2s">
          <span className="flaticon-left-quotes-sign" />
          <h3>DDOS PROTECTION</h3>
          <p>
          Our company website is fully protected against cyber attacks, ensuring us a maximum uptime.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-left-quotes-sign" />
          <h3>SSL CERTIFICATE</h3>
          <p>
          All our website transactions are fully secured and encrypted through the SSL security protocol.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-left-quotes-sign" />
          <h3>SUPPORTS</h3>
          <p>
          High-quality, 24/7 support at all stages of cooperation
          </p>
        </div>
      </div>
    </div>
  </div>
    <div className="services-shape">
      <img src="assets/img/services-shape-1.png" alt="Image" />
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

export default Cryptocurrency;