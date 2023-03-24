import { Route, Routes } from "react-router-dom";

import "./App.css";
import { useState, useReducer, useEffect } from "react";
import Home from "./components/Home";
import BookingPage from "./components/BookingPage";

function App() {
  const [date, setDate] = useState("");
  const [guestNumber, setGuestNumber] = useState(0);
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");

  // Initialize the available times when the component mounts
  /*  useEffect(() => {
    const today = new Date();
    window
      .fetchAPI(today)
      .then((response) => setTimes(response))
      .catch((error) => console.error(error));
  }, []);

  // Update the available times when the selected date changes
  function handleDateChange(selectedDate) {
    window
      .fetchAPI(selectedDate)
      .then((response) => setTimes(response))
      .catch((error) => console.error(error));
  }

  // Handle form submission
  function handleSubmit(formData) {
    window
      .submitAPI(formData)
      .then((response) => {
        if (response === true) {
          alert("Booking submitted successfully!");
        } else {
          alert("There was an error submitting the booking.");
        }
      })
      .catch((error) => console.error(error));
  } */

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
    console.log(date, guestNumber, time, occasion);
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
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
