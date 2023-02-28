import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Rainy Chat</span>
      <div className="user">
        <img
          src="https://images.unsplash.com/photo-1677508186574-118a7ef3d587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="pic"
        />
        <span>Saras</span>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
