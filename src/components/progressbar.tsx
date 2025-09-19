// src/components/ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
  step: number; // Aktueller Schritt von 1 bis 5
}

export default function ProgressBar({ step }: ProgressBarProps) {
  const progressPercentage = step * 20; // 5 Schritte = 20% pro Schritt

  return (
    <div className="w-full max-w-3xl mx-auto mt-6">
      {/* Weißer Rahmenbalken */}
      <div className="w-full h-4 bg-white rounded-full p-[2px] border border-gray-300">
        {/* Grüne Fortschrittsleiste */}
        <div
          className="h-full bg-[#0A988B] rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

