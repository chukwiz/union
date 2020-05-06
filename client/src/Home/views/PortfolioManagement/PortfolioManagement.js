import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Chart from '../../components/Chart/Chart';

class  PortfolioManagement extends Component {
    render(){
        return(
            <div>
  <div className="page-title-area bg-17">
    <div className="container">
      <div className="page-title-content">
        <h2>Portfolio Management</h2>
        <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        
          <li>Services</li>
          <li>Portfolio Management</li>
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
              <img src="assets/img/financeadv.jpg" alt="Image" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-content">
            <h2>Especially in these times: talk to an Investment Adviser</h2>
            <p>
            With Portfolio Management, we invest for you. We do this with a risk profile that suits you. 
            You determine that profile with us on the basis of a very thorough analysis. Within your profile,
             we spread the risk by investing worldwide in bonds, alternative investments and in various sectors,
              in addition to equities
            </p>
            <p>
            Especially in these times, it is important that you are aware that investing is something for the
             longer term and that investing involves risks. Read more below about the possibilities offered by Portfolio 
             Management and the considerations you need to make. Good to know: a conversation with an Investment Adviser is always free of obligation and can be done via 'Beeldbankieren', our own video-banking service
            </p>
            <p>
            Bloomberg indicates that services continue to be the most sought after commodity in the private
             sector.We accompanied several financial advisory firms and asset management companies, Portfolio Management 
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

  <section className="choose-us-area-three pt-100 pb-70">
  <div className="container">
    {/* <div className="section-title">
      <span>Our Features</span>
      <h2>We’re here to help you and your investors navigate through market volatility and focus on the long term.</h2>
      <p>
      It's not every day you find the perfect partnership,
but when you do, life is good.
      </p>
    </div> */}
    <div className="row">
      <div className="col-lg-6 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".2s">
          <span className="flaticon-hand" />
          <h3>Invest for the longer term</h3>
          <p>
          It is important that you are aware that investing is for the longer term. If we follow the past,
           there will always be periods of decline as there are now and periods of recovery. A broad spread 
           and a longer term can contribute to the chance of a positive return over a long period of time.
          </p>
          <Link to="/register">
          <i className="flaticon-right" />
          </Link>
        </div>
      </div>
      <div className="col-lg-6 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-life-insurance-1" />
          <h3>Investing entails risks</h3>
          <p>
          Investing entails risks. You could lose (some of) the money you invested. If you are going to invest, 
          it is important that you are aware of this. Invest with money you can spare. Keep a buffer for unforeseen 
          circumstances. Also think of an extra buffer for difficult economic times
          </p>
          <Link to="/register">
          <i className="flaticon-right" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

<section className>
    <div className="container">
      <div className="section-title">
        {/* <span>Our Service</span> */}
        <h2>Let your assets receive the attention they deserve</h2>
      </div>
      <div className="row">
        <div className="pb-70" style={{textAlign:"center"}}>
          <h6 style={{color:"inherit",fontWeight:"400"}}><i className="flaticon-checked" style={{marginRight:"10px",fontSize:"20px",color:"#262566"}} />If 
          you opt for Portfolio Management, your own Investment Adviser will ensure that your assets receive the
           attention they deserve. You and your Investment Adviser will consider what you want to do with your assets 
           now and in the future. He will then work with a team of experts to come up with a suitable investment
            solution that is based on your situation and requirements. Portfolio Management
             is possible from $ 50,000.</h6>
        </div>
      </div>
    </div>
  </section>

  {/*  */}
  <section className="choose-us-area-three pt-100 pb-70">
  <div className="container">
    <div className="section-title">
      <h2>What can you expect from us</h2>
    </div>
    <div className="row">
      <div className="col-lg-4 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".2s">
          <span className="flaticon-hand" />
          <h3>Personal Attention</h3>
          <p>
          You have your own Investment Adviser, who is your personal point of contact. You can contact your
           Investment Adviser at any time. You will meet with your Investment Adviser every year to review
            the results that have been achieved and look at how the market is expected to develop.
          </p>
          <Link to="/register">
          <i className="flaticon-right" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-life-insurance-1" />
          <h3>Making matters easier for you</h3>
          <p>
          Your Investment Adviser is assisted by a team of experts who constantly monitor the stock markets day in,
           day out. If you have other questions relating to your assets or you require a broader financial picture,
            your Investment Adviser can guide you to where you need to be
          </p>
          <Link to="/register">
          <i className="flaticon-right" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-life-insurance-1" />
          <h3>Expertise</h3>
          <p>
          Union Finance Investment is the one of the largest asset manager for private investors by far, and has a wealth of experience.
           Our solutions have won multiple awards. Union Finance Investment Portfolio Management has been awarded five stars by Finner,
            a platform that provides independent investment comparisons.
          </p>
          <Link to="/register">
          <i className="flaticon-right" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="choose-us-area choose-us-area-two pt-100 pb-70">
    <div className="container">
      <div className="section-title">
        <h2>What happens when you make an appointment</h2>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="info-card wow fadeInUp" data-wow-delay=".2s">
            <div className="info-card-step">01.</div>
            <div className="info-card-content">
              <div className="info-card-title">You talk to an Investment Adviser</div>
              <p className="info-card-desc">You discuss your goals and the possibilities while paying your
               assets the attention they deserve. It goes without saying that this consultation is entirely
                without obligation</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="info-card wow fadeInUp" data-wow-delay=".2s">
            <div className="info-card-step">02.</div>
            <div className="info-card-content">
              <div className="info-card-title">We determine your personal investment solution</div>
              <p className="info-card-desc">Following your first consultation, you will receive tailor-made advice 
              concerning the extent to which your goals are achievable, and we will look at what risk profile, form 
              of Portfolio Management and implementation plan would suit you best</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="info-card wow fadeInUp" data-wow-delay=".2s">
            <div className="info-card-step">03.</div>
            <div className="info-card-content">
              <div className="info-card-title">Our experts manage your investments</div>
              <p className="info-card-desc">This is the point at which we start to provide Portfolio Management
               services to you. The team of experts invest and manage your assets, and you can contact your Investment
                Adviser at any time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="choose-us-area-three pt-100 pb-70">
  <div className="container">
    <div className="section-title">
      <h2>Portfolio Management offers you a choice of three mandates</h2>
    </div>
    <div className="row">
      <div className="col-lg-4 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".2s">
          <span className="flaticon-left-quotes-sign" />
          <h3>Sustainable Funds Mandate</h3>
          <p>
          Invest in funds, bonds and companies that are socially engaged.
          </p>
          {/* <Link to="/register">
          <i className="flaticon-right" />
          </Link> */}
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-left-quotes-sign" />
          <h3>Multi-Manager Mandate</h3>
          <p>
          Invest in as many funds offered by renowned fund houses from all over the world.
          </p>
          {/* <Link to="/register">
          <i className="flaticon-right" />
          </Link> */}
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-left-quotes-sign" />
          <h3>Comfort Income Mandate</h3>
          <p>
          If you want to use our Portfolio Management service to generate income.
          </p>
          {/* <Link to="/register">
          <i className="flaticon-right" />
          </Link> */}
        </div>
      </div>
    </div>
  </div>
</section>

<section className="choose-us-area-one pt-100 pb-70">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-tick" />
          <h3>More than $ 500,000?</h3>
          <p>
          Investing with our Portfolio Management service is possible with a 
          minimum of $50,000. Should your assets exceed $500,000, a private banker
           from Union Finance Investment will contact you to discuss the possibilities.
          </p>
          {/* <Link to="/register">
          <i className="flaticon-right" />
          </Link> */}
        </div>
      </div>
      <div className="col-lg-6 col-sm-6">
        <div className="single-choose wow fadeInUp" data-wow-delay=".3s">
          <span className="flaticon-tick" />
          <h3>Choose experience</h3>
          <p>
          Union Finance Investment is one of the largest asset managers for private investors.
           We have managed assets for years, which have included market booms and tough times too.
          </p>
          {/* <Link to="/register">
          <i className="flaticon-right" />
          </Link> */}
        </div>
      </div>
    </div>
  </div>
</section>

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

export default PortfolioManagement;