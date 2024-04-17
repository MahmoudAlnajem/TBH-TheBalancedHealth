import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import img from "../images/DALL_E_2024-01-23_20.23.39_-_An_image_for_a_blog_post_about_nutrition_and_mental_health._The_image_should_depict_a_human_brain_made_out_of_various_healthy_foods_like_fruits_veget.webp";

export default function About() {
  return (
    <main className="about-main">
      <div className="container">
        <div className="about-image">
          <img src={img} alt="logo picture" />
        </div>
        <div className="about-box-text" dir="rtl">
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
          <div className="about-box" >
            <h1>!من نحن</h1>
            <p>
              {/* I'm Doctor Kawther Khalil Specialist in therapeutic nutrition,
              consultant in programs, nutritional diets, treatment of obesity
              and thinness in adults and children, treating diseases with
              correct nutrition, treating child obesity, malnutrition of
              children, pregnantans and breastfeeding, chronic disease such as:
              diabetes, high blood pressure, high cholesterol, digestive system
              diseases such as: irritable bowel syndrome also food allergies . */}
              أنا دكتورة كوثر خليل أخصائية التغذية العلاجية، استشارية برامج
              الحميات الغذائية، علاج السمنة والنحافة لدى الكبار والأطفال، علاج
              الأمراض بالتغذية الصحيحة، علاج سمنة الأطفال، سوء تغذية الأطفال
              والحوامل والمرضعات، الأمراض المزمنة مثل : مرض السكري، ارتفاع ضغط
              الدم، ارتفاع الكولسترول، أمراض الجهاز الهضمي مثل: القولون العصبي،
              وحساسية الطعام.
            </p>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              تواصل معنا
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
}
