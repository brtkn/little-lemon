import { Link } from "react-router-dom";
import lemonLogo from "../icons_assets/Logo1.svg";

export default function Footer() {
  return (
    <footer id="footernav">
      <div>
        <img alt="little lemon logo" src={lemonLogo} />
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/booking">Reservations</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
