import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // create user with email password
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // storing user image in storage
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName: displayName,
              photoURL: downloadURL,
            });

            // storing information in database
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            // create the new user chats
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );
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
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Display name" />
          <input type="email" placeholder="Email" />
          <input
            type="password"
            placeholder="Password"
            minLength={8}
            autoComplete="on"
          />
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={(e) => {
              e.target?.files[0] && setFileName(e.target.files[0].name);
            }}
          />
          <label htmlFor="file">
            <i className="fa-regular fa-image"></i>
            <span>{`${fileName ? fileName : "Add a picture"}`}</span>
          </label>
          <button>Sign up</button>
          {err && <span className="error">{err.message}</span>}
        </form>
        <p>
          Already have a account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
