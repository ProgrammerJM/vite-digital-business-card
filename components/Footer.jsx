import React from 'react';
import Twitter from '/src/assets/Twitter.png';
import Facebook from '/src/assets/Facebook.png';
import Instagram from '/src/assets/Instagram.png';
import Github from '/src/assets/GitHub.png';
import '/src/App.css';

export default function Footer() {
  return (
    <footer>
      <img src={Twitter} alt="twitter icon" className="icon" />
      <img src={Facebook} alt="twitter icon" className="icon" />
      <img src={Instagram} alt="twitter icon" className="icon" />
      <img src={Github} alt="twitter icon" className="icon" />
    </footer>
  );
}
