import React from "react";
import "./Button.css"

export class Button extends React.Component {
    notification() {
      alert('what the hell dude, not cool');
    }
  
    render() {
      return <button onClick={this.notification}>Please don't push this button</button>;
    }
  }