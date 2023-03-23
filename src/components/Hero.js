import restaurant from "../icons_assets/restaurant.jpg";

export default function Hero() {
  return (
    <div className="hero-container">
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <p>In Chicago</p>
          <p>
            We are family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>
        <img alt="Little Lemon Restaurant" src={restaurant} />
      </section>
    </div>
  );
}
