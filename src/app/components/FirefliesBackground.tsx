"use client";
import React, { useEffect, useState } from "react";

interface Firefly {
  id: number;
  top: string;
  left: string;
  animationDuration: string;
}

const createFirefly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

const FirefliesBackground = () => {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);
  useEffect(() => {
    const addFireflyPeriodically = () => {
      const newFirefly = createFirefly();
      setFireflies((currentFireflies) => [...currentFireflies, newFirefly]);
    };
    const interval = setInterval(addFireflyPeriodically, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full  overflow-hidden -z-10">
      {fireflies.map((firefly) => {
        return (
          <div
            key={firefly.id}
            className="absolute rounded-full bg-accent w-[20px] h-[20px] -z-50"
            style={{
              top: firefly.top,
              left: firefly.left,
              animation: `move ${firefly.animationDuration} infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default FirefliesBackground;
