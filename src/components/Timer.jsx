import { useState, useEffect } from "react";

export const Timer = () => {
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const deadline = new Date().getTime() + 3600000;
  const getTime = (deadline) => {
    const time = deadline - Date.now();
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>{`${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`}</>
  );
};
