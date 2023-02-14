import { useEffect, useState } from "react"
import "../style/time.css"
const Timer = ()=>{
    const [time, setTime] = useState(0);

    useEffect(() => {
      let interval;
      if (time > 0) {
        interval = setInterval(() => {
          setTime(time - 1);
        }, 1000);
      }
      return () => clearInterval(interval);
    }, [time]);
  
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        const input = parseInt(event.target.value);
        setTime(isNaN(input) ? 0 : Math.floor(input));
        event.target.value = "";
      }
    };

    return (
      <div id="container">
        <div>
        <h2>CountDown Timer</h2>
        </div>
        <div id="info">
        <input id="timeCount" onKeyDown={handleKeyDown}/>
        <div id="current-time">{time}</div>
        </div>
      </div>
    );
  }

export default Timer;