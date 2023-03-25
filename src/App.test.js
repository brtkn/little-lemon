import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import BookingPage from "./components/BookingPage";

test("Renders the Booking Page Heading", () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Book Now");

  expect(headingElement).toBeInTheDocument();
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
