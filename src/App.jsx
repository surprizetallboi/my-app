import "./App.css";
// import { Button } from "./Button.jsx"
import { Circle } from "./circle.jsx"
import React, { useState } from "react";

function App() {
  const [isShrunk, setIsShrunk] = useState(false);

  return (
    <div className="App">
      <button className={isShrunk? "butt1" : "butt2"} onClick={ ()=> setIsShrunk(isShrunk => !isShrunk)}>Click to begin</button>
      <header className={isShrunk? "appHead1" : "appHead2"}>
        {/* <p>isShrunk: {isShrunk.toString()}</p> */}
        <h2 id="hello">hey, my name is</h2>
        <h1>CHRISTIAN DANIEL</h1>
        <h2 id="make">I make stuff and do things</h2>
      </header>
      <br />
      <br />
      <p className={isShrunk? "buttonText1" : "buttonText2"} >Press anywhere to begin</p>
      {/* <Button /> */}
      
      
      {/* <Circle /> */}
    </div>
  );
}

export default App;