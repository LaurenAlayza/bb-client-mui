import React, { useState, useEffect } from "react";
import Navbar from './home/Navbar';
import Auth from "./auth/Auth";
import "./App.css";

function App() {
  const [sessionToken, setSessionToken] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };
  return (
    <div>
      <Navbar />
      {/* <h1
        className="shopTitle"
        style={{ textAlign: "center", marginTop: "-3em" }}>
        Create or use a template!
      </h1> */}
      <Auth />
    </div>
  );
}

export default App;
