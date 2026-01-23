import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState('');

   // Add character to the input
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear the entire input
  const handleClear = () => {
    setInput('');
  };

  // Delete the last character (Backspace)
  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // Evaluate the expression safely
  const handleEqual = () => {
    try {
      const result = eval(input); // In real apps, use math.js
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // // Update input when user types directly
  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };

  return (
    <>
      <div className="container">
        <div className="display">
          <input type="text" value={input} readOnly />
        </div>
        <div className="buttons">
           <button onClick={handleClear} className="clear">AC</button>
        <button onClick={handleDelete} className="delete">DEL</button>
        <button onClick={() => handleClick('%')}>%</button>
        <button onClick={() => handleClick('/')}>÷</button>

        {/* Row 2 */}
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>×</button>

        {/* Row 3 */}
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>−</button>

        {/* Row 4 */}
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>

        {/* Row 5 */}
        <button onClick={() => handleClick('0')} className="zero">0</button>
        <button onClick={() => handleClick('00')} className="zero">00</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleEqual} className="equals">=</button>
        </div>
      </div>
    </>
  );
};

export default App;
