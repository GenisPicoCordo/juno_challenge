import { useState } from "react";

import styles from "../style";
import { close, logo, menu } from "../assets";
import { headerLinks, navLinks, responsiveLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
        <nav className="pt-4 ">
          <ul className={styles.navBar1}>
            {headerLinks.map((header, index) => (
              <li
                key={header.name}
                className={`${styles.navBar} ${
                  index === headerLinks.length - 1 ? "mr-0" : "mr-10"
                }`}
                onClick={() => window.open(header.link)}
              >
                {header.name}
              </li>
            ))}
          </ul>
        </nav>

        <nav className="flex">
          <img src={logo} alt="juno" className="w-[100px]" />

          <ul className={styles.navBar1}>
            {navLinks.map((nav, index) => (
              <li
                key={nav.name}
                className={`${styles.navBar} ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-10"
                }`}
                onClick={() => window.open(nav.link)}
              >
                {nav.name}
              </li>
            ))}
          </ul>

          <div className={styles.navBar2}>
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle((prev) => !prev)}
            />

            <div
              className={`${
                toggle ? "flex" : "hidden"
              } ${styles.navBar3}`}
            >
              <ul className={styles.navBar4}>
                {responsiveLinks.map((responsive, index) => (
                  <li
                    key={responsive.name}
                    className={`${styles.navBar} ${
                      index === responsiveLinks.length - 1 ? "mr-0" : "mr-10"
                    }`}
                    onClick={() => window.open(responsive.link)}
                  >
                    {responsive.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
};

export default Navbar;
