import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import img1 from "../images/dietary-supplements-how-dietary-supplements-work-and-how-are-they-produced-all-you-need-to-know.jpg";
import img2 from "../images/family-nutritionist-happy-doctor-healthy-nutrition-and-diet-plan-character-in-flat-style-vector.jpg";
import img3 from "../images/features-01.jpg";
import img4 from "../images/features-02.jpg";
import img5 from "../images/features-03.jpg";
import img6 from "../images/p1bm5844cb6oacnd1std183s12gt6.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="col-1">
          <h1 className="logo">T B H</h1>
          <div className="social-icons">
            <Link
              to="https://www.facebook.com/profile.php?id=100053994952170"
              target="_blank"
            >
              <span>
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
            </Link>
            <Link to="https://www.instagram.com/tbh_thebalancedhealth?igsh=NGVhN2U2NjQ0Yg==" target="_blank">
              <span>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </Link>
            <Link
              to="https://wa.me/963988086277?text=حجز استشارة طبية "
              target="_blank"
            >
              <span>
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
            </Link>
            <Link to="mailto:drkawtherkhalil@gmail.com" target="_blank">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </Link>
          </div>
          <p>
            We Are The Balanced Health,{" "}
            <span>Your First Step Towards Health</span>.
          </p>
        </div>
        <div className="col-2">
          <Link to="/">رئيسية</Link>
          <Link to="/about">معلومات</Link>
          <Link to="/contact">تواصل معنا</Link>
          <Link to="/appointment">حجز موعد استشارة</Link>
        </div>
        <div className="col-3">
          <div className="text">
            <FontAwesomeIcon icon={faLocationDot} className="text-icon" />
            <span>Syria, Damascus, Dummar Project</span>
          </div>
          <div className="text">
            <FontAwesomeIcon icon={faPhone} className="text-icon" />
            <span>Phone: +963 988 086 277</span>
          </div>
          <div className="text">
            <FontAwesomeIcon icon={faEnvelope} className="text-icon" />
            <span>Email: drkawtherkhalil@gmail.com</span>
          </div>
        </div>
        <div className="col-4">
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
          <img src={img5} />
          <img src={img6} />
        </div>
      </div>
      <p className="copyrights">
        Made By {""}
        <Link to="https://facebook.com/mahmoud.alnajem.16" target="_blank">
          <span>Mahmoud</span>
        </Link>
      </p>
    </footer>
  );
}
