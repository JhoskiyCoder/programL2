import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavourite } from "../store/slices/favoriteSlice";

function FavoritesPage() {
    const favorites = useSelector((state) => state.favorite.list);
    const dispatch = useDispatch();

    const containerStyle = {
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
    };

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "20px",
        marginTop: "20px",
    };

    const cardStyle = {
        background: "#fff",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.2s",
    };

    const cardHoverStyle = {
        transform: "scale(1.03)",
    };

    const buttonStyle = {
        padding: "10px",
        backgroundColor: "#ff4d4f",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "14px",
        marginTop: "10px",
        transition: "background-color 0.3s, transform 0.2s",
    };

    const buttonHoverStyle = {
        backgroundColor: "#d9363e",
        transform: "scale(1.05)",
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ textAlign: "center", color: "#333" }}>Избранные фильмы</h2>
            {favorites.length === 0 ? (
                <p style={{ textAlign: "center", marginTop: "20px" }}>Нет избранных фильмов</p>
            ) : (
                <div style={gridStyle}>
                    {favorites.map((movie) => (
                        <div
                            key={movie.id}
                            style={cardStyle}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
                        >
                            <h3 style={{ marginBottom: "10px", color: "#111" }}>{movie.title}</h3>
                            <p style={{ color: "#555" }}>{movie.body.slice(0, 100)}...</p>
                            <button
                                style={buttonStyle}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
                                    e.currentTarget.style.transform = buttonHoverStyle.transform;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
                                    e.currentTarget.style.transform = "none";
                                }}
                                onClick={() => dispatch(removeFavourite(movie.id))}
                            >
                                Удалить из избранного
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FavoritesPage;

