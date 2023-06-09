import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">Rainy Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="pic" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
