import React, { useState, useEffect } from 'react';

const Rainfall = () => {
    const [dropColor, setDropColor] = useState("red");

    // Change drop color every 6 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setDropColor(dropColor === "red" ? "blue" : "red");
      }, 6000);
      return () => clearInterval(interval);
    }, [dropColor]);
  
    // Create random drops
    const createDrops = () => {
      const drops = [];
      for (let i = 0; i < 50; i++) {
        const xPosition = Math.floor(Math.random() * 100);  // Random position for X axis
        const dropHeight = Math.floor(Math.random() * 50) + 50;  // Random height for drops
        const delay = Math.random() * 5;  // Random delay for the animation
        drops.push(
          <div
            key={i}
            className="absolute w-1 h-10 rounded-md"
            style={{
              left: `${xPosition}%`,
              backgroundColor: dropColor === 'red' ? 'red' : 'blue',
              animation: `fall ${dropHeight / 10}s linear infinite ${delay}s`,
            }}
          />
        );
      }
      return drops;
    };
  
    return (
      <div className="relative w-full h-screen bg-black overflow-hidden">
        {createDrops()}
        <style>
          {`
            @keyframes fall {
              0% {
                transform: translateY(0);
              }
              100% {
                transform: translateY(100vh);
              }
            }
          `}
        </style>
      </div>  );
};

export default Rainfall;
