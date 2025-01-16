import React, { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const nextBirthday = new Date("2026-02-08");
    const now = new Date();
    const difference = nextBirthday - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center bg-pink-100 p-4 rounded-md my-6">
      <h2 className="text-lg font-bold text-pink-600">
        Prochain Anniversaire :
      </h2>
      <p className="text-gray-700">
        {timeLeft.days} jours, {timeLeft.hours} heures, {timeLeft.minutes}{" "}
        minutes, {timeLeft.seconds} secondes
      </p>
    </div>
  );
};

export default Countdown;
