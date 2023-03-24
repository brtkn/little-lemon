import BookingForm from "./BookingForm";

export default function BookingPage(props) {
  return (
    <>
      <h1>Book Now</h1>
      <BookingForm
        date={props.date}
        onDateChange={props.onDateChange}
        guestNumber={props.guestNumber}
        onGuestNumberChange={props.onGuestNumberChange}
        time={props.time}
        onTimeChange={props.onTimeChange}
        occasion={props.occasion}
        onOccasionChange={props.onOccasionChange}
        availableTimes={props.availableTimes}
        onSubmit={props.onSubmit}
      />
    </>
  );
}
