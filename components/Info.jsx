import React from 'react';
import '/src/App.css';

export default function Info() {
  return (
    <>
      <div className="info-body">
        <img
          src="../src/assets/formal-attire.png"
          alt="John Mark Tizado's Formal Attire Picture"
          className="formalAttire"
        />
        <br></br>
        <h1 className="info-name">John Mark Tizado</h1>
        <p>Frontend Developer</p>
        <small>github.com/ProgrammerJM</small>
      </div>
      <div className="buttons">
        <button className="mail" id="email-button">
          <img
            src="../src/assets/Mail.png"
            alt="mail-icon"
            className="mail-icon"
          />
          <a
            href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=johnmarktizado@gmail.com&tf=1"
            target="_blank"
          >
            Email
          </a>
        </button>
        <button className="Linkedin" id="Linkedin-button">
          <img src="../src/assets/LinkedIn.png" alt="linkedin-icon" />
          <a href="https://www.linkedin.com/in/johnmarktizado/" target="_blank">
            LinkedIn
          </a>
        </button>
      </div>
    </>
  );
}
