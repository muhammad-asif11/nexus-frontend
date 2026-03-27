"use client";
import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const FlashSaleTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // ✅ create date ONLY on client
    const targetDate = new Date();
    targetDate.setHours(23, 59, 59, 999);

    // set initial value
    setTimeLeft(getTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => String(num).padStart(2, "0");

  // ✅ avoid rendering on server mismatch
  if (!timeLeft) return null;

  return (
    <div className="flex items-center gap-3 sm:gap-6">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item, i) => (
        <div key={i} className="grid grid-cols-1 place-items-start">
          <span className="text-xs text-gray-500">{item.label}</span>
          <p className="text-2xl sm:text-3xl font-bold tracking-widest">
            {format(item.value)}{" "}
            {i !== 3 && <span className="text-Narangi">:</span>}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FlashSaleTimer;