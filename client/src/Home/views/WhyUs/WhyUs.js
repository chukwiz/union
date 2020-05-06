import React from 'react';
import './WhyUs.module.css';

const AboutUs = () => {
    return (
        <div style={{fontSize:"100%"}}>
          {/*[if lt IE 9]>
  <div style="text-align:center; padding: 6px 0; background: #cc0000; font-size: 18px; color: #fff; font-weight: 500;">You are using an old version of Internet Explorer. For a better experience, keep your browser up to date. <a href="http://windows.microsoft.com/ie" target="_blank" rel="noopener noreferrer "  class="btn btn-sm btn-info"><i class="fa fa-edge"></i> Get the latest IE</a></div>
  <![endif]*/}
          {/* scrollToTop */}
          {/* ================ */}
          <div className="scrollToTop circle"><i className="icon-up-open-big" /></div>
          {/* page wrapper start */}
          {/* ================ */}
          <div className="page-wrapper">
            {/* header-container start */}
            <nav className="navbar  navbar-light bg-white">
  {/* <a className="navbar-brand" href="/">Sticky top</a> */}
  <a className="navbar-brand" href="/">
    <img src="../csmwhitelogo.png" alt="logo" />
</a>
  <ul className="list-inline">
{/* <li ><i className="fa fa-phone "></i>International: +44 2035192105</li> */}
<li className="">&nbsp;|&nbsp;</li>
<li><a href="mailto:support@csmwealth.com" target="_blank" rel = "noopener noreferrer"><i className="fa fa-envelope"></i> support@csmwealth.com</a></li>
<li className="">&nbsp;|&nbsp;</li>
{/* <li><a href="/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-default-login" style={{margin:"0"}}><b>LOGIN</b></a></li> */}
</ul>

<ul className="ml-auto list-inline" style={{marginRight:"40px"}}>
<li className="hidden-xs"><a href="/login" className="btn btn-sm btn-white" style={{margin:"0", padding:"8px 20px 6px 20px"}}><b>CLIENT LOGIN</b></a></li>
<li><a href="/signup" className="btn btn-sm btn-default btn-ocean-green" style={{margin:"0"}}><b>SIGN UP</b></a></li>
</ul>

</nav>
<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  
  <a className="navbar-brand" href="/">
    CSM
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto" style={{marginRight:"40px"}}>
      <li className="nav-item">
        <a className="nav-link" href="/">
          HOME <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link  dropdown-toggle"
          href="/"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          PORTFOLIO
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/crypto">
            Crypto
          </a>
          <a className="dropdown-item" href="/forex">
            Forex
          </a>
          <a className="dropdown-item" href="/nfp">
            Trade Nfp
          </a>
          <a className="dropdown-item" href="/retirement">
            Retirement Income
          </a>
          
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/ourteam">
          OUR TEAM
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle active"
          href="/"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          ABOUT
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/aboutus">
            About
          </a>
          <a className="dropdown-item active" href="/vision">
            Vision
          </a>
          <a className="dropdown-item" href="/contactus">
            Contact us
          </a>
          <a className="dropdown-item" href="/testimony">
            Testimonials
          </a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/faq">
          FAQ
        </a>
      </li>
    </ul>
  </div>
</nav>
            {/* header-container end */}
            {/* <div className="breadcrumb-container" style={{borderTop: '2px solid #f1f1f1'}}>
              <div className="container">
                <ol className="breadcrumb">
                  <li><a href="../index.html"><i className="fa fa-home" /></a></li>
                  <li><a href="about-us.html">About</a></li>
                  <li className="active">Advantages of CSM Wealth</li>
                </ol>
              </div>
            </div> */}
            <div className="banner dark-translucent-bg pt-20" style={{paddingTop: '40px !important', display:"flex",justifyContent:"center",flexDirection:"column", backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url("../../static/redesign/images/inner/about/career.jpg")', backgroundPosition: '50% 32%',marginBottom:"7%"}}>
              
              <div className="container" style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <div className="row" style={{display:"flex",justifyContent:"center"}}>
                  <div className="col-md-12 " style={{color:"#ffffff",textAlign:"center"}}>
                    <h4 className="title object-non-visible animated object-visible fadeIn" style={{color:"#ffffff"}} data-animation-effect="fadeIn" data-effect-delay={100}>What do we intend to achieve?</h4>
                    <h2 className="title object-non-visible animated object-visible fadeIn" style={{color:"#ffffff"}} data-animation-effect="fadeIn" data-effect-delay={100} style={{fontSize:"300%"}}>OUR MISSION AND VISION</h2>
                    <div className="separator-2 object-non-visible mt-10 animated object-visible fadeIn" data-animation-effect="fadeIn" data-effect-delay={100}  />
                    <a href="/signup" className="object-non-visible animated object-visible fadeIn btn btn-sm btn-default btn-ocean-green" data-animation-effect="fadeIn" data-effect-delay={100}>Create Account</a>
                  </div>
                </div>
              </div>
            </div>
            <section className="main-container" style={{padding:"0"}}>
              <div className="container">
                <div className="row">
                  {/* main start */}
                  {/* ================ */}
                  <div className="main col-md-12">
                  {/* <p> CSM Wealth is an investment company that helps investors all over the world to achieve financial freedom through their different investment options.

Founded in 2010, we employ more than 40 across our England headquarters and our development office in Netherlands </p> */}
                    
                  </div>
                  {/* main end */}
                </div>
              </div>
              <br clear="all" /><br clear="all" />
              <section style={{padding:"0px"}} className="object-non-visible animated object-visible fadeIn" data-animation-effect="fadeIn" data-effect-delay={100}>
              <div className="full-width-section">
                <div className="hovered" style={{background: "black",overflow: "hidden"}}>
                  <img className="to-right-block" src="../../static/redesign/images/inner/about/people.jpg" style={{objectFit: "cover",opacity:"0.4"}} alt="" />
                </div>
                <div className="full-text-container light-gray-bg border-bottom-clear">
                  <h2>OUR <strong>VISON</strong></h2>
                  <div className="separator-2 visible-lg" />
                  <p> CSM Wealth is an investment company that helps investors all over the world to achieve financial freedom through their different investment options.

Founded in 2010, we employ more than 40 across our Ontario headquarters and our development office in Netherlands.
We’re the ecosystem giving investors* equal opportunity, where merit alone drives outcomes.

* Trader = he who invests effort, in addition to capital, into capital markets.  </p>
                  <div className="separator-3 visible-lg" />
                </div>
              </div>
            </section>
            <section style={{padding:"0px"}} className="object-non-visible animated object-visible fadeIn" data-animation-effect="fadeIn" data-effect-delay={100}>
              <div className="full-width-section">
                <div className="full-text-container light-gray-bg border-bottom-clear">
                  <h2>OUR <strong>MISSION</strong></h2>
                  <div className="separator-2 visible-lg" />
                  <p>We fast track Investors aligning their incentives with ours, as well as those of fellow investors, to pool our collective talent, information and capital for private and social benefit.</p>
                  <div>
                    <div className="row">
                    <div className = "col-md-6" style={{textAlign:"ceter"}} >
                    <div style={{display:"flex",flexDirection:"row"}}>
                    <i className="fa fa-check" style={{fontSize:"160%"}}></i>
                      <h3>Quality Education</h3>
                    </div>
                    
                      <p>certified by CSM Wealth and/or community members</p>
                    </div>
                    <div className = "col-md-6" style={{textAlign:"ceter"}}>
                    <div style={{display:"flex",flexDirection:"row"}}>
                    <i className="fa fa-check" style={{fontSize:"160%"}}></i>
                      <h3>Execution</h3>
                      </div>
                      <p>to open and close investment on the best terms.</p>
                    </div>
                    </div>
                    <div className="row">

                    <div className = "col-md-6" style={{textAlign:"ceter"}}>
                    <div style={{display:"flex",flexDirection:"row"}}>
                    <i className="fa fa-check" style={{fontSize:"160%"}}></i>
                      <h3>Information</h3>
                      </div>
                      <p>by the community (individual & trader collective), for a fair price.</p>
                    </div>
                    <div className = "col-md-6" style={{textAlign:"ceter"}}>
                    <div style={{display:"flex",flexDirection:"row"}}>
                    <i className="fa fa-check" style={{fontSize:"160%"}}></i>
                      <h3>Investor capital</h3>
                      </div>
                      <p>with the highest profit participation in the market.</p>
                    </div>
                    </div>
                  </div>
                  <div className="separator-3 visible-lg" />
                </div>
                <div className="hovered"  style={{background: "black",overflow: "hidden"}}>
                  <img className="to-right-block" src="../../static/redesign/images/inner/about/charts.jpg" alt=""  style={{objectFit: "cover",opacity:"0.4"}} />
                </div>
              </div>
            </section>
              <br clear="all" /><br clear="all" />
              <section className="pv-20 padding-bottom-clear clearfix">
                <div className = "container">
                  <div style={{textAlign:"center"}}>
                    <h3>Values - Our Compass</h3>
                    <p>What makes our mission worthwhile is that we breathe by these values, every step of the way</p>
                    <div className = "row" style={{marginTop:"20px"}}>
                      <div className = "col-md-4">
                      <div style={{display:"flex",justifyContent:"center"}}>
                      <img src="../static/redesign/images/settings.png" alt="wire-transfer" style={{width:'70px', height:'70px'}}  title="wire-transfer"/>
                      </div>
                        <h4>Focus on Impact</h4>
                        <p>Our vision is ambitious, but our time and resources are limited. Every decision, big or small, short or long term, maximises the contribution of our (funds / talent / time) to the vision. Evolution = question the best use of resources, at all times</p>
                      </div>
                      <div className = "col-md-4">
                      <div style={{display:"flex",justifyContent:"center"}}>
                      <img src="../static/redesign/images/handyman.png" alt="wire-transfer" style={{width:'70px', height:'70px'}} title="wire-transfer"/>
                      </div>
                        <h4>Take calculated risks</h4>
                        <p>We generate impact because we’re nimble. Agility implies risks, and that’s a good thing. Any risk where client resources (capital, data) are not at stake is worth it if the odds are good enough. Playing it safe is the riskiest gamble.</p>
                      </div>
                      <div className = "col-md-4">
                      <div style={{display:"flex",justifyContent:"center"}}>
                      <img src="../static/redesign/images/building.png" alt="wire-transfer" style={{width:'70px', height:'70px'}} title="wire-transfer"/>
                      </div>
                        <h4>Empower clients & employees</h4>
                        <p>We reward contributions on merit - regardless of who contributes. We do this because we need the best employees devoting their talent & effort to the vision, and the best investors to entrust us their capital and intellectual property.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <br clear="all" /><br clear="all" />
            </section>{/* main container ends */}
            {/*================== FOOTER starts here =======================*/}
            <section className="clearfix pv-20 hidden-sm hidden-xs" id="paymen-methods" style = {{backgroundColor:"#42ce7a"}}>
<div className="container">
<div className="row" style={{display:"flex",justifyContent:"space-around"}}>
<div className="owl-clients-v1" style={{display:"flex",justifyContent:"space-around",margin:"10px 0px"}}>
<div className="item col-md-3">
<a href="/"><img src="../static/redesign/images/payment-methods/wire-transfer.png" alt="wire-transfer" title="wire-transfer"/></a>
</div>
<div className="item col-md-3">
<a href="/"><img src="../static/redesign/images/payment-methods/visa.png" alt="visa" title="visa" /></a>
</div>
<div className="item col-md-3">
<a href="/"><img src="../static/redesign/images/payment-methods/btc.png" alt="mastercard" title="mastercard"/></a>
</div>
<div className="item col-md-3">
<a href="/"><img src="../static/redesign/images/payment-methods/mastercard.png" alt="mastercard" title="mastercard"/></a>
</div>
{/* <div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/maestro.png" alt="maestro" title="maestro"/></a>
</div> */}
{/* <div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/skrill.png" alt="skrill" title="skrill"/></a>
</div>
<div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/neteller.png" alt="neteller" title="neteller"/></a>
</div>
<div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/fasapay.png" alt="fasapay" title="fasapay" style={{border: "1px solid #ddd"}} /></a>
</div>
<div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/vload1.png" alt="vload" title="vload" style={{border: "1px solid #ddd"}}/></a>
</div> */}
</div>
</div>
</div>
</section>
<footer id="footer" className="clearfix dark">
<div className="footer">
<div className="container">
<div className="footer-inner">
<div className="row">

</div>
<div className="row">
<div className="col-md-12">
<div className="footer-content" style={{padding:"0px"}}>
<div className="separator-2"></div>
<div className="row">
<div className="col-md-3 color-offwhite" style={{paddingTop:"2px"}}>
<i className="fa fa-lock pr-10 color-white"></i> Secured by: GeoTrust Inc
</div>
{/* <div className="col-md-3 color-offwhite" style={{paddingTop:"2px"}}>
<i className="fa fa-phone pr-10 color-white"></i> Telephone: +44 2035192105
</div> */}
<div className="col-md-6 color-offwhite" style = {{paddingTop:"2px"}}>
<i className="fa fa-envelope-o pr-10 color-white"></i>support@csmwealth.com
</div>
<div className="col-md-3 color-offwhite">
<ul className="social-links circle animated-effect-1" style={{marginTop:"0px",marginBottom:"2px",float:"right"}}>
<li className="facebook"><a target="_blank" rel="noopener noreferrer" href="/"><i className="fa fa-facebook"></i></a></li>
<li className="twitter"><a target="_blank" rel="noopener noreferrer" href="/"><i className="fa fa-twitter"></i></a></li>
<li className="googleplus"><a target="_blank" rel="noopener noreferrer" href="/"><i className="fa fa-google-plus"></i></a></li>
<li className="linkedin"><a target="_blank" rel="noopener noreferrer" href="/"><i className="fa fa-linkedin"></i></a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="separator-2"></div>
<p className="color-offwhite" style={{fontSize:"12px"}}>
<b></b>
</p>
<p className="color-offwhite" style={{fontSize:"12px"}}>
<a href="https://beta.companieshouse.gov.uk/company/07659758" target="_blank" rel="noopener noreferrer" style={{color:"#22356d"}}>Registered office address</a> <br />
1 Windsor Road, Northam, Bideford, Devon, England, EX39 1EN
</p>
<p className="color-offwhite" style={{fontSize:"12px"}}>
CSM Wealth holds a Financial Services Licence which authorizes us to issue and act as a responsible entity to <a href="https://beta.companieshouse.gov.uk/company/07659758" target="_blank" rel="noopener noreferrer" style={{color:"#22356d"}}>registered </a> managed investment schemes and to act as trustee to wholesale unregistered investment schemes worldwide.
<p><b>Risk Warning:</b> Contracts for Difference (‘CFDs’) are complex financial products that are traded on margin. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage.
<br/>
As a result, CFDs may not be suitable for all investors because you may lose all your invested capital. You should not risk more than you are prepared to lose. Before deciding to trade, you need to ensure that you understand the risks involved taking into account your investment objectives and level of experience. All information on this website is not directed toward soliciting citizens or residents of the United States, United Kingdom, Japan or any other jurisdiction that would be contrary to local law or regulation.
<br/>
Past performance of CFDs is not a reliable indicator of future results. Most CFDs have no set maturity date. Hence, a CFD position matures on the date you choose to close an existing open position. Seek independent advice, if necessary. Please read CSM Wealth’s full ‘Risk Disclosure Statement’.
</p>
<br/></p>
</div>
</div>
</div>
</div>
</div>
</footer>
            {/* footer end */}
          </div>
        </div>
      );
}

export default AboutUs;