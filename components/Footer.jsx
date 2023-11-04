import React from 'react';
import '/src/App.css';

export default function Footer() {
  return (
    <footer>
      <button>
        <a href="https://twitter.com/xyjtiz" target="_blank">
          <img
            src="/src/assets/Twitter.png"
            alt="twitter icon"
            className="icon"
          />
        </a>
      </button>
      <button>
        <a href="https://www.facebook.com/johnmarkt00" target="_blank">
          <img
            src="/src/assets/Facebook.png"
            alt="twitter icon"
            className="icon"
          ></img>
        </a>
      </button>
      <button>
        <a href="https://www.instagram.com/xy_jtiz/" target="_blank">
          <img
            src="/src/assets/Instagram.png"
            alt="twitter icon"
            className="icon"
          />
        </a>
      </button>
      <button>
        <a href="https://github.com/ProgrammerJM" target="_blank">
          <img
            src="/src/assets/GitHub.png"
            alt="twitter icon"
            className="icon"
          />
        </a>
      </button>
    </footer>
  );
}
