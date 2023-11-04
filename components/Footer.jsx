import React from 'react';
import Twitter from '/src/assets/Twitter.png';
import Facebook from '/src/assets/Facebook.png';
import Instagram from '/src/assets/Instagram.png';
import GitHub from '/src/assets/GitHub.png';
import '/src/App.css';

export default function Footer() {
  return (
    <footer>
      <button>
        <a href="https://twitter.com/xyjtiz" target="_blank">
          <img src={Twitter} alt="twitter icon" className="icon" />
        </a>
      </button>
      <button>
        <a href="https://www.facebook.com/johnmarkt00" target="_blank">
          <img src={Facebook} alt="twitter icon" className="icon"></img>
        </a>
      </button>
      <button>
        <a href="https://www.instagram.com/xy_jtiz/" target="_blank">
          <img src={Instagram} alt="twitter icon" className="icon" />
        </a>
      </button>
      <button>
        <a href="https://github.com/ProgrammerJM" target="_blank">
          <img src={GitHub} alt="twitter icon" className="icon" />
        </a>
      </button>
    </footer>
  );
}
