import React, { useState, useEffect } from "react";

function CountdownTimer({ milliseconds }) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [milliseconds]);

  function calculateTimeRemaining() {
    const now = Date.now();
    const futureDate = new Date(milliseconds);
    const timeDifference = futureDate - now;

    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const oneDayInMs = 1000 * 60 * 60 * 24;
    const oneHourInMs = 1000 * 60 * 60;
    const oneMinuteInMs = 1000 * 60;
    const oneSecondInMs = 1000;

    const days = Math.floor(timeDifference / oneDayInMs);
    let remainingMs = timeDifference % oneDayInMs;
    const hours = Math.floor(remainingMs / oneHourInMs);
    remainingMs = remainingMs % oneHourInMs;
    const minutes = Math.floor(remainingMs / oneMinuteInMs);
    remainingMs = remainingMs % oneMinuteInMs;
    const seconds = Math.floor(remainingMs / oneSecondInMs);
    return { days, hours, minutes, seconds };
  }

  return (
    <div className="font-color">
      {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m{" "}
      {timeRemaining.seconds}s
    </div>
  );
}

export default CountdownTimer;
