import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form validation logic here
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Add signup logic here
    console.log("Form Submitted", formData);
  };

  return (
    <div className="container">
      <div className="background">
        <div className="logo">LOGO HERE</div>
        <div className="content">
          <div className="left-section">
            <h1>SIGN UP</h1>
            <h2>Create your account</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <div className="name-inputs">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength={8}
                />
              </div>
              <button type="submit" className="signup-btn">
                Create Account
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
                By registering you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>
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

export default Signup;
