import React from 'react';
import { useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        consolelog("User logged out");
        navigate("/");
    }

    return (
        <header className="header" style = {styles.header}>
            <div style={styles.logo} onClick={() => navigate("/")}>
                <span style={styles.logosymbol}>&lt;</span>
                <span style={styles.logosymbolRight}> &gt;</span>
                Code Bridge
            </div>
            <nav style = {styles.nav}>
                {!isLoggedIn ? (
                    <>
                        <button style={styles.button} onClick={() => navigate("/Login")}>
                            로그인
                        </button>
                        <button style={styles.button} onClick={() => navigate("/Signup")}>
                            회원가입
                        </button>
                    </>
                ):(
                    <>
                        <button stlyle = {styles.navButton} onClick={() => navigate("/Mypage")}>
                            My page
                        </button>
                        <button style = {styles.navButton} onClick={() => navigate("/Study")}>
                            학습하러 가기
                        </button>
                        <button style={styles.navButton} onClick={handleLogout} className="logout-button">
                            로그아웃
                        </button>
                    </>
                )}
            </nav>
        </header>
    );
}

const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "black",
        color: "white",
    },
    logo: {
        fontSize: "40px",
        fontWeight: "bold",
        cursor: "pointer",
        color: "white",
        display: "flex",
        alignItems: "center",
        gap: "5px",
    },
    logosymbol: {
        color: "red",
    },
    logosymbolRight: {
        color: "blue",
    },
    button: {
        background: "none",
        border: "none",
        color: "#a6a3a3",
        fontSize: "30px",
        marginLeft: "15px",
        cursor: "pointer",
    },
    navButton: {
        background: "none",
        border : "none",
        color: "#a6a3a3",
        fontSize: "16px",
        cursor: "pointer",
    }
  };
  
export default Header;