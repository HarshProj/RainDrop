import React, { useState, useEffect } from "react";

const App = () => {
  const [dropColor, setDropColor] = useState("red");

  // Change drop color every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDropColor(dropColor === "red" ? "blue" : "red");
    }, 6000);
    return () => clearInterval(interval);
  }, [dropColor]);

  // Create random drops originating from the top row
  const createDrops = () => {
    const drops = [];
    for (let i = 0; i < 50; i++) {
      const xPosition = Math.floor(Math.random() * 20);  // Random position for X axis (0-19 for 20 columns)
      const dropHeight = Math.floor(Math.random() * 50) + 50;  // Random height for drops
      const delay = Math.random() * 5;  // Random delay for the animation
      drops.push(
        <div
          key={i}
          className="absolute w-5 h-5 rounded-md"
          style={{
            left: `${(100 / 20) * xPosition}%`, // Position within 20 columns
            top: "0%", // Always start from the top of the grid
            backgroundColor: dropColor === "red" ? "red" : "blue",
            animation: `fall ${dropHeight / 10}s linear infinite ${delay}s`,
          }}
        />
      );
    }
    return drops;
  };

  return (
    
    <div className="w-[70vh] h-[70vh] mt-20 mx-auto">

    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Grid layout with 15 rows and 20 columns, resembling a table */}
      <div className="grid grid-cols-20 grid-rows-15 gap-0">
        {/* Create visible grid boxes */}
        {Array.from({ length: 300 }).map((_, index) => (
          <div
          key={index}
            className="w-full h-full border border-gray-600"
            style={{ boxSizing: "border-box" }}
          ></div>
        ))}
      </div>

      {/* Generate drops */}
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
    </div>
                </div>
  );
};

export default App;
