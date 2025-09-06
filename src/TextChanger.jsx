import { useState, useEffect } from "react";

const TextChanger = () => {
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const dynamicTexts = ["Shivani", "Full Stack Developer", "UI/UX Designer"];
    const intervalId = setInterval(() => {
      const currentString = dynamicTexts[textIndex];
      
      if (isForward) {
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 >= currentString.length) {
          setIsForward(false);
        }
      } else {
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 < 0) {
          setIsForward(true);
          setTextIndex((prev) => (prev + 1) % dynamicTexts.length); // Cycle through texts
        }
      }

      setCurrentText(currentString.substring(0, charIndex + 1));
    }, 100);

    return () => clearInterval(intervalId);
  }, [charIndex, isForward, textIndex]);

  return (
    <div className="transition ease-in-out duration-300">
      Hi, I&apos;m {currentText}
    </div>
  );
};

export default TextChanger;
