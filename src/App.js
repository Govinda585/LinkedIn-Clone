import "./App.css";
import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="app_body">
        <SideBar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
