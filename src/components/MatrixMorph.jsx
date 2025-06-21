import { useEffect, useRef } from "react";
import gsap from "gsap";

const TARGET_TEXT = "Hi, I'm Anish";

const MatrixMorph = ({ onFinish, onSkip }) => {
  const canvasRef = useRef();
  const animationRef = useRef();
  const particlesRef = useRef([]);
  const morphingRef = useRef(false);
  const skipTimeoutRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const fontSize = 18;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()";
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops = new Array(columns).fill(1);

    const measureTargetPositions = () => {
      ctx.font = "24px monospace";
      const textWidth = ctx.measureText(TARGET_TEXT).width;
      const startX = window.innerWidth / 2 - textWidth / 2;
      const targetY = window.innerHeight / 2;

      return TARGET_TEXT.split("").map((char, i) => ({
        char,
        x: startX + ctx.measureText(TARGET_TEXT.slice(0, i)).width,
        y: targetY,
      }));
    };

    const targets = measureTargetPositions();

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (!morphingRef.current) {
        ctx.fillStyle = "#00FF41";
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = letters[Math.floor(Math.random() * letters.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;
          ctx.fillText(text, x, y);
          if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      } else {
        ctx.fillStyle = "#00FF88";
        ctx.font = "24px monospace";
        particlesRef.current.forEach((p) => {
          ctx.fillText(p.char, p.x, p.y);
        });
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    const startMorph = () => {
      morphingRef.current = true;

      particlesRef.current = targets.map((t) => ({
        char: t.char,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        targetX: t.x,
        targetY: t.y,
      }));

      gsap.to(particlesRef.current, {
        x: (i) => particlesRef.current[i].targetX,
        y: (i) => particlesRef.current[i].targetY,
        duration: 2,
        ease: "power2.out",
        stagger: 0.02,
      });

      setTimeout(() => {
        if (onFinish) onFinish();
      }, 3200);
    };

    animationRef.current = requestAnimationFrame(draw);
    const morphTimer = setTimeout(startMorph, 3000);
    skipTimeoutRef.current = setTimeout(() => {
      if (onFinish) onFinish();
    }, 7000); // total animation duration

    return () => {
      cancelAnimationFrame(animationRef.current);
      clearTimeout(morphTimer);
      clearTimeout(skipTimeoutRef.current); 
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [onFinish]);

  const handleSkip = () => {
    if (onSkip) onSkip();
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 z-50"
        style={{
          display: "block",
          background: "black",
          cursor: "pointer",
        }}
        onDoubleClick={handleSkip}
      />
      {/* Skip Button/Icon (top right corner) */}
      <button
        onClick={handleSkip}
        style={{
          position: "fixed",
          top: 24,
          right: 32,
          zIndex: 9999,
          background:  "transparent",
          border: "none",
          color: "#bbb",
          fontWeight: 500,
          fontSize: 16,
          borderRadius: 6,
          padding: "3px 12px",
          cursor: "pointer",
          boxShadow: "none",
          opacity: 0.7, // makes it even less visible
        transition: "opacity 0.2s"
        }}
        onMouseOver={e => (e.currentTarget.style.opacity = 1)}
        onMouseOut={e => (e.currentTarget.style.opacity = 0.7)}
        aria-label="Skip animation"
      >
        Skip
      </button>
    </>
  );
};

export default MatrixMorph;