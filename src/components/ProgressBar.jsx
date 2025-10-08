import { useEffect, useState } from "react";

const ProgressBar = ({ value, duration = 1500 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const stepTime = 16; // ~60fps
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setProgress(Math.floor(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div>
      {/* Bar container */}
      <div className="w-full h-2 overflow-hidden rounded-full bg-secondary/50">
        <div
          className="h-2 rounded bg-gradient-to-r from-primary via-primary/70 to-primary bg-[length:200px_100%]"
          style={{
            width: `${progress}%`,
            transition: "width 0.1s linear"
          }}
        />
      </div>
      {/* Percentage */}
      <div className="mt-1 text-right">
        <span className="text-sm text-muted-foreground">{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
