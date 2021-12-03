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

      <div className={isShrunk? "begin1" : "begin2"} id="begin" >
      <p className={isShrunk? "buttonText1" : "buttonText2"}>Press anywhere to begin</p>      
      </div>
      <div className={isShrunk? "paragraph1" : "paragraph2"} id="paragraph" >
      <p>This is my website, it's not quite done yet</p>
      </div>
    </div>
  );
}

export default App;