import React from "react";

export const Circle = cir => {
      var circleStyle = {
        padding:10,
        margin:20,
        display:"inline-block",
        backgroundColor: circleColor,
        borderRadius: "50%",
        width:100,
        height:100,
      };
      return (
        <div style={circleStyle}>
        </div>
      );
  };

  const circleColor = ["#ffffff"];