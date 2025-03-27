const Signin = () => {
  return (
    <div className="container">
      <div className="background">
        <div className="logo">LOGO HERE</div>
        <div className="content">
          <div className="left-section">
            <h1>SIGN IN</h1>
            <h2>Sign in with email address</h2>
            <form action="">
              <div className="input-group">
                <input type="email" placeholder="Yourmail@gmail.com" />
                <input type="password" placeholder="Enter your Password" />
              </div>
              <button type="submit" className="signup-btn">
                Sign in
              </button>

              <div className="divider">
                <span>or continue with</span>
              </div>

              <div className="social-login">
                <button className="google-btn">
                  <img
                    src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
                    alt="Google"
                  />
                  Google
                </button>
              </div>

              <div className="terms">
                By registering you with our <a href="#">Terms</a> and{" "}
                <a href="#">Conditions</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="space-art">
        <div className="planets">
          <div className="planet planet-1"></div>
          <div className="planet planet-2"></div>
        </div>
        <div className="stars"></div>
      </div>
    </div>
  );
};

export default Signin;
