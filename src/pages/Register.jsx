import React from "react";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Rainy Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Display name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <i className="fa-regular fa-image"></i>
            <span> Add a picture</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Already have a account? Login</p>
      </div>
    </div>
  );
};

export default Register;
