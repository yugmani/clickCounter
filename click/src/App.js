import { useState } from "react";
import Button from "./Button";
import "./App.css";

function App() {
  const [totalCounts, setTotalCounts] = useState(0);

  const incrementTotalCounts = () => {
    setTotalCounts(totalCounts + 1);
  };
  return (
    <div className="main">
      <h1>Click Counter</h1>
      <Button title="Click Me" total={incrementTotalCounts} />
      <Button title="Don't Click Me" total={incrementTotalCounts} />
      <h3>Total: {totalCounts}</h3>
    </div>
  );
}

export default App;
