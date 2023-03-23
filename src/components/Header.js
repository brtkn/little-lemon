import Nav from "../components/Navigation/Nav";
import logo from "../icons_assets/Logo.svg";

export default function Header() {
  return (
    <header>
      <div>
        <a href="/">
          <img alt="little lemon icon" src={logo} />
        </a>

        <title>Little Lemon</title>
      </div>
      <Nav />
    </header>
  );
}
