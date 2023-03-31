import "./App.css";
import { ReactComponent as ReactLogo } from "./logo.svg";
import React, { useState, useEffect } from "react";

function App() {
  const [alt, setAlt] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Enter") {
        setAlt(!alt);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [alt]);

  return (
    <div>
      <div id="banner-message" className={alt ? "alt" : ""}>
        <p>Hello React</p>
        <ReactLogo />
        <button onClick={() => setAlt(!alt)}>press Enter to Transform</button>
      </div>
    </div>
  );
}

export default App;
