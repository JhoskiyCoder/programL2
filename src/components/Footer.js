import React from "react";

function Footer() {
    const footerStyle = {
        background: "#1f1f1f",
        color: "#fff",
        padding: "20px 15px",
        textAlign: "center",
        fontSize: "14px",
        boxShadow: "0 -2px 6px rgba(0,0,0,0.2)",
        marginTop: "auto",
    };

    const highlightStyle = {
        color: "#4CAF50",
        fontWeight: "600",
    };

    return (
        <footer style={footerStyle}>
            <div>
                &copy; 2025 <span style={highlightStyle}>MyApp</span> IT-122
            </div>
            <div>Все права защищены</div>
        </footer>
    );
}

export default Footer;
