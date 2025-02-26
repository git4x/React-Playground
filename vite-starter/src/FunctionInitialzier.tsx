import { useState } from 'react'

export function FunctionInitialzier() {

    const initFunc = () => {
        console.log("Initializing state..." + Math.random());
        return 0;
    }

    // case 1
    // const [count, setCount] = useState(() => {
    //   console.log("Initializing state..." + Math.random());
    //   return 0;
    // });

    // case 2
    const [count, setCount] = useState(() => initFunc());

    // case 3,  this is bad
    //const [count, setCount] = useState(initFunc());
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }