import React from "react";

let currTime = new Date().getHours();//2023,8,24,1
let greeting = " ";
let textColor = {};

if(currTime >= 1 && currTime < 12){
  greeting = "Good Morning";  // Good Morning
  textColor.color = 'Orange';
}else if (currTime >= 12 && currTime <= 19){
  greeting = "Good Afternoon" //Good Afternoon
  textColor.color = 'Green';
}else {
  greeting = " Good Night"; //Good Night
  textColor.color = 'Black';
}

const Heading = () => {
    return(
        <>
        <div>
        <h1 >Hello Sir, <span style={textColor}>{greeting} 😊</span></h1>
        </div>
        </>
    )
}

export default Heading;