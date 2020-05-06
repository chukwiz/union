import React from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
    return(
      <div>
      <div className="page-title-area bg-17">
        <div className="container">
          <div className="page-title-content">
            <h2>FAQ</h2>
            <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Page Title Area */}
      {/* Start FAQ Area */}
      <section className="faq-area faq-page pt-100">
        <div className="container">
          <div className="faq-accordion">
            <h2>Get Every Single Answer</h2>
            <h4>General Issues</h4>
            <ul className="accordion">
              <li className="accordion-item">
                <a className="accordion-title active" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  Does Cryptify have an official registration?
                </a>
                <div className="accordion-content show">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <p>
                      Yes, we are legally registered in the UK. You can view and download our certificate on the website.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <img src="assets/img/faq/1.png" alt="Image" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  What services does Cryptify provide?
                </a>
                <p className="accordion-content">
                We are engaged in trust management and investment of capital.
                </p>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  Does the Cryptify team already have investment experience?
                </a>
                <div className="accordion-content">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <p>
                      Yes, we have formed an investment portfolio that brings a stable income.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <img src="assets/img/faq/2.png" alt="Image" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  What are the advantages of Cryptify?
                </a>
                <p className="accordion-content">
                We aim for a long-term relationship with each client. Our goal is to become the leader of the investment market.
                </p>
              </li>
            </ul>
            {/*  */}
            <h4 style={{marginTop:20}}>Main Issues</h4>
            <ul className="accordion">
              <li className="accordion-item">
                <a className="accordion-title active" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  Who can become an investor of Cryptify?
                </a>
                <div className="accordion-content">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <p>
                      Anyone regardless of his knowledge and skills can make a deposit.
                       A team of experienced traders manages common capital, making the most profitable investments.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <img src="assets/img/faq/1.png" alt="Image" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  What should I do to make a profit?
                </a>
                <p className="accordion-content">
                Register, open an account, select a plan and make a deposit.
                </p>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  How can I make a deposit?
                </a>
                <div className="accordion-content">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <p>
                      When making a deposit, you transfer the capital to us in 
                      trust management. We invest your contribution, and you will receive interest 
                      according to plan. In addition, you can take part in the affiliate program and receive 
                      7% from the deposit of each new depositor that you have invited.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <img src="assets/img/faq/2.png" alt="Image" />
                    </div>
                  </div>
                </div>
              </li>
              </ul>
            {/*  */}
            {/*  */}
            <h4 style={{marginTop:20}}>Financial Issues</h4>
            <ul className="accordion">
              <li className="accordion-item">
                <a className="accordion-title active" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  How much can I invest? And what are the withdrawals limits?
                </a>
                <div className="accordion-content">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <p>
                      The minimum Deposit is $1000, the maximum Deposit is
                       $30,000,000. The minimum Withdrawal USD amount is $10. All cryptocurrency transactions 
                       are processed after working days.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <img src="assets/img/faq/1.png" alt="Image" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  Do you charge any hidden fees from withdrawals?
                </a>
                <p className="accordion-content">
                No, we don't charge any hidden fees.
                </p>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  When can I get the first income?
                </a>
                <div className="accordion-content">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <p>
                      It depends on the plan. You will receive the first interest after 1 Week from 
                      the time the deposit is activated.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <img src="assets/img/faq/2.png" alt="Image" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  Can I withdraw my deposit after the plan expires?
                </a>
                <p className="accordion-content">
                Yes, you can withdraw the deposit in full.
                </p>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  Do you take a commission to withdraw interest?
                </a>
                <p className="accordion-content">
                No, we do not. But you pay a commission according to the rules of the chosen payment system.
                 We do not establish any hidden fees
                </p>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  Can I get a commission from reinvesting?
                </a>
                <p className="accordion-content">
                Yes, you get a 5% commission on any new investment made.
                </p>
              </li>
            </ul>
            {/*  */}
            <h4 style={{marginTop:20}}>Investment Issues</h4>
            <ul className="accordion">
              <li className="accordion-item">
                <a className="accordion-title active" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  How do we determine your investment Objectives?
                </a>
                <div className="accordion-content">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <p>
                      Your investments are the means to accomplishing your goals; they are not ends in themselves. 
                      Our planning work helps us to understand both your present and future financial needs. We then
                       determine how your investment assets will need to perform to achieve your goals. We also
                        believe you should know the amount of risk that is necessary to accomplish them. With this 
                        in mind, you will be in the best position to make informed decisions about the trade-offs 
                        between short-term volatility and your long-term financial security and well-being that are
                         most appropriate and best suit your temperament.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <img src="assets/img/faq/1.png" alt="Image" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  How do we design your investment portfolio?
                </a>
                <p className="accordion-content">
                Once we have established the objective(s) of your portfolio(s), we determine the combination (or allocation)
                 of investment categories (or asset classes) that seems most likely to achieve the objective(s) of your 
                 portfolio(s). We also attempt to minimize the amount of volatility you will experience along the way. 
                 This allocation is governed by your objectives; it is also influenced by your personal income tax situation 
                 and our analysis of current economic conditions, market valuation levels and specific areas of financial 
                 markets that appear particularly attractive, either because of the opportunities they present or their 
                 undervalued price levels.
                </p>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  How do we select investments given your portfolio's objectives and allocation?
                </a>
                <div className="accordion-content">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <p>
                      Investment expenses matter a lot. Any amount saved means that much more for you. Fortunately,
                       they can be kept quite low. This is our preference except for those cases where a more-costly
                        ‘active manager’ or stock-picker has demonstrated that their ‘skill’ is more than worth paying
                         for compared to a relevant benchmark. Even then, expenses can be reduced through our use of
                          lower-cost institutional-class holdings. Income taxes matter as well. After all, it’s not 
                          just what you make; it’s what you get to keep. Where a specific asset is located in your 
                          overall portfolio affects can impact your tax bill in surprising ways, both this year and
                           over the longer-term. Each individual investment plays a specific role in your overall 
                           portfolio and is located in a certain account of yours for a specific reason. We use a 
                           disciplined approach to evaluate, select and monitor each investment asset. When evaluating
                            an ‘active’ fund manager, we consider their tenure, consistent application of their
                             investment philosophy, shorter and longer term returns as well as volatility relative
                              to appropriate benchmarks
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <img src="assets/img/faq/2.png" alt="Image" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  How do we manage your portfolio with discipline and an eye to the future
                </a>
                <p className="accordion-content">
                Countless studies demonstrate that human behavior is often detrimental to the investment results you 
                need to achieve your goals. In fact, two psychologists shared a Nobel Prize in Economics for their 
                work in this area. Other research presents compelling evidence that paying attention to market
                 valuation levels can make a material difference in your portfolio’s performance whether measured
                  by long-term return, short-term volatility or the amount you can withdraw sustainably. Our investment
                   process helps us to guard against these pitfalls and to take advantage of such evidence-based 
                   research. It guides us as we evaluate your portfolio’s overall allocation and its specific holdings
                    to determine any changes that should be made. These changes are influenced by the conditions at 
                    hand as well as the emergence of trends that are likely to impact the future. When we believe 
                    change is warranted, we communicate this and the thinking behind it to you clearly and succinctly.
                     For our clients who have given us discretion to do so in accordance with their Investment Policy 
                     Statement, we promptly make the necessary trades.
                </p>
              </li>
            </ul>
            {/*  */}
            <h4 style={{marginTop:20}}>Account</h4>
            <ul className="accordion">
              <li className="accordion-item">
                <a className="accordion-title active" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  How many accounts can I create?
                </a>
                <div className="accordion-content">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <p>
                      Only one. If you try to create a second account, your profile will be disabled.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <img src="assets/img/faq/1.png" alt="Image" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  How can I create my own account?
                </a>
                <p className="accordion-content">
                Click the registration link and enter all the data. Be sure to review the terms of cooperation and
                 confirm this at registration. After that you will have access to your personal
                  account.
                </p>
              </li>
              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="bx bx-plus" />
                  What if I forgot my password?
                </a>
                <div className="accordion-content">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <p>
                      Click the "Forgot Password" link and enter your email address.
                        Then follow the instructions.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <img src="assets/img/faq/2.png" alt="Image" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/*  */}
          </div>
        </div>
      </section>
      {/* End FAQ Area */}
      {/* Start Contact Area */}
      <section className="contact-area mt-0 ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-wrap">
                <div className="contact-form">
                  <div className="section-title">
                    <h2>Ask Questions</h2>
                  </div>
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
                            rows={8}
                            required
                            data-error="Write your message"
                            placeholder="Your Message"
                            defaultValue={""}
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <button type="submit" className="default-btn page-btn">
                          Send Message
                        </button>
                        <div id="msgSubmit" className="h3 text-center hidden" />
                        <div className="clearfix" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    )
}

export default Faq;