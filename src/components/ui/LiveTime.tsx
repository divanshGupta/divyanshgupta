"use client";

import { useState, useEffect } from "react";

export default function LiveTime() {
  const [hours, setHours] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [showSemicolon, setShowSemicolon] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      // Split time into hours and minutes, handling both "1:30 PM" and "11:30 PM" formats
      const [time, period] = timeString.split(" ");
      const [hourPart, minutePart] = time.split(":");

      setHours(`${hourPart}`);
      setMinutes(`${minutePart} ${period}`);
    };

    // Update time immediately
    updateTime();

    // Update time every second
    const timeInterval = setInterval(updateTime, 1000);

    // Blink semicolon every second
    const blinkInterval = setInterval(() => {
      setShowSemicolon((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <p className="fixed top-6 right-6 font-medium tracking-tight">
      <span className="pr-px">Los Angeles, CA {hours}</span>
      <span className="pr-px" style={{ opacity: showSemicolon ? 1 : 0 }}>
        :
      </span>
      <span>{minutes}</span>
    </p>
  );
}
