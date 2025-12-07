'use client';

import React, { useState, useEffect } from 'react';

const TwentyOnePlus: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [birthDate, setBirthDate] = useState('');
  const [notRobot, setNotRobot] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const verified = localStorage.getItem('21plus_verified');
    if (!verified) setShowModal(true);
  }, []);

  const handleSubmit = () => {
    setError('');
    if (!birthDate) {
      setError('Please enter your birthdate.');
      return;
    }
    if (!notRobot) {
      setError('Please confirm you are not a robot.');
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    if (age >= 21) {
      localStorage.setItem('21plus_verified', 'true');
      setShowModal(false);
    } else {
      window.location.href = 'https://www.help.org/';
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 md:p-12 animate-fade-in">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
          Age Verification
        </h2>
        <p className="text-gray-600 text-center mb-6">
          You must be 21+ to enter Escos Green+.
        </p>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <div className="space-y-4">
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          />

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={notRobot}
              onChange={(e) => setNotRobot(e.target.checked)}
              className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span className="text-gray-700 font-medium">
              I am not a robot
            </span>
          </label>

          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white font-semibold hover:from-green-600 hover:via-green-700 hover:to-green-800 transition"
          >
            Enter
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">
          If you are under 21, you will be redirected.
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TwentyOnePlus;
