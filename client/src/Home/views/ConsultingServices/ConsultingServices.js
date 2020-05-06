import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Chart from '../../components/Chart/Chart';

class  ConsultingServices extends Component {
    render(){
        return(
            <div>
  <div className="page-title-area bg-17">
    <div className="container">
      <div className="page-title-content">
        <h2>Consulting Services</h2>
        <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        
          <li>Services</li>
          <li>Consulting Services</li>
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
              <img src="assets/img/banner/banner6.jpg" alt="Image" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-content">
            <h2>Consulting Services</h2>
            <p>
            Our management consulting services focus on our clients' most critical issues and opportunities:
             strategy, marketing, organization, operations, technology, transformation, digital, advanced analytics,
              corporate finance, mergers & acquisitions and sustainability across all industries and geographies.
               We bring deep, functional expertise, but are known for our holistic perspective: we capture value
                across boundaries and between the silos of any organization. We have proven a multiplier effect from 
                optimizing the sum of the parts, not just the individual pieces.
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

  <section className="services-area ptb-100">
    <div className="container">
      <div className="section-title">
        <span>Industries</span>
        <h2>Our Range of Industries</h2>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-blog wow fadeInUp" data-wow-delay=".2s">
            <a href="#">
              <img src="assets/img/blog/travelcons.jpg" alt="Image" />
            </a>
            <div className="blog-content">
              <a href="#">
                <h3>Travel And Aviation Consulting</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-blog wow fadeInUp" data-wow-delay=".3s">
            <a href="#">
              <img src="assets/img/blog/buscons.jpg" alt="Image" />
            </a>
            <div className="blog-content">
              <a href="#">
                <h3>Business Services Consulting</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
          <div className="single-blog wow fadeInUp" data-wow-delay=".4s">
            <a href="#">
              <img src="assets/img/blog/consumercons.jpg" alt="Image" />
            </a>
            <div className="blog-content">
              <a href="#">
                <h3>Consumer Products Consulting</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-blog wow fadeInUp" data-wow-delay=".2s">
            <a href="#">
              <img src="assets/img/blog/financialcons.jpg" alt="Image" />
            </a>
            <div className="blog-content">
              <a href="#">
                <h3>Financial Services Consulting</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-blog wow fadeInUp" data-wow-delay=".3s">
            <a href="#">
              <img src="assets/img/blog/energy.jpg" alt="Image" />
            </a>
            <div className="blog-content">
              <a href="#">
                <h3>Energy Consulting</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
          <div className="single-blog wow fadeInUp" data-wow-delay=".4s">
            <a href="#">
              <img src="assets/img/blog/transcon.jpg" alt="Image" />
            </a>
            <div className="blog-content">
              <a href="#">
                <h3>Transport & Logistics Consulting</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="services-shape">
      <img src="assets/img/services-shape-1.png" alt="Image" />
    </div>
  </section>

  {/*  */}

  <section className="choose-us-area choose-us-area-two pt-100 pb-70">
    <div className="container">
      <div className="section-title">
        <h2>How We Help</h2>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="info-card wow fadeInUp" data-wow-delay=".2s">
            <div className="info-card-step">01.</div>
            <div className="info-card-content">
              <div className="info-card-title">Sales and Marketing</div>
              <p className="info-card-desc">Build a customer-focused—and growth-oriented—organization.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="info-card wow fadeInUp" data-wow-delay=".2s">
            <div className="info-card-step">02.</div>
            <div className="info-card-content">
              <div className="info-card-title">Cost Transformation</div>
              <p className="info-card-desc">Align costs with strategy and focus on growth.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="info-card wow fadeInUp" data-wow-delay=".2s">
            <div className="info-card-step">03.</div>
            <div className="info-card-content">
              <div className="info-card-title">Procurement</div>
              <p className="info-card-desc">Reduce your cost base. Sustain the gains. Repeat</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <div className="info-card wow fadeInUp" data-wow-delay=".2s">
            <div className="info-card-step">04.</div>
            <div className="info-card-content">
              <div className="info-card-title">Operations</div>
              <p className="info-card-desc">How much better, faster or smarter could you do what you do?</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="info-card wow fadeInUp" data-wow-delay=".2s">
            <div className="info-card-step">05.</div>
            <div className="info-card-content">
              <div className="info-card-title">Strategy</div>
              <p className="info-card-desc">Join the elite ranks of sustained value creators.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="info-card wow fadeInUp" data-wow-delay=".2s">
            <div className="info-card-step">06.</div>
            <div className="info-card-content">
              <div className="info-card-title">Sustainability</div>
              <p className="info-card-desc">Embed principles that become a source of ongoing and increasing value</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="info-card wow fadeInUp" data-wow-delay=".2s">
            <div className="info-card-step">07.</div>
            <div className="info-card-content">
              <div className="info-card-title">Mergers and Acquisitions</div>
              <p className="info-card-desc">Achieve consistently higher returns with a systematic and repeatable approach.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="info-card wow fadeInUp" data-wow-delay=".2s">
            <div className="info-card-step">08.</div>
            <div className="info-card-content">
              <div className="info-card-title">Private Equity</div>
              <p className="info-card-desc">We advise investors across the entire investment life cycle.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="info-card wow fadeInUp" data-wow-delay=".2s">
            <div className="info-card-step">09.</div>
            <div className="info-card-content">
              <div className="info-card-title">Organization</div>
              <p className="info-card-desc">Improve performance by ensuring your people can deliver on your strategy.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <div className="info-card wow fadeInUp" data-wow-delay=".2s">
            <div className="info-card-step">10.</div>
            <div className="info-card-content">
              <div className="info-card-title">Transformation</div>
              <p className="info-card-desc">Change the trajectory of your business and achieve extraordinary results.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="info-card wow fadeInUp" data-wow-delay=".2s">
            <div className="info-card-step">11.</div>
            <div className="info-card-content">
              <div className="info-card-title">Agile</div>
              <p className="info-card-desc">Become faster, more flexible, and intensely customer-focused</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="info-card wow fadeInUp" data-wow-delay=".2s">
            <div className="info-card-step">12.</div>
            <div className="info-card-content">
              <div className="info-card-title">Client Learning Programs</div>
              <p className="info-card-desc">When it comes to talent, leaders agree on two things: It’s precious, and it’s scarce.</p>
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

export default ConsultingServices;