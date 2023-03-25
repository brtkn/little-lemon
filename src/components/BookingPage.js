import BookingForm from "./BookingForm";
import Header from "./Header";

export default function BookingPage(props) {
  return (
    <>
      <Header />
      <div className="booking-card">
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
        {props.formState && (
          <>
            <div className="booking-confirmation">
              <p>{props.reservation}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
