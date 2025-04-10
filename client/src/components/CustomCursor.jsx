// components/CustomCursor.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveX = gsap.quickTo(cursorRef.current, "left", {
      duration: 0.3,
      ease: "power3",
    });
    const moveY = gsap.quickTo(cursorRef.current, "top", {
      duration: 0.3,
      ease: "power3",
    });

    const handleMouseMove = (e) => {
      moveX(e.clientX);
      moveY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
