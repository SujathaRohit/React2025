import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const DarkModeToggle = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="toggle-btn">
      {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default DarkModeToggle;
