import { useState } from "react";
import "./App.css";
import State from "./components/reusable/State";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center h-screen bg-gray-900">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <State />
      </div>
    </>
  );
}

export default App;
