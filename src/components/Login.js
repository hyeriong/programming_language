import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        setIsLoggedIn(true);
        navigate("/");
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h1>로그인</h1>
                <p>서비스 이용을 위해 로그인 해주세요.</p>
                
                <label htmlFor="email">email: </label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder = "Enter your email"
                        required
                    />

                <label htmlFor="password">password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={((e) => setPassword(e.target.value))}
                        placeholder = "Enter your password"
                    />    

                <nav className="CompleteLogin">
                    <button type = "submit" onClick={() => navigate("/MiddlePage")}>
                        로그인
                    </button>
                </nav>

                <button onClick={() => navigate("/githublogin")}>
                    <img
                        src="github-icon.png"
                        alt="Github Logo"
                        style={{ width: "20px", marginRight: "8px"}}
                    />
                    Github로 로그인
                </button>
                <p>아직 회원가입하지 않으셨나요?</p>
                <button onClick={() => navigate("/Signup")}>
                    회원가입
                </button>
            </form>
        </div>
    )
}

export default Login;