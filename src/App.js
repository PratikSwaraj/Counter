import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  const increase = () => {
    setValue((prev) => prev + 1);
  };
  const decrease = () => {
    setValue((prev) => prev - 1);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {value}</p>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </div>
  );
}
