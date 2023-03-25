import { Route, Routes } from "react-router-dom";

import "./App.css";
import { useState, useReducer } from "react";
import Home from "./components/Home";
import About from "./components/About";
import BookingPage from "./components/BookingPage";

function App() {
  const [date, setDate] = useState("");
  const [guestNumber, setGuestNumber] = useState(0);
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [formState, setFormState] = useState(false);
  const [reservation, setReservation] = useState("");

  function initializeTimes(date) {
    // create some initial times for the given date
    return [
      `${date} 17:00`,
      `${date} 18:00`,
      `${date} 19:00`,
      `${date} 20:00`,
      `${date} 21:00`,
      `${date} 22:00`,
    ];
  }

  function updateTimes(state, action) {
    switch (action.type) {
      case "DATE_CHANGE":
        return initializeTimes(action.payload);
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initializeTimes(date)
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (date && guestNumber) {
      setFormState(true);
      setReservation(`Reservation: ${time} for ${guestNumber} people`);
    }

    console.log(date, guestNumber, occasion);
  }

  function handleDateChange(date) {
    setDate(date);
    dispatch({ type: "DATE_CHANGE", payload: date });
  }

  function handleTimeChange(time) {
    setTime(time);
  }

  function handleGuestNumberChange(guestNumber) {
    setGuestNumber(guestNumber);
  }

  function handleOccasionChange(occasion) {
    setOccasion(occasion);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              date={date}
              onDateChange={handleDateChange}
              time={time}
              onTimeChange={handleTimeChange}
              guestNumber={guestNumber}
              onGuestNumberChange={handleGuestNumberChange}
              occasion={occasion}
              onOccasionChange={handleOccasionChange}
              availableTimes={availableTimes}
              onSubmit={handleSubmit}
              formState={formState}
              reservation={reservation}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
