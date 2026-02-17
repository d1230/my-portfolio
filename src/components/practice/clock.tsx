import React, { useState, useEffect } from "react";
import "./clock.css";
export const Clock = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
  useEffect(() => {
    const interValid = setInterval(() =>{
        setTime(new Date().toLocaleDateString()+" "+new Date().toLocaleTimeString());
    },1000)
    return () => clearInterval(interValid);
  },[])
    

  return (
    <div className="clock">
      <h2>Current Time</h2>
      <div className="time">{time}</div>
    </div>
  );
};