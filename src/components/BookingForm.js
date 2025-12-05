import { useDispatch } from "react-redux";
import { addBooking } from "../store/slices/bookingSlice";
import { useState } from "react";

export default function BookingForm({ movieId, movieTitle }) {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addBooking({
                id: Date.now(),
                movieId,
                movieTitle,
                userName,
                date: new Date().toISOString().split("T")[0],
            })
        );
        setUserName("");
        alert("Бронирование успешно!");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Ваше имя"
                required
            />
            <button type="submit">Забронировать</button>
        </form>
    );
}
