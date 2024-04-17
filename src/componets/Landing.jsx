import React from "react";
import "./Landing.css";
import { NavLink } from "react-router-dom";
import keto from "../images/keto-lifestyle-594px.png";
export default function Landing() {
  return (
    <main className="landing">
      <div className="container">
        <div className="box-text">
          <div className="text">
            <h1 className="name">
              We Are The Balanced Health,
              <span>Your First Step Towards Health.</span>
            </h1>
            <p className="description" dir="rtl">
              {/* We Will Help You To Build A Healthy lifestyle And Have A Beautiful
              Looking Body without Overweight or Underweight by Implementation
              of Healthy Balanced Diets . */}
              سنساعدك على بناء نمط حياة صحي والحصول على جسم جميل المظهر بدون
              زيادة الوزن أو نقص الوزن من خلال تنفيذ أنظمة غذائية صحية ومتوازنة.
            </p>
            <div className="links">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active apointment-button"
                    : "nav-link apointment-button"
                }
              >
                حجز موعد استشارة
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active contact-button"
                    : "nav-link contact-button"
                }
              >
                تواصل معنا
              </NavLink>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={keto} alt="keto lifestyle picture" />
        </div>
      </div>
    </main>
  );
}
