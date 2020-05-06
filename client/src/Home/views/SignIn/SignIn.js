import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SignIn extends Component{
    render(){
        return(
            <div>
  <div className="page-title-area bg-3">
    <div className="container">
      <div className="page-title-content">
        <h2>Log In</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Pages</li>
          <li>User</li>
          <li>Log In</li>
        </ul>
      </div>
    </div>
  </div>
  {/* End Page Title Area */}
  {/* Start Log In Area */}
  <section className="user-area-all-style log-in-area ptb-100">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="contact-form-action">
            <div className="form-heading text-center">
              <h3 className="form-title">Log In to your account!</h3>
              <p className="form-desc">With your social network.</p>
            </div>
            <form method="post">
              <div className="row">
                {/* <div className="col-lg-4 col-md-4 col-sm-12">
                  <button className="default-btn" type="submit">
                    Google
                  </button>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <button className="default-btn" type="submit">
                    Facebook
                  </button>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <button className="default-btn" type="submit">
                    Twitter
                  </button>
                </div> */}
                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Username or Email"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 form-condition">
                  <div className="agree-label">
                    <input type="checkbox" id="chb1" />
                    <label htmlFor="chb1">Remember Me</label>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <Link className="forget" to="/recover-password">
                    Forgot my password?
                  </Link>
                </div>
                <div className="col-12">
                  <button className="default-btn btn-two" type="submit">
                    Log In Now
                  </button>
                </div>
                <div className="col-12">
                  <p className="account-desc">
                    Not a member?
                    <Link to="/register">Register</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
        )
    }
}

export default SignIn;