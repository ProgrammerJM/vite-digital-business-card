import React from 'react';
import FormalAttire from '/src/assets/formal-attire.png';
import LinkedIn from '/src/assets/LinkedIn.png';
import Mail from '/src/assets/Mail.png';
import '/src/App.css';

export default function Info() {
  return (
    <>
      <div className="info-body">
        <img
          src={FormalAttire}
          alt="John Mark Tizado's Formal Attire Picture"
          className="formalAttire"
        />
        <br></br>
        <h1 className="info-name">John Mark Tizado</h1>
        <p>Frontend Developer</p>
        <small>github.com/ProgrammerJM</small>
      </div>
      <div className="buttons">
        <div className="mail" id="email-button">
          <img src={Mail} />
          <p>Email</p>
        </div>
        <div className="Linkedin" id="linkedin-button">
          <img src={LinkedIn} />
          <p>LinkedIn</p>
        </div>
      </div>
    </>
  );
}
