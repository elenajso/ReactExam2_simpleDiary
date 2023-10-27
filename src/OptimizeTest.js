import React, { useState, useEffect } from "react";

// React.memo 는 기억해서 바뀔때만 동작 (watch) 
const TextView = React.memo(({ text }) => {
  useEffect(() => {
    console.log(`Update :: Text : ${text}`);
  })
  return <div>{text}</div>;
});

const CountView = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`Update :: Count : ${count}`);
  })
  return <div>{count}</div>
});

const OptimizeTest = () => {

  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>count</h2>
        <CountView count={count}/>
        <button onClick={() => setCount(count+1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <TextView text={text}/>
        <input value={text} onChange={(e)=>setText(e.target.value)}></input>
      </div>
    </div>
  );
};
    
    export default OptimizeTest;
