import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"

const Signup = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword]=useState("");
    const [nickname, setNickname]=useState("");
    const [nationality, setNationality]=useState("");
    const [gender, setGender]=useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        //회원가입 처리 로직

        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return; //유효성 검사로 바꾸기
        }

        /*const payload = {
            name: username,
            email: email,
            password: password,
            nickname: nickname,
            nationality: nationality,
            gender: gender,
        };*/
    };

    return (
        <div>
            <div className = "signup-container">
                <form className= "signup-form" onSubmit={handleSignup}>
                    <h1>회원가입</h1>

                    <label htmlFor="username">이름*</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor="email">이메일*</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">비밀번호*</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label htmlFor="confirm-password">비밀번호 확인*</label>
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <label htmlFor="nickname">닉네임</label>
                    <input
                        type="text"
                        id="nickname"
                        value={nickname}
                        onChange={(e)=>setNickname(e.target.value)}
                    />

                    <label htmlFor="nationality">국적</label>
                    <input
                        type="text"
                        id="nationality"
                        value={nationality}
                        onChange={(e)=>setNationality(e.target.value)}
                    />

                    <label htmlFor="gender">성별</label>
                    <input
                        type="text"
                        id="gender"
                        value={gender}
                        onChange={(e)=>setGender(e.target.value)}
                    />

                    <nav className="Completed">
                        <button style={styles.button} onClick={() => navigate("/SignupComplete")}>
                            완료
                        </button>
                    </nav>
                </form>
            </div>
        </div>
    );
}

const styles = {
    button :{
        width: "100%",
        padding: "12px",
        fontSize: "20px",
        fontWeight: "bold",
        backgroundColor: "#121212",
        color: "white",
        border: "none",
        cursor: "pointer",
    }
}

export default Signup;