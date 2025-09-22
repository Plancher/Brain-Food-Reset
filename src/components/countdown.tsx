import React, { useState, useEffect } from "react";

type CountdownProps = {
  startDate: string;      // Startzeitpunkt
  durationHours: number;  // Dauer in Stunden
};

const Countdown: React.FC<CountdownProps> = ({ startDate, durationHours }) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const start = new Date(startDate).getTime();
    const end = start + durationHours * 60 * 60 * 1000;

    const updateTimer = () => {
      const now = Date.now();
      const diff = end - now;
      setTimeLeft(diff > 0 ? diff : 0);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [startDate, durationHours]);

  // Zeit umrechnen
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div
      className="fixed bottom-0 left-0 w-full text-white text-center text-lg font-bold py-3 shadow-lg"
      style={{ backgroundColor: "#0a978a" }}
    >
       100€ Coupon Code läuft ab in:    {days}d {hours}h {minutes}m {seconds}s ⏳
    </div>
  );
};

export default Countdown;
2