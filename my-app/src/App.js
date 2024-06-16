import './App.css';
import { useRef, useState } from "react";

function App() {
  const [time, setTime] = useState(null);
  const [now, setNow] = useState(null);

  const intervalRef = useRef(null);
  const handleStart = () => {
    setTime(Date.now());
    setNow(Date.now());
    intervalRef.current = setInterval(() => {
      setTime(Date.now());
    }, 10);
  };
  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  let timePassed = (time - now) / 1000;
  return (
    <>

      <h1 className='watch'>Stop Watch: {timePassed.toFixed(3)}</h1>
      <button className='start' onClick={handleStart}>Start</button>
      <button className='stop' onClick={handleStop}>Stop</button>

    </>
  );
}

export default App;
