import { useSelector } from "react-redux";

export default function BookingList() {
    const bookings = useSelector((state) => state.booking.bookings);

    if (bookings.length === 0) return <p>Бронирований пока нет</p>;

    return (
        <div style={{ marginTop: "30px" }}>
            <h3>Все бронирования:</h3>
            <ul>
                {bookings.map((b) => (
                    <li key={b.id}>
                        {b.userName} забронировал "{b.movieTitle}" на {b.date}
                    </li>
                ))}
            </ul>
        </div>
    );
}
