import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearNotification } from "../store/slices/notificationSlice";

export default function Notification() {
    const dispatch = useDispatch();
    const { message, type } = useSelector(state => state.notification);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => dispatch(clearNotification()), 2500);
            return () => clearTimeout(timer);
        }
    }, [message]);

    if (!message) return null;

    return (
        <div style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: type === "success" ? "#4caf50" : "#e53935",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            fontSize: "16px",
            zIndex: 1000,
            animation: "fade-in .3s ease"
        }}>
            {message}
        </div>
    );
}
