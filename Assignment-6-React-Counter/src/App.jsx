import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="app">

      <div className="counter-card">

        <div className="top-icon">⚡</div>

        <h1>Counter App</h1>

        <p className="subtitle">
          React State Management
        </p>

        <div className="counter-display">
          <p>Current Value</p>
          <h2>{count}</h2>
        </div>

        <div className="button-container">

          <button
            className="btn decrease"
            onClick={decrease}
          >
            −
          </button>

          <button
            className="btn reset"
            onClick={reset}
          >
            ↻ Reset
          </button>

          <button
            className="btn increase"
            onClick={increase}
          >
            +
          </button>

        </div>

        <div className="status">
          {count === 0
            ? "Ready to start 🚀"
            : count > 0
            ? "Count is increasing 📈"
            : "Count is decreasing 📉"}
        </div>

        <p className="footer">
          Built with React & useState
        </p>

      </div>

    </div>
  );
}

export default App;