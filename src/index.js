import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
  <React.StrictMode>
    <App />
    
    <div
      className="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="medium"
      data-theme="dark"
      data-type="VERTICAL"
      data-vanity="ioannis-stathopoulos"
      data-version="v1"
    >
      <a
        className="badge-base__link LI-simple-link"
        href="https://www.linkedin.com/in/ioannis-stathopoulos?trk=profile-badge"
      >
     
      </a>
    </div>
    <div>
      <nav></nav>
      <main>
        <div class="about-me-content"></div>
        <h1>Welcome to my Portfolio my name is Ioannis</h1>
        <h2>About Me </h2>
        <p>
          As a software developer, my journey in the field started when I first
          discovered my love for problem-solving with technology. I was
          fascinated by the idea that I could build something from scratch and
          create solutions that would make people's lives easier. I knew then
          that I wanted to pursue a career in software development.
           I was given the opportunity to work on various projects
          and gained valuable experience in different areas of software
          development such as web development, mobile app development, and
          software engineering  including the
          importance of collaboration, communication, and continuous learning.
         some of my recent projects highlight my strengths as a software developer.
          Moving forward, my career goal is to become an expert in the field
           I want to use my skills and knowledge to put a 
            impactful  contribute to the tech industry. Additionally,
          I aim to continuously improve my skills and stay up-to-date with the
          latest technologies and trends. In conclusion, my journey in software
          development has been a fulfilling and exciting experience, and I am
          eager to continue to grow and achieve my career goals. I am confident
          that with my portfolio, I can take my next steps in the field and
          continue to make a positive impact..
        </p>
   <h3 style={{color: 'blue'}}>My Projects</h3>
{/* 
        <h3>1. Gaming Project</h3>
        <p>
          My first project in the field of software development was a gaming
          project. I was fascinated by the idea of creating a virtual world
          where you can immerse  and have fun. The project
          required a combination of my problem-solving skills, creativity, and
          technical knowledge. Through this project, I learned the importance of
          user experience design and the role that it plays in making a game
          enjoyable for player.
        </p>
        <h3>2. Calculator Application</h3>
        <p>
       Another project that I worked on during my studies was a calculator
          application. The project aimed to develop my skills in designing user
          interfaces and creating a functional application. I was able to
          practice the basics of programming and apply my knowledge to create a
          simple yet effective calculator. Through this project, I learned the
          importance of testing and debugging code to ensure that the
          application works as intended.
        </p> */}
        <p>
          These projects gave me a hands-on experience in software development
          and allowed me to apply my theoretical knowledge in a practical
          setting. They also helped me develop my technical skills and allowed
          me to see the results of my efforts. I am proud of what I have
          accomplished and look forward to creating more projects in the future.
        </p>{" "}

   <h3 style={{color: 'blue'}}> <a href="https://github.com/gsrhead/calculator-project">Check out my read.me my latest projects at my github.</a></h3>
 
   <img   src="calc.png" 
  alt="Your" 
  style={{ 
    width: "50px", 
    height: "50px" 
  }} 
/>
        <p>Take a look at some of my favorite projects.</p>
      </main>
      
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
