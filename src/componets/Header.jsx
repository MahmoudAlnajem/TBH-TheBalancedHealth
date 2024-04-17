import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../images/1709833547282.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import img1 from "../images/1140-hearthealthlandingpageEOA.png";

export default function Header() {
  let BurgerIcon = useRef(null);

  let [navDisplay, setNavDisplay] = React.useState(false);

  function BurgerClickClass() {
    BurgerIcon.current.classList.toggle("clicked");
    setNavDisplay((oldValue) => !oldValue);
  }

  return (
    <header>
      <div className="container">
        <Link to="/" className="doctor-logo">
          <img src={logo} alt="" />
        </Link>
        <div
          className="burger-links"
          onClick={() => BurgerClickClass()}
          ref={BurgerIcon}
        >
          <span> </span>
          <span> </span>
          <span> </span>
        </div>
        <nav
          className={navDisplay ? "show" : "hidden"}
          onMouseLeave={() => BurgerClickClass()}
        >
          <img src={img1} alt="" />
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <FontAwesomeIcon icon={faHouse} /> رئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <FontAwesomeIcon icon={faCircleInfo} />
                معلومات
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <FontAwesomeIcon icon={faMobile} />
                تواصل معنا
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appointment"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active apointment-button"
                    : "nav-link apointment-button"
                }
              >
                <FontAwesomeIcon icon={faCalendarCheck} />
                حجز موعد استشارة
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
