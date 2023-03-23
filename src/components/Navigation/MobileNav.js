import NavLinks from "./NavLinks";
import classes from "./Nav.module.css";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

export default function MobileNav() {
  const [flipMenu, setFlipMenu] = useState(false);

  const menuRound = (
    <CgMenu
      className={classes.Hamburger}
      size="40"
      color="#495e57"
      onClick={() => setFlipMenu(!flipMenu)}
    />
  );

  const menuClose = (
    <CgClose
      className={classes.Hamburger}
      size="40"
      color="#495e57"
      onClick={() => setFlipMenu(!flipMenu)}
    />
  );

  const closeMobileMenu = () => setFlipMenu(false);
  return (
    <nav className={classes.MobileNavigation}>
      {flipMenu ? menuClose : menuRound}
      {flipMenu && (
        <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
      )}
    </nav>
  );
}
