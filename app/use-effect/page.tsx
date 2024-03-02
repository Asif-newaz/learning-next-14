"use client";

import { useState, useEffect } from "react";

interface DemoProps {
  //   count: number;
}

export default function Demo({}: DemoProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The code that we want to run
    console.log("The count is:", count);

    //Optional return function
  }, [count]); // The dependency array

  return (
    <div>
      <h1 className="text-center">Welcome to my counter</h1>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
