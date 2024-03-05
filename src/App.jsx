import { useState } from "react";
import { useEffect } from "react";

const app = () => {
  //Create new state
  const [advice, setAdvice] = useState("");
  //Create new state for counting the button click counting
  const [count, setCount] = useState(0);

  async function GetAdvice() {
    const res = await fetch("https://api.adviceSlip.com/advice");

    const data = await res.json();
    console.log(data);

    setAdvice(data.slip.advice);
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  }
  //create useEffect to load a device very first time
  useEffect(() => {
    GetAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={GetAdvice}>Get Advice</button>
      <Message message1={count} />
    </div>
  );
};

const Message = (props) => {
  return (
    <div>
      <h3>you have clicked the button {props.message1} times.</h3>
    </div>
  );
};
export default app;
