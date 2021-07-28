import React from "react";
import "styles/About.css";
import data from "constants/aboutusData";

export default function About() {
  return (
    <div className="about">
      <div className="about__header">
        <h2 className="about__heading">About Us</h2>
        <p className="about__subtitle">
          This is a Translator app which basically consists of language
          translation, language detection and language transliteration
        </p>
      </div>
      <div className="about__container">
        {data.map((d, i) => (
          <div className="about__container_div" key={i}>
            <h2 className="about__container_title">{d.heading}</h2>
            <p className="about__container_subtitle">{d.subtitle}</p>
            <ul className="about__container_list">
              {d.features.map((f, index) => (
                <li className="about__container_list_item" key={index}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
