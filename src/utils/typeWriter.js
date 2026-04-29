import { useEffect, useState } from "react";

export function typeWriter(items, speed = 50, pause = 1000) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const current = items[index]?.wisdom || "";

  useEffect(() => {
    let timeout;

    if (charIndex < current.length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + current[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        /* reset to 0 when go to max */
        setIndex((prev) => (prev + 1) % items.length);
      }, pause);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, current, items.length, speed, pause]);

  return text;
}
