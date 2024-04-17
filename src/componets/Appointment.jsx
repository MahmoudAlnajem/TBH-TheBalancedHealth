import React, { useRef, useState } from "react";
import "../componets/Appointment.css";
import img1 from "../images/logo.png";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons"

export default function Appointment() {
  const form = useRef();

  let [alert, setAlert] = useState(false);

  window.addEventListener("scroll",() => {
    setAlert(false)
  })
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_pw3csip", "template_1xhqgej", form.current, {
        publicKey: "l-hExJd7jdMTGq-CV",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    setAlert(true);
  };
  return (
    <main className="appointment">
      {alert && (
        <div className="alert">
          <span
            className="closebtn"
            onClick={() => setAlert(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </span>
          تم إرسال الرسالة
        </div>
      )}
      <div className="container">
        <div className="text-col">
          <div className="apoint-title" dir="rtl">
            <svg width="150" height="100" xmlns="http://www.w3.org/2000/svg">
              <title>Curve Line</title>

              <g>
                <title>Curve Line</title>
                <g id="svg_7">
                  <line
                    stroke="#000"
                    stroke-linecap="undefined"
                    stroke-linejoin="undefined"
                    id="svg_22"
                    y2="61.83342"
                    x2="44.50379"
                    y1="44.76424"
                    x1="15.49949"
                    stroke-width="5"
                    fill="none"
                  />
                  <ellipse
                    transform="rotate(30 21.1756 48.0221)"
                    stroke="#000"
                    fill="#000"
                    stroke-width="5"
                    cx="21.17559"
                    cy="48.02208"
                    id="svg_1"
                    rx="6.73295"
                    ry="0.01171"
                  />
                  <ellipse
                    transform="rotate(31.0526 128.692 53.4053)"
                    stroke="#000"
                    fill="#000"
                    stroke-width="5"
                    cx="128.69234"
                    cy="53.40533"
                    id="svg_3"
                    rx="9.16965"
                    ry="0.00354"
                  />
                  <line
                    transform="rotate(109.643 54.1779 52.6714)"
                    stroke="#000"
                    stroke-linecap="undefined"
                    stroke-linejoin="undefined"
                    id="svg_2"
                    y2="61.20601"
                    x2="67.2227"
                    y1="44.13683"
                    x1="41.13313"
                    stroke-width="5"
                    fill="none"
                  />
                  <line
                    stroke="#000"
                    stroke-linecap="undefined"
                    stroke-linejoin="undefined"
                    id="svg_4"
                    y2="59.16681"
                    x2="89.50292"
                    y1="43.43093"
                    x1="63.8319"
                    stroke-width="5"
                    fill="none"
                  />
                  <line
                    transform="rotate(109.643 98.9426 50.0283)"
                    stroke="#000"
                    stroke-linecap="undefined"
                    stroke-linejoin="undefined"
                    id="svg_5"
                    y2="58.56285"
                    x2="111.78551"
                    y1="41.49367"
                    x1="86.09969"
                    stroke-width="5"
                    fill="none"
                  />
                  <path
                    id="svg_6"
                    d="m108.49771,41.09764l25.67103,15.73587"
                    opacity="undefined"
                    stroke-linecap="undefined"
                    stroke-linejoin="undefined"
                    stroke-width="5"
                    stroke="#000"
                    fill="none"
                  />
                </g>
              </g>
            </svg>
            <h1>
              {/* Get in Touch */}
              ابقى على تواصل !
            </h1>
            <p>
              {/* Contact Us and insert your information to schedule an appointment
              and your request will be responded within 24 hours */}
              اتصل بنا وأدخل معلوماتك لتحديد موعد وسيتم الرد على طلبك خلال 24
              ساعة
            </p>
          </div>
          <div className="apoint-form" dir="rtl">
            <form ref={form} onSubmit={sendEmail}>
              <div className="info-box">
                <label for="from_name">الاسم:</label>
                <input
                  required
                  type="text"
                  name="from_name"
                  id="from_name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="info-box">
                <label for="user_address">العنوان:</label>
                <input
                  required
                  type="text"
                  name="user_address"
                  id="user_address"
                  placeholder="Enter Your Address"
                />
              </div>
              <div className="info-box">
                <label for="user_phone">رقم الموبايل:</label>
                <input
                  required
                  type="text"
                  name="user_phone"
                  id="user_phone"
                  placeholder="Enter Your Phone number"
                />
              </div>
              <div className="info-box">
                <label for="from_email">البريد الالكتروني:</label>
                <input
                  required
                  type="email"
                  name="from_email"
                  id="from_email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="info-box">
                <label for="message">الرسالة:</label>
                <textarea
                  required
                  name="message"
                  id="message"
                  placeholder="Enter Your Massage"
                />
              </div>

              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
        <div className="image-col">
          <img src={img1} alt="" />
        </div>
      </div>
    </main>
  );
}
