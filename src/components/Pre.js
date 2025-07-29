import React, { useState, useEffect } from "react";
import "./PreLoader.css";

function Pre(props) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  
  const loadingTexts = [
    "Initializing...",
    "Loading components...",
    "Compiling assets...",
    "Optimizing performance...",
    "Almost ready...",
    "Welcome!"
  ];

  useEffect(() => {
    if (props.load) {
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            // Set completion state when progress reaches 100%
            setTimeout(() => setIsCompleted(true), 100);
            setCurrentText("Welcome!");
            return 100;
          }
          return prev + 2.5; // Increment by 2.5 to reach 100% in exactly 1.2 seconds (40 steps)
        });
      }, 30); // 30ms intervals for smooth animation

      const textInterval = setInterval(() => {
        setCurrentText(loadingTexts[Math.floor(Math.random() * loadingTexts.length)]);
      }, 600); // Slower text changes for better readability

      return () => {
        clearInterval(progressInterval);
        clearInterval(textInterval);
      };
    }
  }, [props.load]);

  if (!props.load) {
    return null;
  }

  return (
    <div className={`modern-preloader ${isCompleted ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        {/* Animated Logo */}
        <div className="logo-container">
          <div className="code-symbol">
            <span className="bracket">&lt;</span>
            <span className="dev-text">DEV</span>
            <span className="bracket">/&gt;</span>
          </div>
          <div className="pulse-ring"></div>
        </div>

        {/* Loading Text */}
        <div className="loading-text">
          <span className="terminal-prompt">$</span>
          <span className="terminal-text">{currentText}</span>
          <span className="cursor">|</span>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className={`progress-text ${progress === 100 ? 'completed' : ''}`}>
            {progress}%{progress === 100 ? ' ✓' : ''}
          </div>
        </div>

        {/* Floating Particles */}
        <div className="particles">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pre;
