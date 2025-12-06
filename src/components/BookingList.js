import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBooking } from "../store/slices/bookingSlice";
// Не забудьте проверить путь к showNotification!
import { showNotification } from "../store/slices/notificationSlice";

export default function BookingList() {
    const dispatch = useDispatch();
    const bookings = useSelector(state => state.booking.bookings);

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    // 🔎 ФИЛЬТР ПО ИМЕНИ
    const filtered = bookings.filter(b =>
        b.name.toLowerCase().includes(search.toLowerCase())
    );

    // 🔽 СОРТИРОВКА
    const sorted = [...filtered].sort((a, b) => {
        switch (sort) {
            case "date":
                return new Date(a.date) - new Date(b.date);
            case "guests":
                return a.guests - b.guests;
            case "name":
                return a.name.localeCompare(b.name);
            default:
                return 0;
        }
    });

    return (
        <div>
            <h2>Бронирования</h2>

            <input
                type="text"
                placeholder="Найти по имени"
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ marginBottom: 10 }}
            />

            <select onChange={e => setSort(e.target.value)}>
                <option value="">Сортировать...</option>
                <option value="date">По дате</option>
                <option value="guests">По количеству гостей</option>
                <option value="name">По имени</option>
            </select>

            <ul>
                {sorted.map(booking => (
                    <li key={booking.id} style={{ margin: "10px 0" }}>
                        <b>{booking.name}</b> — гостей: {booking.guests},
                        дата: {booking.date}, телефон: {booking.phone}

                        <button
                            onClick={() => {
                                dispatch(removeBooking(booking.id));
                                dispatch(showNotification({
                                    message: "Бронирование удалено",
                                    type: "success"
                                }));
                            }}
                            style={{ marginLeft: 10 }}
                        >
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}