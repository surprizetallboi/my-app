import "./App.css";
// import { Button } from "./Button.jsx"
import { Circle } from "./circle.jsx"
import React, { useState } from "react";

function App() {
  const [isShrunk, setIsShrunk] = useState(false);

function heyHo(){
    setIsShrunk(isShrunk => !isShrunk);
}

  return (
    <div id="bigDiv" className={isShrunk? "App1" : "App2"}>
      
      <button className={isShrunk? "butt1" : "butt2"} onClick={heyHo}>Click to begin</button>
      <header className={isShrunk? "appHead1" : "appHead2"}>
        <h2 id="hello">hey, my name is</h2>
        <h1>CHRISTIAN DANIEL</h1>
        <h2 id="make">I make stuff and do things</h2>
      </header>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="begin">
      <p className={isShrunk? "buttonText1" : "buttonText2"}>Press anywhere to begin</p>      
      </div>
      {/* <Circle /> */}
    </div>
  );
}

export default App;