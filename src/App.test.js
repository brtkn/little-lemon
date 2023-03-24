import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./App";
import BookingPage from "./components/BookingPage";

test("Renders the Booking Page Heading", () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Book Now");

  expect(headingElement).toBeInTheDocument();
});

describe("initializeTimes function", () => {
  it("returns an array of times for the given date", () => {
    const times = initializeTimes("2023-03-24");
    expect(times).toEqual([
      "2023-03-24 17:00",
      "2023-03-24 18:00",
      "2023-03-24 19:00",
      "2023-03-24 20:00",
      "2023-03-24 21:00",
      "2023-03-24 22:00",
    ]);
  });
});

describe("updateTimes function", () => {
  it("returns the same state when the action type is not 'DATE_CHANGE'", () => {
    const state = ["2023-03-24 17:00", "2023-03-24 18:00"];
    const action = { type: "SOME_OTHER_ACTION", payload: "2023-03-25" };
    const newState = updateTimes(state, action);
    expect(newState).toEqual(state);
  });

  it("returns the initial times for the given date when the action type is 'DATE_CHANGE'", () => {
    const state = ["2023-03-24 17:00", "2023-03-24 18:00"];
    const action = { type: "DATE_CHANGE", payload: "2023-03-25" };
    const newState = updateTimes(state, action);
    expect(newState).toEqual([
      "2023-03-25 17:00",
      "2023-03-25 18:00",
      "2023-03-25 19:00",
      "2023-03-25 20:00",
      "2023-03-25 21:00",
      "2023-03-25 22:00",
    ]);
  });
});

test('renders "Choose date" input field with correct HTML validation attributes', () => {
  render(<BookingForm />);
  const inputElement = screen.getByLabelText(
    "Select a date for your reservation"
  );
  expect(inputElement).toHaveAttribute("type", "date");
  expect(inputElement).toHaveAttribute("required", "");
  expect(inputElement).toHaveAttribute("aria-required", "true");
});

test("disables submit button when guest number is 0", () => {
  render(<BookingForm />);
  const guestNumberInput = screen.getByLabelText("Number of guests");
  const submitButton = screen.getByRole("button", {
    name: "Submit your reservation request",
  });
  userEvent.clear(guestNumberInput);
  userEvent.type(guestNumberInput, "0");
  expect(submitButton).toBeDisabled();
});
