import React from "react";
import Slider from "../components/Slider";
import Ticker from "../components/Ticker";
import BookingForm from "../components/BookingForm";
import BookingList from "../components/BookingList";
import MoviePreview from "../components/MoviePreview";

export default function HomePage() {
    return (
        <div>
            <Ticker/>
            <Slider />

            <h1 style={{ textAlign: "center", marginTop: "30px" }}>
                Добро пожаловать в кинотеатр 🎥
            </h1>

            <BookingForm />
            <BookingList />
            <MoviePreview />
        </div>
    );
}
