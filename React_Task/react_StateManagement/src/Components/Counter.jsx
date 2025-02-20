import React, { use } from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <>
    <div className='container'>
    <h2>React Counter</h2>
    <h4>Count : {count}</h4>
    <button className='success' onClick={()=> setCount(count => count+1)}>Increament</button>
    <button className='red' onClick={()=> setCount(count => (count > 0 ? count-1 : 0))}>Decreament</button>
    <button className='black' onClick={() => setCount(0)}>Reset</button>
    </div>
    </>
  );
};

export default Counter;
