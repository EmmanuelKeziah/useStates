import { useState } from "react";
const State = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [handleText, setHandleText] = useState("");
  const [showText, setShowText] = useState(false);
  const [counter, setCounter] = useState(0);
  const [counts, setCounts] = useState(1);
  const [items, setItems] = useState([]);
  const addItems = () => {
    setItems([...items, `Task ${counts}`]);
    setCounts(counts + 1);
  };
  const removeItem = (removeIndex) => {
    const newItems = items.filter((_, i) => i !== removeIndex);
    setItems(newItems);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex items-center flex-col gap-4 max-w-2xs bg-[#030712]  mx-auto text-white p-4 rounded-lg">
        <div className="p-4 max-w-[250px] bg-red-300 rounded-lg">
          <h1 className="text-black font-bold">TESTING CLICK BUTTON</h1>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-white text-black font-bold p-2 rounded"
          >
            Click Me
          </button>
          <p>
            You clicked{" "}
            <span className="text-purple-800 font-bold">{count}</span> times.
          </p>
        </div>

        {/* Toggle Betwen Light and Dark Mode */}
        <div className="bg-gray-700 p-4 rounded-lg">
          <h1 className="font-bold">TOGGLE LIGHT & DARK</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white text-black font-bold p-2 rounded"
          >
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>

        {/* Handle Text Input */}
        <div className="bg-red-500 p-4 rounded-lg max-w-[240px]">
          <input
            type="text"
            placeholder="Type something..."
            value={handleText}
            onChange={(e) => setHandleText(e.target.value)}
            className="bg-white text-black p-2 border-2 border-black rounded-lg"
          />
          <p>You typed: {handleText}</p>
        </div>

        {/* Show or Hide Text */}
        <div className="max-w-[250px] bg-blue-500 p-4 rounded-lg">
          <button onClick={() => setShowText(!showText)}>Toggle Text</button>
          {showText && <p>This text shows and hides...</p>}
        </div>

        {/* Increase and Decrease Toggle */}
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setCounter(counter + 1)}
            className="bg-green-800 rounded px-2 max-w-6"
          >
            +
          </button>
          <span>{counter}</span>
          <button
            onClick={() => setCounter(counter - 1)}
            className="bg-red-800 rounded px-2 max-w-6"
          >
            -
          </button>
        </div>
      </div>

      <div className="flex items-center flex-col gap-4 max-w-2xs bg-[#030712]  mx-auto text-white p-4 rounded-lg">
        {/* Adding Arrays or multiple items e.g products, lists */}
        <div className="p-4 max-w-[350px] bg-red-300 rounded-lg">
          <div className="flex flex-col gap-2">
            <button
              onClick={addItems}
              className="bg-white text-black font-bold p-2 rounded"
            >
              Add Item
            </button>
            <ul>
              {items.map((Task, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center bg-white text-black p-2 rounded"
                >
                  {Task}
                  <button
                    onClick={() => removeItem(i)}
                    className="bg-white text-black font-bold p-2 rounded"
                  >
                    Delete Item
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form Handling with Objects */}
        <form action="">
          <div className="bg-white text-black p-4 rounded-lg max-w-[350px] flex gap-3 flex-col">
            <input
              name="email"
              onChange={handleChange}
              value={formData.email}
              type="text"
              placeholder="Email"
              className="border-2 border-black rounded"
            />

            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="password"
              className="border-2 border-black rounded"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default State;
