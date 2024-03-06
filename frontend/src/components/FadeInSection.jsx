import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger this once
    threshold: 0.1, // Visible amount of item shown in relation to root
  });

  const [scrollDir, setScrollDir] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDir("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDir("up");
      }

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDir);

    return () => {
      window.removeEventListener("scroll", updateScrollDir);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? `translateY(0)`
          : scrollDir === "down"
          ? `translateY(20px)`
          : `translateY(-20px)`,
        transition: "opacity 1s ease-out, transform 1s ease-out",
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
