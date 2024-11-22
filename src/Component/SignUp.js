import React, { useState } from 'react';
import '../Styles/signup.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log('Form submitted:', formData);
  };

  return (
    <div class="container">
    <div class="card">
      <div class="card_title">
        <h1>Create Account</h1>
        <span>Already have an account? <a href="login">Sign In</a></span>
      </div>
      <div class="form">
      <form action="/register" method="post">
        <input type="text" name="username" id="username" placeholder="UserName" />
        <input type="email" name="email" placeholder="Email" id="email" />
        <input type="password" name="password" placeholder="Password" id="password" />
        <button>Sign Up</button>
        </form>
      </div>
      <div class="card_terms">
          <input type="checkbox" name="" id="terms"/> <span>I have read and agree to the <a href="">Terms of Service</a></span>
      </div>
    </div>
  </div>
  );
};

export default SignUp;