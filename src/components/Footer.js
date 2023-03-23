import lemonLogo from "../icons_assets/Logo1.svg";

export default function Footer() {
  return (
    <footer>
      <div>
        <img alt="little lemon logo" src={lemonLogo} />
      </div>
      <div>
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="menu">Menu</a>
          </li>
          <li>
            <a href="reservations">Reservations</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
