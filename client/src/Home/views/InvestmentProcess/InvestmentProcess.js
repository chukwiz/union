import React, { Component } from 'react';
import { connect } from 'react-redux';

class InvestmentProcess extends Component {
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
          <li>Investment Process</li>
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
            <h2>Our Investment Process</h2>
            <h5>Investing Based on Facts, Not Emotions</h5>
            <p>
            While your feelings about money play a prominent role in determining the strategy that is right for you, we don't think anyone's emotions–including our own–should have a role in making everyday decisions about your investments. Everything we do in your portfolio is based on using decades of academic research to identify an optimal mix of assets and make investment shifts accordingly. Relying on science, rather than emotions and predictions has benefited our clients time and again.
            </p>
            <p>
            In supporting an Active Management Strategy, we monitor price trends to identify asset classes that are showing strength and investment opportunities in these asset classes, even including cash.
            </p>
            <p>
            Having a disciplined systematic method of buying and selling can help capture profits while potentially mitigating losses that are experienced by holding a position that continues to decline. Taking a small loss on a trade, then moving to another more defensive or potentially more productive category/sector, is often better than waiting for a current position to recover or return to its original value.
            </p>
            <div className="service-img">
              <img src="assets/img/portfolio-details/investprocess.jpg" alt="Image" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="choose-us-area choose-us-area-two pt-30 pb-30">
  <div className="container">
    {/* <div className="section-title">
      <h2>What we offer</h2>
    </div> */}
    <div className="row">
      <h3>Controlling Risk</h3>
      <p>Over the years, we have found that unexpected risk is the number one reason investors abandon their strategies and fail to achieve their goals. That is why so much of what we do focuses on reducing risk in your portfolio.</p>
      <p>This does not mean we think everyone should own low-risk investments: far from it. We also have strategies for middle-of-the-road and more adventurous investors. Every one of our strategies follows the same theme: "...doing all we can to achieve the results you want at the lowest possible level of risk.” This makes it easy for you to stay with the program long enough to experience success.</p>
      <p>For active management to have the potential to deliver outperformance over the medium to long term after fees, we believe that fund managers must have strong conviction in their best investment ideas.</p>
      <h3>Independent and Hands-On</h3>
      <p>Portfolios are only as strong as the investments they contain. We favor using a globally diversified portfolio of mutual funds to help our clients achieve financial success</p>
      <p>Through TD Ameritrade, UFI Advisors has access to thousands of mutual funds to choose from. We owe allegiance only to our clients, and that independence allows us to choose what we regard as the highest quality investments available for your portfolio.</p>
      <h3>Long-Term Approach</h3>
      <p>
      Because it reduces risk and increases the likelihood of success, we encourage our clients to adopt a long-term view of investing. Returns can vary widely in the short run, even with investments that have traditionally been considered conservative and secure. Owning investments for a longer period of time, especially five years or more reduces the impact of year-to-year fluctuations. Long-term investing creates a smoother investment journey, making your financial road easier and more secure.
      </p>
    </div>
    
  </div>
  
</section>

<section className="choose-us-area choose-us-area-two pt-100 pb-70">
  <div className="container">
    <div className="section-title">
      <h2>A Five-Step Approach</h2>
      {/* <p>Voted as one of the Most Trusted Bitcoin Investment site, Union Finance Investment
       is by far the best because you can invest in bitcoin and get paid within a week.</p> */}
    </div>
    <div className="row mb-30">
       <div className="col-md-6">
         <img src="assets/img/invest_process.jpg" />
       </div>
       <div className="col-md-6" style={{alignSelf:"center"}}>
         <p>At Horizon Investment Group, our goal is to better position clients’ portfolios for accumulation, preservation, and distribution of wealth. Our investment process offers our clients access to the knowledge, resources, and experience of professional investment managers while receiving ongoing guidance from us, your investment adviser representatives.</p>
         <p>We employ a five-step process that identifies your goals, constructs an Investment Policy Statement, implements the investment plan, and periodically monitors it for effectiveness through market cycles.</p>
         <p>We follow certain standards of conduct while managing your portfolio, which can include offering diversification, analyzing risk and returns, tax reduction strategies, avoiding expenses that are not justified by your needs, and delegating duties where specialized assistance is needed.</p>
         <p>The goals and needs of each client are unique. Investment returns and time horizons that you desire can be quite different from those of other clients. The general process that we follow together includes these five steps</p>
       </div>
    </div>
    <div className="row">
      <h3>Understanding your goals and needs</h3>
      <p>
      In the first step, we take the time to learn about your needs and objectives. We guide you through a series of questions that can help clarify your current financial position, investment goals, and outlook. This evaluation also gives you a complete picture of your risk tolerance, time horizon, and cash flow needs. By understanding your current situation and your goals, we can develop a strategy that bridges today’s reality with tomorrow’s objectives.
      </p>

      <h3>Developing your investment policy statement</h3>
      <p>
      Following, we will create an Investment Policy Statement, which outlines how your account should be managed. This document usually summarizes risk tolerance, time horizon, asset allocation, fund selection and the rebalancing criteria by which your accounts are managed. This can serve as your blueprint for potential investment success.
      </p>

      <h3>Designing your portfolio</h3>
      <p>When your investment objectives are clear, we can develop possible investment allocation strategies. Strategies are selected for optimal asset allocation,* which can be the most important decision affecting your long-term investment performance. How assets are dispersed among various asset classes can have more impact on performance than the selection of a specific mutual fund, stock or bond within an asset class.</p>
       
       <h3>Implementing your plan</h3>
       <p>With a wide range of investments in a flexible investment platform, we will customize your portfolio by selecting investments such as mutual funds, exchange traded funds (ETFs), stocks and bonds that we believe will best help you achieve your investment objectives.</p>

       <h3>Conducting periodic portfolio reviews</h3>
       <p>Once a plan is set in place, we continually monitor your portfolio. We also provide a periodic review that encompasses investment objectives and portfolio performance to help ensure that progress is being made toward your original goals</p>
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

export default InvestmentProcess;