import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [time, setTime] = useState(1);
  const timeRef = useRef();
  const [limit, setLimit] = useState(1);
  const [countDownDate, setCountDownDate] = useState(
    new Date().getTime() + time * 60 * 1000
  );
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state with timer values
      setTime(minutes + "m " + seconds + "s");

      // Set color red if timer is less than 2 minutes
      if (distance < limit * 15 * 1000) {
        timeRef.current.style.color = "#f71616";
      }

      // Set "EXPIRED" text if timer has expired
      if (distance < 0) {
        clearInterval(timer);
        setTime("");
      }
    }, 1000);

    // Clean up timer on component unmount
    return () => clearInterval(timer);
  }, [time]);

  // Reset timer on DOM click
  const handleTimerReset = () => {
    clearInterval(timer);
    setCountDownDate(new Date().getTime() + time * 60 * 1000)
  };

  return (
    <div>
      <div ref={timeRef} className="font-semibold text-lg rounded-lg">
        {time}
      </div>
      <button onClick={handleTimerReset}>Reset</button>
    </div>
  );
};

export default Timer;
