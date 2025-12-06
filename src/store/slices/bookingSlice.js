import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        bookings: JSON.parse(localStorage.getItem("bookings")) || [],
        search: "",
        sort: "date" // date | name | guests
    },
    reducers: {
        addBooking: (state, action) => {
            state.bookings.push(action.payload);
            localStorage.setItem("bookings", JSON.stringify(state.bookings));
        },
        removeBooking: (state, action) => {
            state.bookings = state.bookings.filter(b => b.id !== action.payload);
            localStorage.setItem("bookings", JSON.stringify(state.bookings));
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        }
    }
});

export const { addBooking, removeBooking, setSearch, setSort } = bookingSlice.actions;
export default bookingSlice.reducer;
