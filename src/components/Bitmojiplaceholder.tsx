
import React from 'react';

// This component renders a placeholder bitmoji until we have a real image
const BitmojiPlaceholder = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="50" cy="35" r="20" fill="#FFD8BE" />
        <circle cx="43" cy="32" r="3" fill="#333" />
        <circle cx="57" cy="32" r="3" fill="#333" />
        <path d="M 45 42 Q 50 47 55 42" stroke="#333" strokeWidth="1.5" fill="none" />
        <path d="M 30 35 Q 35 25 45 27" stroke="#333" strokeWidth="1.5" fill="none" />
        <path d="M 70 35 Q 65 25 55 27" stroke="#333" strokeWidth="1.5" fill="none" />
        <path d="M 40 60 Q 50 70 60 60 Q 70 85 50 90 Q 30 85 40 60" fill="#9C59D1" />
        <path d="M 50 55 Q 35 55 35 70 L 35 90 L 65 90 L 65 70 Q 65 55 50 55" fill="#9C59D1" />
        <path d="M 35 70 L 20 90" stroke="#9C59D1" strokeWidth="8" />
        <path d="M 65 70 L 80 90" stroke="#9C59D1" strokeWidth="8" />
        <path d="M 45 69 L 55 69" stroke="#FFD8BE" strokeWidth="2" />
        <circle cx="40" cy="65" r="1" fill="#333" />
        <circle cx="60" cy="65" r="1" fill="#333" />
      </svg>
    </div>
  );
};

export default BitmojiPlaceholder;
