import React from "react";
import "./ContactMe.css";
import { Link } from "react-router-dom";
import image1 from "../images/The_Joys_of_Working_as_a_Social_Media_Professional_625x417.png";
import image2 from "../images/How-to-Avoid-PhoneTag-and-Actually-Talk-to-the-Person-scaled-e1586362715367.jpeg";
import image3 from "../images/creer-adresse-mail.jpg";
export default function ContactMe() {
  return (
    <main className="cantact-main">
      <div className="container">
        <div className="box">
          <div className="image">
            <img src={image1} alt="" />
          </div>
          <h1>Facebook</h1>
          <p>
            {/* Contact Us to get An appointment or medical consultation on Facebook */}
            اتصل بنا للحصول على موعد أو قرار طبي على فيسبوك
          </p>
          <Link
            to="https://www.facebook.com/profile.php?id=100053994952170"
            target="_blank"
          >
            المزيد
          </Link>
        </div>
        <div className="box">
          <div className="image">
            <img src={image2} alt="" />
          </div>
          <h1>WhatsApp</h1>
          <p>
            {/* Contact Us To get An appointment or medical consultation on WhatsApp */}
            تواصل معنا للحصول على موعد أو استشارة طبية عبر الواتساب
          </p>
          <Link
            to="https://wa.me/963988086277?text=حجز استشارة طبية "
            target="_blank"
          >
            المزيد
          </Link>
        </div>
        <div className="box">
          <div className="image">
            <img src={image3} alt="" />
          </div>
          <h1>Email</h1>
          <p>
            {/* Contact Us to get An appointment or medical consultation on Email */}
            اتصل بنا للحصول على موعد أو استشارة طبية عبر البريد الإلكتروني
          </p>
          <Link to="mailto:drkawtherkhalil@gmail.com" target="_blank">
            المزيد
          </Link>
        </div>
      </div>
    </main>
  );
}
