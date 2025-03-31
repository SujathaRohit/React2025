import { useState, useCallback } from "react";

const Child = ({ handleClick }) => {
  console.log("Child component re-rendered");
  return <button onClick={handleClick}>Click Me</button>;
};

const CallbackExample = () => {
  const [count, setCount] = useState(0);

  // ✅ Memoize handleClick so it doesn't get recreated on every render
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
      <Child handleClick={handleClick} />
    </div>
  );
};

export default CallbackExample;
