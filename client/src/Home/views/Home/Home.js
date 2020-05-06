import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Iframe from 'react-iframe';
import $ from 'jquery';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const Home = () => {

    return(
      <div>
  
  {/* End Preloader Area */}
  {/* Start Heder Area */}
  {/* <Header /> */}
  {/* End Sidebar Modal */}
  {/* Start Banner Area */}
  <div className="main-banner-area-two jarallax" data-jarallax='{"speed": 0.3}'>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="banner-text">
          <h1 className="wow fadeInUp" data-wow-delay=".4s" style={{textAlign:"left"}}>
          Industry Leader In Asset Management & Financical Services
          </h1>
          <p className="wow fadeInUp" data-wow-delay=".6s">
          We are a group of professional financial consultants who excel at asset management,<br/> financial consulting and portfolio management.
          </p>
          <div className="banner-btn wow fadeInUp" data-wow-delay=".9s">
            <Link to="register" className="default-btn">Get Started</Link>
            {/* <a href="#" className="default-btn active">
              Find An Agent
            </a> */}
          </div>
        </div>
      </div>
      {/* <div className="col-lg-6 pr-0">
        <div className="banner-img wow fadeInRight" data-wow-delay=".2s" />
      </div> */}
    </div>
  </div>
</div>;

  {/* End Banner Area */}
  {/* Start Choose Us Area */}
  <section className="choose-us-area-three pt-100 pb-70">
  <div className="container">
    <div className="section-title">
      <span>Our Features</span>
      <h2>We’re here to help you and your investors navigate through market volatility and focus on the long term.</h2>
      <p>
      It's not every day you find the perfect partnership,
but when you do, life is good.
      </p>
    </div>
    <div className="row">
      <div className="col-lg-4 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".2s">
          <span className="flaticon-hand" />
          <h3>Global Mindset</h3>
          <p>
          We adopt a truly global perspective as we invest across a wide range of asset classes.
           We seek the best possible investment opportunities wherever they may be.
          </p>
          <Link to="/register">
          <i className="flaticon-right" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-life-insurance-1" />
          <h3>Comparative Advantages</h3>
          <p>
          An exceptionally long investment horizon shapes how we view opportunities and risk.
           By investing for the next quarter century, not the next quarter, we can make investments that others can’t.
          </p>
          <Link to="/register">
          <i className="flaticon-right" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
        <div className="single-choose wow fadeInUp" data-wow-delay=".4s">
          <span className="flaticon-insurance-1" />
          <h3>Sustainability</h3>
          <p>
          We work to fulfill our mandate, we consider and integrate ESG risks 
          and opportunities into our investment decisions.
          </p>
          <Link to="/register">
          <i className="flaticon-right" />
          </Link>
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
            <span>About Us</span>
            <h2>We work with Individuals and financial professionals.</h2>
            <p>
            We are a leading global investment solutions partner, 
            dedicated to improving people's financial security.
            </p>
            <h5>Why we’re different</h5>
            <p>
            From the very first minute, we want you to feel like part of our family – and that you’re working 
            with people you can trust. We’re all highly qualified, really care about giving the best advice and go 
            that extra mile to give you an outstanding service. We’re extremely proud of what we’ve achieved over the
             years. Our aim now, is to continue to be the best at what we do and offer our expert advice to even more 
             clients.
            </p>
            <div className="about-list">
              <ul>
                <li>
                  <i className="flaticon-checked" />
                  Active management
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Pragmatic style
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Long term perspective
                </li>
              </ul>
              <ul className="ml-30">
                <li>
                  <i className="flaticon-checked" />
                  Blended Approach
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Emphasis on risk management
                </li>
                <li>
                  <i className="flaticon-checked" />
                  Investment driven research.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-img wow fadeInRight" data-wow-delay=".2s">
            <img src="assets/img/table.png" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End About Area */}
  {/* Start Our Vision Area */}
  <section className="our-vision-area ptb-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
            <img src="assets/img/postercredit.png" alt="Image" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="vision-content">
            <span>Our Vision & Values</span>
            <h2>Innovation & Discipline have been part of our DNA</h2>
            <p>
            At Union Finance Investment, we believe you can achieve the lifestyle you want for you and your family.
             It just takes a bit of planning, some innovative thinking – and a financial partner who really understands
              your needs and aspirations.
            </p>
            <p className="mb-30">
            It’s this understanding that sets us apart. We forge lasting relationships with our clients – some 
            which span generations. But above all, we see it as our job to give you the confidence and financial
             freedom you need, to do the things you’ve always wanted to do.
            </p>
            <div className="vision-list">
              <ul>
                <li>
                  <i className="bx bx-chevrons-right" />
                  Integrity & Ethics
                </li>
                <li>
                  <i className="bx bx-chevrons-right" />
                  Good Governance
                </li>
              </ul>
              <ul className="ml-30">
                <li>
                  <i className="bx bx-chevrons-right" />
                  Disciplined Investing
                </li>
                <li>
                  <i className="bx bx-chevrons-right" />
                  Investing in People
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Our Vision Area */}
  {/* Start Services Area */}
  <section className="services-area ptb-100">
    <div className="container">
      <div className="section-title">
        <span>Our Services</span>
        <h2>What Do We Offer?</h2>
        <p>
        We attribute our persistent success to our commitment in providing client satisfaction
        </p>
      </div>
      <div className="row" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="col-lg-4 col-sm-6">
          <div className="single-services wow fadeInLeft" data-wow-delay=".3s">
            <i className="flaticon-car-insurance" />
            <h3>Financial Services</h3>
            <p>
            Highly qualified and experienced staff give independent advice on such financial services as
            </p>
            <Link to="/financial-services" className="read-more">
              Read More
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="single-services  wow fadeInLeft" data-wow-delay=".2s">
            <i className="flaticon-health-care" />
            <h3>Structured Finance</h3>
            <p>
            Our finance experts have extensive experience of the investment market and routinely 
            </p>
            <Link to="/structured-finance" className="read-more">
              Read More
            </Link>
          </div>
        </div>
        {/* <div className="col-lg-4 col-sm-6">
          <div className="single-services  wow fadeInLeft" data-wow-delay=".1s">
            <i className="flaticon-life-insurance" />
            <h3>Life Insurance</h3>
            <p>
              Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut.
            </p>
            <a href="insurance-details.html" className="read-more">
              Read More
            </a>
          </div>
        </div> */}
        <div className="col-lg-4 col-sm-6">
          <div className="single-services wow fadeInRight" data-wow-delay=".1s">
            <i className="flaticon-salesman" />
            <h3>Consulting Services</h3>
            <p>
            At UFI, we have a team of financial consultants who specialize in financial strategy 
            </p>
            <Link to="/consulting-services" className="read-more">
              Read More
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="single-services wow fadeInRight" data-wow-delay=".2s">
            <i className="flaticon-travel-insurance" />
            <h3>Portfolio Management Services</h3>
            <p>
            We work with our clients and do a deep analysis of their business. We help prepare possible outcomes
            </p>
            <Link to="/portfolio-management" className="read-more">
              Read More
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="single-services wow fadeInRight" data-wow-delay=".3s">
            <i className="flaticon-social-care-1" />
            <h3>Mutual Funds, trading and Investing</h3>
            <p>
            In Mutual Funding, we invest your money in stocks, bonds, short-term money market instrunments, other
            </p>
            <Link to="/mutual-funds" className="read-more">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="services-shape">
      <img src="assets/img/services-shape-1.png" alt="Image" />
    </div>
  </section>
  {/* End Services Area */}
  {/* Start Get Quot Area */}
  
  {/* End Get Quot Area */}
  {/* Start Counter Area */}
  {/* <section className="counter-area pt-100 pb-70">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-counter">
            <h2>
              <span className="odometer" data-count={950}>
                00
              </span>
              <span className="target">+</span>
            </h2>
            <p>Completed Project</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-counter">
            <h2>
              <span className="odometer" data-count={850}>
                00
              </span>
              <span className="target">+</span>
            </h2>
            <p>Winning Awards</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-counter">
            <h2>
              <span className="odometer" data-count={550}>
                00
              </span>
              <span className="traget">+</span>
            </h2>
            <p>Clients</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-counter">
            <h2>
              <span className="odometer" data-count={440}>
                00
              </span>
              <span className="target">+</span>
            </h2>
            <p>Countries</p>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* End Counter Area */}
  {/* Start Achievement Area */}
  <div className="achievement-area pt-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="video-img">
            <img src="assets/img/banner/banner7.jpg" alt="Image" />
            <div className="video">
              <a
                href="https://www.youtube.com/watch?v=WEDIj9JBTC8"
                className="video-btn popup-youtube"
              >
                <i className="flaticon-play-button" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="achievement-content">
            <span>Achievement</span>
            <h2>Effective engagement is the best form of shareholder activism.</h2>
            <p>
            Over the years, Union Finance Investment has successfully raised the standard of corporate
             governance in English companies and continues to press for improvements in transparency
              and accountability.
            </p>
            <Link to="/register" className="default-btn">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Achievement Area */}
  {/* End Agent Now Area */}
  <section className="agent-now-area ptb-100">
    <div className="container">
      <div className="section-title">
        <h2>
          Not Sure What You Need <br /> Let's Assign you a Financial Advisor
        </h2>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="call-now">
            <i className="flaticon-call" />
            <p>Call Us</p>
            <span>+123-465-789</span>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="subscribe-wrap">
            <p>Subscribe Now</p>
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
              <div id="validator-newsletter-1" className="form-result" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="agent-shape">
      <img src="assets/img/callmale.png" alt="Image" />
    </div>
  </section>
  {/* End Agent Now Area */}
  {/* Start Testimonial Area */}
  {/*  */}
  {/* End Testimonial Area */}
  {/* End Business Contact Area */}
  
  {/* <section className="business-contact-area pb-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 p-0">
          <div className="business-img">
            <img src="assets/img/business-img.jpg" alt="Image" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 p-0">
          <div className="business-content">
            <h3>
              Save up to 30% when you buy small business insurance in online
            </h3>
            <a href="#" className="default-btn active ml-0">
              Contact Us
            </a>
            <p>
              Call Us Today: <br /> +82546-564-234
            </p>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* End Business Contact Area */}
  {/* Start Blog Area */}
  {/* <section className="blog-area pb-70">
    <div className="container">
      <div className="section-title">
        <span>Blog</span>
        <h2>Latest News From Our Blog</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus
        </p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-blog wow fadeInUp" data-wow-delay=".2s">
            <a href="blog-details.html">
              <img src="assets/img/blog/1.jpg" alt="Image" />
            </a>
            <div className="blog-content">
              <ul>
                <li>10 April 2020</li>
                <li>
                  <a href="#">By Admin</a>
                </li>
              </ul>
              <a href="blog-details.html">
                <h3>2020 Insurance Trends And Possible Challenge</h3>
              </a>
              <a href="blog-details.html" className="read-more">
                Read More
                <i className="bx bx-plus" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-blog wow fadeInUp" data-wow-delay=".3s">
            <a href="blog-details.html">
              <img src="assets/img/blog/2.jpg" alt="Image" />
            </a>
            <div className="blog-content">
              <ul>
                <li>11 April 2020</li>
                <li>
                  <a href="#">By Admin</a>
                </li>
              </ul>
              <a href="blog-details.html">
                <h3>Global Trends In The Life Insurance Industry</h3>
              </a>
              <a href="blog-details.html" className="read-more">
                Read More
                <i className="bx bx-plus" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
          <div className="single-blog wow fadeInUp" data-wow-delay=".4s">
            <a href="blog-details.html">
              <img src="assets/img/blog/3.jpg" alt="Image" />
            </a>
            <div className="blog-content">
              <ul>
                <li>13 April 2020</li>
                <li>
                  <a href="#">By Admin</a>
                </li>
              </ul>
              <a href="blog-details.html">
                <h3>Where And How To Watch Live Stream Today</h3>
              </a>
              <a href="blog-details.html" className="read-more">
                Read More
                <i className="bx bx-plus" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* End Blog Area */}
  {/* Start Footer Top Area */}
  {/* <Footer/> */}
</div>

    )
}

export default Home;