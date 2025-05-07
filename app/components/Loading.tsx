"use client"

import React, { useEffect, useState } from 'react'

const [isLoading, setIsLoading] = useState(true);

// Loading
useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 2000); // Simule un chargement de 2 secondes
  return () => clearTimeout(timer);
}, []);



const Loading = () => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="text-center">
          <div className="loader mb-4"></div>
        </div>
      </div>
    );
  }
}

export default Loading