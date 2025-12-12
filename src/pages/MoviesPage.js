import React, { useState } from "react";
import { Link } from "react-router-dom";
import { movies } from "../data/movies";

export default function MoviePage() {
    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState("all");
    const [sort, setSort] = useState("none");

    const filtered = movies
        .filter(m => m.title.toLowerCase().includes(search.toLowerCase()))
        .filter(m => (genre === "all" ? true : m.genre === genre))
        .sort((a, b) => {
            if (sort === "rating") return b.rating - a.rating;
            if (sort === "title") return a.title.localeCompare(b.title);
            return 0;
        });

    return (
        <div style={{ padding: "30px" }}>
            <h1 style={{ textAlign: "center" }}>🎬 Фильмы в кинотеатре</h1>


            <input
                type="text"
                placeholder="Поиск фильма..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    marginBottom: "15px"
                }}
            />


            <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    marginBottom: "15px"
                }}
            >
                <option value="all">Все жанры</option>
                <option value="Sci-Fi">Фантастика</option>
                <option value="Action">Экшен</option>
                <option value="Drama">Драма</option>
            </select>


            <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    marginBottom: "25px"
                }}
            >
                <option value="none">Без сортировки</option>
                <option value="rating">По рейтингу</option>
                <option value="title">По названию</option>
            </select>


            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px"
                }}
            >
                {filtered.map(movie => (
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
                            style={{ width: "100%", height: "350px", objectFit: "cover" }}
                        />

                        <div style={{ padding: "15px" }}>
                            <h3>{movie.title}</h3>
                            <p>Жанр: {movie.genre}</p>
                            <p>⭐ Рейтинг: {movie.rating}</p>

                            <Link to={`/movies/${movie.id}`}>
                                <button
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        background: "#0077ff",
                                        color: "white",
                                        border: "none",
                                        marginTop: "10px",
                                        borderRadius: "8px"
                                    }}
                                >
                                    Смотреть подробнее
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
