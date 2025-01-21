import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Signup from "./components/Signup";
import SignupComplete from "./components/SignupComplete";
import Login from "./components/Login";
import NotFound from "./components/NotFound";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route 
          path="/Login" 
          element={<Login setIsLoggedIn={setIsLoggedIn} />} 
        />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SignupComplete" element={<SignupComplete />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;