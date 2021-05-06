import "./App.css";
import React, { useEffect } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Login from "./Login";
import { connect } from "react-redux";
import { auth } from "./firebase";
import { Action } from "./Action";
import Widgets from "./Widgets";

function App({ user, login }) {
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        });
      } else {
        // logout
      }
    });
  }, []);
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />

          {/* App Body */}
          <div className="app_body">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
      {/* Header */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (log) => {
      dispatch(Action(log));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
