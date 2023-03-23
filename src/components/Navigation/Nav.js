import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import classes from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={classes.NavBar}>
      <MobileNav />
      <DesktopNav />
    </nav>
  );
}
