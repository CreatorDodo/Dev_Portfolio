import { useState, useEffect } from 'react';

function RainbowText({ children }: { children: React.ReactNode }) {
  const [hue, setHue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prevHue) => (prevHue + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="font-semibold transition-colors duration-300 ease-in-out"
      style={{ color: `hsl(${hue}, 100%, 50%)` }}
    >
      {children}
    </span>
  );
}

export default RainbowText;
