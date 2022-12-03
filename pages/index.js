import React from "react";
import HeadComponent from '../components/Head';

// Constants
const AUTHOR_TWITTER_HANDLE = "AffirmedVision";
const AUTHOR_TWITTER_LINK = `https://twitter.com/${AUTHOR_TWITTER_HANDLE}`;

const App = () => {

  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        
        <header className="header-container">
          <p className="header"> Visionary Stationary </p>
          <p className="sub-text">All the Goodnotes templates you need for 2023</p>
        </header>

        <main>
          <img src="https://media.giphy.com/media/4vtJplhBkGK3y68Zw3/giphy.gif" alt="planner" />
        </main>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={AUTHOR_TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`Built by @${AUTHOR_TWITTER_HANDLE} `}</a>
        </div>

      </div>
    </div>
  );
};

export default App;
