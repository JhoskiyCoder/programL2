import React from "react";
import { movies } from "../data/movies";
import { Link } from "react-router-dom";

export default function MoviePreview() {
    return (
        <div style={{ padding: "30px" }}>
            <h2 style={{ marginBottom: "20px" }}>🔥 Популярные фильмы</h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px"
                }}
            >
                {movies.slice(0, 3).map(movie => (
                    <div
                        key={movie.id}
                        style={{
                            background: "#fff",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                        }}
                    >
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            style={{ width: "100%", height: "280px", objectFit: "cover" }}
                        />

                        <div style={{ padding: "15px" }}>
                            <h3>{movie.title}</h3>
                            <p style={{ color: "#666" }}>{movie.genre}</p>

                            <Link to={`/movies/${movie.id}`}>
                                <button
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        background: "#ff3b3b",
                                        color: "white",
                                        border: "none",
                                        marginTop: "10px",
                                        borderRadius: "8px"
                                    }}
                                >
                                    Подробнее
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
