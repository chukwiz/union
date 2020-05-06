import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';

class ContactUs extends Component {
  render(){
    return(
      <div>
  <div className="page-title-area bg-14">
    <div className="container">
      <div className="page-title-content">
        <h2>Contact</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  </div>
  {/* End Page Title Area */}
  {/* Start Contact Area */}
  <section className="contact-area ptb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="contact-wrap">
            <div className="contact-form">
              <div className="section-title">
                <h2>Drop Us A Message For Any Query</h2>
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
        <div className="col-lg-4">
          <div className="quick-contact">
            <h3>Quick Contact </h3>
            <ul>
              <li>
                <i className="flaticon-maps-and-flags" />
                Location:
                <span>Suite 110 12 South Bridge Edinburgh, Scotland, EH1 1DD</span>
              </li>
              <li>
                <i className="flaticon-email" />
                Email Us:
                <a href="mailto:support@unionfinanceinvestment.com">
                  support <br />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Contact Area */}
  {/* Start Map Area */}
  <div className="map-area pb-100">
    <div className="container">
    <div className="mapouter">
  <div className="gmap_canvas">
    <Iframe
      width="100%"
      height={500}
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=Suite%20110%2012%20South%20Bridge%2C%20Edinburgh%2C%20Scotland%2C%20EH1%201DD&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameBorder={0}
      scrolling="no"
      marginHeight={0}
      marginWidth={0}
    />
    <a href="https://www.embedgooglemap.net/blog/nordvpn-coupon-code/">
      nordvpn promo code
    </a>
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        ".mapouter{position:relative;text-align:right;height:500px;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:100%;}"
    }}
  />
</div>;

    </div>
  </div>
</div>

    )
  }
}

export default ContactUs;