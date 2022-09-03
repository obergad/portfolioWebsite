import React from "react";
import logo from '../media/me3.jpg';
import '../styles/App.css';

function Home() {
    return(
      <div className="App-body">
      <img src={logo} className="profile-picture" alt="profilepic"/>
      <p className="homeText">
        Hi, I'm Adam.
      </p>
      <p className="homeText">
        Aspiring Graphics Developer
      </p>
      </div>
    );
}
export default Home;