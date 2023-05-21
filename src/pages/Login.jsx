import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(err);
      setTimeout(() => {
        setErr(false);
      }, 3000);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Rainy Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <input
            type="password"
            placeholder="Password"
            autoComplete="on"
            minLength={8}
            required
          />
          <button>Login</button>
          {err && <span className="error">{err.message}</span>}
        </form>
        <p>
          You don't have a account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
