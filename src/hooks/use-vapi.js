import { useState, useEffect } from 'react';

const useVapi = () => {
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(false);

  const toggleCall = () => {
    setIsSessionActive((prev) => !prev);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVolumeLevel(Math.random() * 10); // Simulate volume changes
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return { volumeLevel, isSessionActive, toggleCall };
};

export default useVapi;
