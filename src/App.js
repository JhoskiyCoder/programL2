import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PostsList from "./components/PostsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/MoviesPage";
import Detail from "./pages/Detail";
import FavoritesPage from "./pages/FavoritePage";
import RegistrationPage from "./pages/RegistrationPage";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Notification from "./components/Notification";

function App() {
  return (
    <Router>
      <Header />
        <Notification />
      <Routes>
        <Route path="/movies/:id" element={<Detail />} />
        <Route
          path="/"
          element={
            <div>
              <HomePage />
              <PostsList />
            </div>
          }
        />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
