// src/RainGrid.js
import React, { useState, useEffect } from "react";

const RainGrid = () => {
  const rows = 15; // Number of rows
  const cols = 20; // Number of columns
  const [grid, setGrid] = useState([]);
  const [canGenerateDrops, setCanGenerateDrops] = useState(true); // Controls drop generation

  const getRandomColor = () => {
    const colors = ["#ff5733", "#33c1ff", "#4caf50"]; // Red, Blue, Green
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Initialize the grid
  useEffect(() => {
    const initialGrid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        active: false,
        color: "black",
      }))
    );
    setGrid(initialGrid);
  }, []);

  // Function to update the grid with falling drops
  const updateGrid = () => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => row.map((cell) => ({ ...cell })));

      // Move drops down
      for (let y = rows - 1; y >= 0; y--) {
        for (let x = 0; x < cols; x++) {
          if (newGrid[y][x].active) {
            if (y < rows - 1 && !newGrid[y + 1][x].active) {
              // Move drop to the cell below
              newGrid[y + 1][x] = { active: true, color: newGrid[y][x].color };
              newGrid[y][x] = { active: false, color: "black" };
            } else if (y === rows - 1) {
              // Deactivate the drop when it reaches the bottom
              newGrid[y][x] = { active: false, color: "black" };
            }
          }
        }
      }

      // Add new consecutive drops at the top
      if (canGenerateDrops && Math.random() < 0.3) {
        const newDropColumn = Math.floor(Math.random() * cols); // Select a random column
        const dropColor = getRandomColor(); // Assign the same color to consecutive drops
        for (let i = 0; i < 5; i++) {
          const rowIndex = i;
          if (rowIndex < rows && !newGrid[rowIndex][newDropColumn].active) {
            newGrid[rowIndex][newDropColumn] = { active: true, color: dropColor };
          }
        }

        // Temporarily disable new drop generation
        setCanGenerateDrops(false);
        setTimeout(() => setCanGenerateDrops(true), 500); // 1-second delay
      }

      return newGrid;
    });
  };

  useEffect(() => {
    const interval = setInterval(updateGrid, 200);
    return () => clearInterval(interval);
  }, [canGenerateDrops]); // Include canGenerateDrops in dependency array

  return (
    <div className="flex justify-center items-center h-screen w-full bg-black">
      <table className="table-fixed border-collapse border border-gray-700">
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className={`w-8 h-8 border border-gray-800`}
                  style={{
                    backgroundColor: cell.active ? cell.color : "black",
                    transition: "background-color 200ms linear", // Smooth color transition
                  }}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RainGrid;
