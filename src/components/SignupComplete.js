import React from "react";
import { useNavigate } from "react-router-dom";

const SignupComplete = () => {
    const navigate = useNavigate();

    return (
        <div style = {styles.SignupCompleteContainer}>
            <p>회원가입이 완료되었습니다!</p>
            <button
                onClick={() => navigate("/Login")
            }>
                로그인하기
            </button>
        </div>
    );
}

const styles = {
    SignupCompleteContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
        fontSize: "30px",
    },
    button: {
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

export default SignupComplete;