import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors,setMeteors]=useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize=()=>{
        
    }
    // regenerate stars on resize for responsiveness
    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 4 + 1, // 1px – 4px
        x: Math.random() * 100, // %
        y: Math.random() * 100, // %
        opacity: Math.random() * 0.5 + 0.5, // 0.5 – 1
        animationDuration: Math.random() * 4 + 2, // 2s – 6s
      });
    }
    setStars(newStars);
  };


  const generateMeteors = () => {
    const numberOfMeteors=10;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // 1px – 4px
        x: Math.random() * 100, // %
        y: Math.random() * 20, // %
        delay: Math.random() * 15, // 0.5 – 1
        animationDuration: Math.random() * 3 + 3, // 2s – 6s
      });
    }
    setMeteors(newMeteors);
  };

  

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
            key={meteor.id}
            className="meteor animate-meteor"
            style={{
                width: meteor.size * 35+ "px",
                height: meteor.size + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: "0s"+ "s",
                animationDuration: meteor.animationDuration + "s",
            }}

        />
        ))}
    </div>
  );
};
