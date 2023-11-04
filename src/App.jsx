import React from 'react';
import Info from '/components/Info.jsx';
import About from '/components/About.jsx';
import Interest from '/components/Interest.jsx';
import Footer from '/components/Footer.jsx';
import './App.css';

function App() {
  return (
    <>
      <div className="app-body">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </>
  );
}

export default App;
