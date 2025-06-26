import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(() => {
    const savedTime = sessionStorage.getItem("timeSpent");
    return savedTime ? parseInt(savedTime, 10) : 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        const updated = prev + 1;
        sessionStorage.setItem("timeSpent", updated);
        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center text-sm text-gray-600 dark:text-gray-300 my-2">
      ⏱ Time spent on site: {seconds} seconds
    </div>
  );
};

export default Timer;
