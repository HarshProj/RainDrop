import React from "react";
import RainDrop from "./RainDrop"
const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-indigo-900 to-black text-white">
      <div className="relative w-[80vw] border-4 border-purple-500 rounded-xl overflow-hidden shadow-xl">
        <div className="absolute top-0 left-0 w-full p-4 text-center text-xl font-semibold">
          <h1 className="text-2xl font-bold">Tetris Rain</h1>
        </div>
        <RainDrop />
      </div>
    </div>
  );
};

export default App;
