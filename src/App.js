import React, { useState } from "react";
import "./App.css";

function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="App gradient-background">
      <h1>Date Counter</h1>
      <div className="main-block">
        <div className="block">
          <button className="substract" onClick={() => setStep((s) => s - 1)}>
            -
          </button>
          <span style={{ margin: "0 12px" }}>Step: {step}</span>
          <button className="add" onClick={() => setStep((s) => s + 1)}>
            +
          </button>
        </div>
        <div className="block">
          <button
            className="substract"
            onClick={() => setCount((c) => c - step)}
          >
            -
          </button>
          <span style={{ margin: "0 12px" }}>Count: {count}</span>
          <button className="add" onClick={() => setCount((c) => c + step)}>
            +
          </button>
        </div>
      </div>

      <div style={{ margin: "12px 0" }}>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} ${count > 1 ? "days " : "day "} from today is `
            : `${Math.abs(count)} ${count < -1 ? "days " : "day "} ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}

export default App;
