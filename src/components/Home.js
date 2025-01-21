import React from "react";
import "./Home.css";


function Home() {
    return (
        <div className = "container">

        <main className="main-content">
            <h1 className="welcome-text">
            <div className="lines lines-top">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
            </div>
            <div className="welcome-container">
                <span className="welcome-word">WELCOME</span>
            </div>
            <div className="coders-container">
                <span className="coders-word">CODERS!!</span>
            </div>
            <div className="lines lines-bottom">
                <div className="line line-3"></div>
                <div className="line line-4"></div>
            </div>
            </h1>
            {isLoggedIn && (
                <p style={{ color: "white" }}> You are logged in.</p>
            )}
        </main>
        </div>
    );
}

export default Home;