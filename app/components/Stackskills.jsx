"use client";
import React from "react";

export default function Stackskills() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-80">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Frontend</h3>
          <p className="text-gray-600">React, Next.js, Tailwind CSS</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-80">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Backend</h3>
          <p className="text-gray-600">Node.js, Express, MongoDB</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-80">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">DevOps2asdadasdasdas</h3>
          <p className="text-gray-600">Docker, CI/CD, AWS</p>
        </div>
      </div>
    </div>
  );
}
