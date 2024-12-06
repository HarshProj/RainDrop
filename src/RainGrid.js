import React, { useState, useEffect } from "react";

const RainGrid = () => {
  const rows = 15; // Number of rows
  const cols = 20; // Number of columns
  const [grid, setGrid] = useState([]);
  const [activeDrops, setActiveDrops] = useState(Array(cols).fill([])); // Track drops for each column
  
  const getRandomColor = () => {
      const colors = ["#ff5733", "#33c1ff", "#4caf50", "#f9c74f", "#f94144"];
      return colors[Math.floor(Math.random() * colors.length)];
    };
    const [currentColor, setCurrentColor] = useState(getRandomColor());

  useEffect(() => {
    // Initialize grid
    const initialGrid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        active: false,
        color: "black",
      }))
    );
    setGrid(initialGrid);

    // Set interval for color change every 3 seconds
    const colorChangeInterval = setInterval(() => {
      setCurrentColor(getRandomColor());
    }, 6000); // Change color every 3 seconds

    return () => clearInterval(colorChangeInterval); // Cleanup on unmount
  }, []);

  const updateGrid = () => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) =>
        row.map((cell) => ({ ...cell, active: false }))
      );

      activeDrops.forEach((columnDrops, colIndex) => {
        columnDrops.forEach((drop) => {
          if (drop.y < rows) {
            newGrid[drop.y][colIndex] = { active: true, color: drop.color };
          }
        });
      });

      return newGrid;
    });
  };

  const moveDrops = () => {
    setActiveDrops((prevDrops) =>
      prevDrops.map((columnDrops, colIndex) =>
        columnDrops
          .map((drop) => ({
            ...drop,
            y: drop.y + 1, // Move drop down by 1
          }))
          .filter((drop) => drop.y < rows) // Filter out drops that go out of bounds
      )
    );
  };

  const spawnNewDrop = () => {
    if (Math.random() < 0.4) {
      const randomColumn = Math.floor(Math.random() * cols);

      // Get the current stack of drops in the column
      const columnDrops = activeDrops[randomColumn];
      const yPos = columnDrops.length > 0 ? columnDrops[columnDrops.length - 1].y + 1 : 0; // Stack on top of the last drop

      const newDrop = {
        x: randomColumn,
        y: yPos,
        color: currentColor,
      };

      setActiveDrops((prevDrops) => {
        const newDrops = [...prevDrops];
        newDrops[randomColumn] = [...newDrops[randomColumn], newDrop]; // Add drop to the column
        return newDrops;
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveDrops(); // Move the drops down
      spawnNewDrop(); // Spawn new drops
      updateGrid(); // Update the grid with new positions
    }, 200); // 200ms interval for smooth animation

    return () => clearInterval(interval); // Cleanup on unmount
  }, [activeDrops, currentColor]); // Re-run effect when activeDrops or currentColor changes

  return (
    <div className="flex justify-center items-center h-full w-full bg-black">
      <table className="table-fixed border-collapse border border-gray-700">
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className={`w-8 h-8 border border-gray-800 ${
                    cell.active ? "transition-all duration-200 linear" : ""
                  }`}
                  style={{
                    backgroundColor: cell.active ? cell.color : "black",
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
