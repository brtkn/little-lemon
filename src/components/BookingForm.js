export default function BookingForm(props) {
  const {
    date,
    onDateChange,
    guestNumber,
    onGuestNumberChange,
    time,
    onTimeChange,
    occasion,
    onOccasionChange,
    availableTimes,
    onSubmit,
  } = props;

  return (
    <form className="booking-form" onSubmit={onSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => onDateChange(e.target.value)}
        aria-label="Select a date for your reservation"
        aria-required="true"
        required
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => onTimeChange(e.target.value)}
        required
        aria-label="Select a time for your reservation"
        aria-required="true"
      >
        {/* Don't forget to add ? */}
        {availableTimes?.map((element) => {
          return <option key={element}>{element}</option>;
        })}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guestNumber}
        onChange={(e) => onGuestNumberChange(e.target.value)}
        aria-label="Enter the number of guests for your reservation"
        aria-required="true"
        required
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => onOccasionChange(e.target.value)}
        aria-label="Select the occasion for your reservation"
        aria-required="true"
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        className="submit-button"
        disabled={!guestNumber}
        type="submit"
        value="Make Your reservation"
        aria-label="Submit your reservation request"
      />
    </form>
  );
}
