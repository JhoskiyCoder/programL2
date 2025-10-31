import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../store/slices/userSlice";

function RegistrationPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const handleRegister = () => {
        dispatch(register({ email, name }));
    };

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    };

    const cardStyle = {
        backgroundColor: "#fff",
        padding: "40px 60px",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        textAlign: "center",
        width: "320px",
    };

    const inputStyle = {
        width: "100%",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "16px",
    };

    const buttonStyle = {
        width: "100%",
        padding: "12px",
        backgroundColor: "#4CAF50",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        fontSize: "16px",
        cursor: "pointer",
        marginTop: "10px",
        transition: "background-color 0.3s",
    };

    const buttonHoverStyle = {
        backgroundColor: "#45a049",
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h2 style={{ marginBottom: "20px", color: "#333" }}>Регистрация</h2>
                <input
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="email"
                    placeholder="Почта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                />
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                    onClick={handleRegister}
                >
                    Зарегистрироваться
                </button>
            </div>
        </div>
    );
}

export default RegistrationPage;

