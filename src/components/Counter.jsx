import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  const decrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };
  return (
    <div className="custom-number-input h-10 w-32">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          onClick={decrement}
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
          name="custom-input-number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          data-action="increment"
          onClick={increment}
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}

export default Counter;
