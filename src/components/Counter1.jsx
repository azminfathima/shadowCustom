import React from 'react';
import useCounter from './useCounter';  // Correct import of the custom hook

const Counter1 = () => {
  const [count, Increment, Decrement] = useCounter();  // Using the custom hook here

  return (
    <div className="counter">
      <h1>Counter 1</h1>
      <h2>{count}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default Counter1;
