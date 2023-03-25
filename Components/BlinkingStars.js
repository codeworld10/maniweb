import { useEffect, useRef } from 'react';

const BlinkingStars = ({ count = 10 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let requestId;

    // Set up the canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Set up the stars
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 5 + 1,
        opacity: Math.random() * 0.5 + 0.5,
        direction: Math.random() < 0.5 ? -1 : 1,
      });
    }

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the stars
      stars.forEach(star => {
        context.beginPath();
        context.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        context.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        context.fill();

        // Update the star position
        star.x += star.speed * star.direction;

        // If the star goes off the screen, wrap it around to the other side
        if (star.x < 0) {
          star.x = canvas.width;
        } else if (star.x > canvas.width) {
          star.x = 0;
        }
      });

      requestId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [count]);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default BlinkingStars;
