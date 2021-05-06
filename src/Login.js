import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { connect } from "react-redux";
import { Action } from "./Action";
function Login({ login }) {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.photoURL,
        });
      })
      .catch((error) => alert(error));
  };

  const register = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Please enter your full name!");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profile,
          })
          .then(() => {
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profile,
            });
          });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img
        src="https://carers-network.org.uk/wp-content/uploads/2020/05/Linkedin-Logo-2003%E2%80%932011.png"
        height="150px"
        width="250px"
        alt=""
      />
      <form>
        <input
          type="text"
          placeholder="Full Name(Required if registering)"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Profile pic URL (optional)"
          value={profile}
          onChange={(e) => {
            setProfile(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
        <p>
          Not a member? <span onClick={register}>Register Now</span>
        </p>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (log) => {
      dispatch(Action(log));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
