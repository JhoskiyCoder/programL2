import React from "react";
import Ticker from "../components/Ticker";
import Slider from "../components/Slider";
import BookingList from "../components/BookingList";

export default function HomePage() {
    return (
        <div style={{ padding: "20px" }}>
            <Ticker />
            <h1 style={{ textAlign: "center" }}>Главная страница</h1>
            <Slider />
            <BookingList />
        </div>
    );
}
