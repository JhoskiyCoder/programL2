import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "../store/slices/bookingSlice";
import { showNotification } from "../store/slices/notificationSlice";

export default function BookingForm() {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        name: "",
        guests: 1,
        date: "",
        phone: "",
        eventType: ""
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};

        if (!form.name.trim()) newErrors.name = "Имя не должно быть пустым";
        if (form.guests < 1) newErrors.guests = "Гостей должно быть минимум 1";
        if (!form.date) newErrors.date = "Дата обязательна";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const submit = () => {
        if (!validate()) return;

        dispatch(addBooking({
            id: Date.now(),
            ...form
        }));

        dispatch(showNotification({
            message: "Бронирование успешно добавлено!",
            type: "success"
        }));

        setForm({ name: "", guests: 1, date: "", phone: "", eventType: "" });
    };

    return (
        <div style={{ padding: 20, maxWidth: 400, margin: "20px auto", background: "#fff",
            borderRadius: 12, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>

            <h2 style={{ marginBottom: 15 }}>Создать бронирование</h2>

            <input
                placeholder="Имя"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="input"
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

            <input
                type="number"
                placeholder="Количество гостей"
                value={form.guests}
                onChange={e => setForm({ ...form, guests: +e.target.value })}
                className="input"
            />
            {errors.guests && <p style={{ color: "red" }}>{errors.guests}</p>}

            <input
                type="date"
                value={form.date}
                onChange={e => setForm({ ...form, date: e.target.value })}
                className="input"
            />
            {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}

            <input
                placeholder="Телефон"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className="input"
            />

            <input
                placeholder="Тип мероприятия (например: День рождения)"
                value={form.eventType}
                onChange={e => setForm({ ...form, eventType: e.target.value })}
                className="input"
            />

            <button onClick={submit} className="btn">
                Забронировать
            </button>
        </div>
    );
}
