import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IconName } from "react-icons/io5";
import { FaBeer } from 'react-icons/fa';

ReactDOM.render(
  <React.StrictMode>
    <App />

    <div>
      <a 
        className="badge-base__link LI-simple-link"
        href="https://www.linkedin.com/in/ioannis-stathopoulos?trk=profile-badge"
      >


      </a>
    </div>
    <div>
      <main>
        <div class="about-me-content"></div>
        <h1>
          Welcome to my Portfolio!
          <nav></nav>
          Hello im Ioannis
        </h1>
        <h2>About Me </h2>
        <p>
          I was given the opportunity to work on various projects and gained
          valuable experience in different areas of software development such as
          web development, mobile app development, and software engineering
          including the importance of collaboration, communication, and
          continuous learning. some of my recent projects highlight my strengths
          as a software developer. Moving forward, my career goal is to become
          an expert in the field I want to use my skills and knowledge to put a
          impactful contribute to the tech industry. Additionally, I aim to
          continuously improve my skills and stay up-to-date with the latest
          technologies and trends. In conclusion, my journey in software
          development has been a fulfilling and exciting experience, I am eager
          to continue to grow and achieve my career goals.
        </p>
        <h3 style={{ color: "black" }}>My Projects</h3>
        <h3 class="title">Education & Experience</h3>
        <p class="MyResume">
          For more information, have a look at my
          <a
            class="highlight-link"
            href="https://resume.io/r/EgTYfxgOE"
            target="RESUME"
            rel="noreferrer"
            style={{ color: "blue" }}
          >
            RESUME
          </a>
        </p>
        <p>
          These projects gave me a hands-on experience in software development
          and allowed me to apply my theoretical knowledge in a practical
          setting. They also helped me develop my technical skills and allowed
          me to see the results of my efforts. I am proud of what I have
          accomplished and look forward to creating more projects in the future.
        </p>{" "}
        <h3 style={{ color: "black" }}>
          {" "}
          <a href="https://github.com/gsrhead/calculator-project">
            Check out my latest projects at my Github.
          </a>
        </h3>
        <img
          src="calc.png"
          alt="Your"
          style={{
            width: "80px",
            height: "80px"
          }}
        />
        <p>Take a look at some of my favorite projects.</p>
      </main>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
