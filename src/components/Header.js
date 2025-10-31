import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation(); // Чтобы выделять текущую страницу

    const headerStyle = {
        padding: "15px 30px",
        background: "#1f1f1f",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
    };

    const navStyle = {
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
    };

    const linkStyle = (path) => ({
        color: location.pathname === path ? "#4CAF50" : "#fff", // текущая страница зеленым
        textDecoration: "none",
        fontWeight: "500",
        padding: "6px 10px",
        borderRadius: "6px",
        transition: "all 0.3s",
    });

    const linkHover = (e) => {
        e.target.style.backgroundColor = "#4CAF50";
        e.target.style.color = "#fff";
    };

    const linkOut = (e, path) => {
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = location.pathname === path ? "#4CAF50" : "#fff";
    };

    const links = [
        { path: "/", label: "Главная" },
        { path: "/about", label: "О нас" },
        { path: "/contacts", label: "Контакты" },
        { path: "/movies", label: "Фильмы" },
        { path: "/favorites", label: "Избранные" },
        { path: "/register", label: "Регистрация" },
    ];

    return (
        <header style={headerStyle}>
            <nav style={navStyle}>
                {links.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        style={linkStyle(link.path)}
                        onMouseEnter={linkHover}
                        onMouseLeave={(e) => linkOut(e, link.path)}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}

export default Header;

