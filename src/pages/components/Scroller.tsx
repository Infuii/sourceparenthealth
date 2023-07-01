import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function Scroller() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollProgress(
        (window.scrollY /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
          100
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="fixed z-50 h-2 w-full bg-black"
      initial={{ width: 0 }}
      animate={{ width: `${scrollProgress}%` }}
    />
  );
}
