import NavLinks from "./NavLinks";
import classes from "./Nav.module.css";

export default function DesktopNav() {
  return (
    <nav className={classes.Navigation}>
      <NavLinks />
    </nav>
  );
}
