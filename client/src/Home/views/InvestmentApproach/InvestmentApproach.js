import React, { Component } from 'react';
import { connect } from 'react-redux';

class InvestmentApproach extends Component {
    render() {
        return (
            <div>
  <div className="page-title-area bg-17">
    <div className="container">
      <div className="page-title-content">
        <h2>Investment Approach</h2>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>About</li>
          <li>Investment Approach</li>
        </ul>
      </div>
    </div>
  </div>
  {/* End Page Title Area */}
  {/* End Service Details Area */}
  <section className="service-details-area ptb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="service-sidebar-area">
            <div className="service-list service-card">
              <h3 className="service-details-title">Facilities</h3>
              <ul>
                <li>
                  Business Insurance
                  <i className="bx bx-check" />
                </li>
                <li>
                  Health Insurance
                  <i className="bx bx-check" />
                </li>
                <li>
                  Home Insurance
                  <i className="bx bx-check" />
                </li>
                <li>
                  Car Insurance
                  <i className="bx bx-check" />
                </li>
              </ul>
            </div>
            <div className="service-list service-card">
              <h3 className="service-details-title">Contact Info</h3>
              <ul>
                <li>
                  <a href="tel:+822456974">
                    +822456974
                    <i className="bx bx-phone-call bx-rotate-270" />
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@prevoz.com">
                    hello@surety.com
                    <i className="bx bx-envelope" />
                  </a>
                </li>
                <li>
                  9:00 AM – 8:00 PM
                  <i className="bx bx-time" />
                </li>
              </ul>
            </div>
            <div className="service-list service-card">
              <h3 className="service-details-title">Download Brochures</h3>
              <ul>
                <li>
                  <a href="#">
                    PDF File (1)
                    <i className="bx bxs-cloud-download" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    PDF File (2)
                    <i className="bx bxs-cloud-download" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    PDF File (3)
                    <i className="bx bxs-cloud-download" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    PDF File (4)
                    <i className="bx bxs-cloud-download" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="service-details-wrap">
            <div className="service-img">
              <img src="assets/img/portfolio-details/approach.jpg" alt="Image" />
            </div>
            <h3>We follow an established, clearly defined investment philosophy that applies across all our investment strategies.</h3>
            <p>
            A summary of our investment philosophy is we are risk aware and aim to have lower-than-market levels of volatility in our portfolios. We are conscious of the uncertainty of future returns, so highly concentrated exposures and illiquid holdings are rare in our portfolios. We invest to specific portfolio objectives based on fundamental research; we are not index-based investors. Our research process seeks to identify investment opportunities that can grow and pay sustainable income through time.
            </p>
            <p>
            As active managers we use our own research to invest in companies we believe are undervalued. Once invested, we continuously monitor these positions to ensure the fundamentals behind the decision to invest have not changed. We believe that through skill and opportunity, we can add value over and above the benchmark indices. As a result, our portfolios reflect our best investment ideas and are structured to provide sustainable income and/or capital growth over the medium to long term.
            </p>
            <p className="mb-30">
            Our investment decisions are made from our investor’s perspective and investments are only made following a structured process, combining both quantitative and qualitative factors. We place a strong emphasis on risk management. That is, we seek to invest in high quality, or potentially high quality companies, where the expected return from the investment, will more than adequately compensate us for the potential downside risk.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="choose-us-area choose-us-area-two pt-30 pb-30">
  <div className="container">
    <div className="section-title">
      <h2>What we offer</h2>
      {/* <p>Voted as one of the Most Trusted Bitcoin Investment site, Union Finance Investment
       is by far the best because you can invest in bitcoin and get paid within a week.</p> */}
    </div>
    <div className="row">
      <div className="col-md-4 col-sm-12">
        <div className="single-choose wow fadeInUp" data-wow-delay=".2s">
          <span className="flaticon-left-quotes-sign" />
          <h3>We place emphasis on managing risk.</h3>
          <p>
          We value assets where the expected return will more than compensate us for the potential downside risk. We look to build portfolios which have lower volatility than the broader market.
          </p>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-left-quotes-sign" />
          <h3>We invest on the basis of research.</h3>
          <p>
          We use our own internal research to identify securities we believe are being undervalued by the market. We use a balance of quantitative and qualitative factors to build a deep understanding of each security we invest in.
          </p>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-left-quotes-sign" />
          <h3>We are active managers.</h3>
          <p>
          We believe through skill and opportunity we can add value over and above benchmark indices. We are not index-based investors, we are constantly re-evaluating our portfolios.
          </p>
        </div>
      </div>
      
    </div>
    
  </div>
  
</section>

<section className="choose-us-area choose-us-area-two pt-100 pb-70">
  <div className="container">
    <div className="section-title">
      <h2>Our Investment Style</h2>
      {/* <p>Voted as one of the Most Trusted Bitcoin Investment site, Union Finance Investment
       is by far the best because you can invest in bitcoin and get paid within a week.</p> */}
    </div>
    <div className="row">
      <p>Cryptify’s investment style can be categorised as ‘Defensive Growth’ and our portfolios typically have a lower beta but higher tracking error than the overall market.</p>
      <p>Our research is designed to identify companies that match pre-defined criteria. Companies we invest in should be profitable at the point of initial investment. ‘Blue-sky’, loss-making, cash consuming companies are avoided.</p>
      <p>Our investment criteria requires potential investee companies to demonstrate most of the following characteristics</p>
      <ul>
        <li><i className="flaticon-checked" style={{fontSize:"130%",color:"#262566"}} />   A niche franchise</li>
        <li><i className="flaticon-checked" style={{fontSize:"130%",color:"#262566"}} />   Good order visibility</li>
        <li><i className="flaticon-checked" style={{fontSize:"130%",color:"#262566"}} />   High barriers to entry</li>
        <li><i className="flaticon-checked" style={{fontSize:"130%",color:"#262566"}} />   Pricing power</li>
        <li><i className="flaticon-checked" style={{fontSize:"130%",color:"#262566"}} />   Competitive advantage</li>
        <li><i className="flaticon-checked" style={{fontSize:"130%",color:"#262566"}} />   Significant & growing market presence</li>
        <li><i className="flaticon-checked" style={{fontSize:"130%",color:"#262566"}} />   Ability to sustain profit growth over the long term</li>
        <li><i className="flaticon-checked" style={{fontSize:"130%",color:"#262566"}} />   Not dependent on acquisitions to generate growth</li>
        <li><i className="flaticon-checked" style={{fontSize:"130%",color:"#262566"}} />   High calibre management with a proven track record of creating shareholder value</li>
        <li><i className="flaticon-checked" style={{fontSize:"130%",color:"#262566"}} />   Management teams that hold meaningful equity stakes in the businesses they run</li>
        <li><i className="flaticon-checked" style={{fontSize:"130%",color:"#262566"}} />   Potential to deliver positive news flow on a consistent basis</li>
        <li><i className="flaticon-checked" style={{fontSize:"130%",color:"#262566"}} />   Eﬀective Board structure and sound corporate governance</li>
      </ul>
      <p>The expectation is that we will hold investments for several years. The decision to invest is similar to that of an owner-manager’s business decision to participate in a quality, long-term business franchise</p>
    </div>
    
  </div>
  
</section>

<section className="choose-us-area choose-us-area-two pt-100 pb-70">
  <div className="container">
  
    <div className="section-title mb-30">
    <h5>Real-time adaptability</h5>
      <h2>When uncertainty strikes, we're ready.</h2>
      <p>A portfolio that can’t respond rapidly to new information is exposed to additional risk</p>
      <p>We have the ability to respond quickly and insightfully. With professionals in every major timezone, we monitor investment markets day and night. When it’s time to act, our internal trading capability can implement trades around the clock-potentially protecting portfolios before local operations start their day.</p>
      <div>
        <h3>Responding to major events</h3>
        <div className="row mt-30">
        <div className="col-md-4">
        <span className="flaticon-left-quotes-sign" style= {{fontSize:"50px"}} />
          <h3>Monitor</h3>
          <p>Monitoring investment markets day and night.</p>
        </div>
        <div className="col-md-4">
        <span className="flaticon-left-quotes-sign" style= {{fontSize:"50px"}} />
          <h3>Analyse</h3>
          <p>A robust process to help ensure decisions are sound.</p>
        </div>
        <div className="col-md-4">
        <span className="flaticon-left-quotes-sign" style= {{fontSize:"50px"}} />
          <h3>Act</h3>
          <p>
          The ability to efficiently implement trades around the clock, through our internal trading capability.
          </p>
        </div>
      </div>
    </div>
    </div>    
  </div>
  
</section>

<section>
<div className="container">
  <div className="row">  
<div className="ask-question">
              <h3>Ask Question</h3>
              <form id="contactForm">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        required
                        data-error="Please enter your name"
                        placeholder="Your Name"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        required
                        data-error="Please enter your email"
                        placeholder="Your Email"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        required
                        data-error="Please enter your number"
                        className="form-control"
                        placeholder="Your Phone"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="msg_subject"
                        id="msg_subject"
                        className="form-control"
                        required
                        data-error="Please enter your subject"
                        placeholder="Your Subject"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols={30}
                        rows={5}
                        required
                        data-error="Write your message"
                        placeholder="Your Message"
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="default-btn">
                      <span className="label">Send Message</span>
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden" />
                    <div className="clearfix" />
                  </div>
                </div>
              </form>
            </div>
            </div>
</div>
</section>
</div>

        );
    }
}

export default InvestmentApproach;