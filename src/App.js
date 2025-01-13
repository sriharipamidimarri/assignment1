import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [grid, setGrid] = useState(
    Array(10).fill(Array(10).fill(""))
  );

  const handleCellChange = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  return (
    <div className="spreadsheet">
      {grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              className="cell"
              value={cell}
              onChange={(e) =>
                handleCellChange(rowIndex, colIndex, e.target.value)
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
