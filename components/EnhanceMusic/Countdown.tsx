"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  hours: number;
  minutes: number;
  seconds: number;
};

interface Props {
  targetDate: string;
}

const Countdown: React.FC<Props> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  // ❗ start with null (avoid SSR mismatch)
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // ✅ run ONLY on client
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-lg">
      <span className="font-semibold text-sm">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-xs">{label}</span>
    </div>
  );

  // ❗ prevent hydration mismatch
  if (!timeLeft) return null;

  return (
    <div className="flex gap-4">
      <TimeBox value={timeLeft.hours} label="Hours" />
      <TimeBox value={timeLeft.minutes} label="Minutes" />
      <TimeBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;