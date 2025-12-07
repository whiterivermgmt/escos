"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Event = {
  date: number; // day of month
  title: string;
  color: string; // Tailwind color class
  time: string;
  description: string;
};

const events: Event[] = [
  {
    date: 3,
    title: "Christmas Music Special",
    color: "bg-red-500",
    time: "6:00 PM",
    description: "Special holiday music lineup featuring local artists.",
  },
  {
    date: 7,
    title: "Local Band Spotlight",
    color: "bg-green-500",
    time: "7:30 PM",
    description: "Highlighting a talented local band live on air.",
  },
  {
    date: 12,
    title: "Giveaway Event",
    color: "bg-blue-500",
    time: "5:00 PM",
    description: "Enter for a chance to win exclusive prizes.",
  },
  {
    date: 18,
    title: "Charity Drive",
    color: "bg-yellow-500",
    time: "All Day",
    description: "Join us to support the local community charity drive.",
  },
  {
    date: 25,
    title: "Holiday Special",
    color: "bg-purple-500",
    time: "6:00 PM",
    description: "A festive special show to celebrate the holidays.",
  },
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar: React.FC<{ month?: number; year?: number }> = ({
  month = new Date().getMonth(),
  year = new Date().getFullYear(),
}) => {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarCells: (number | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) calendarCells.push(null);
  for (let day = 1; day <= daysInMonth; day++) calendarCells.push(day);

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleCloseModal = () => setSelectedEvent(null);

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      {/* Month Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {new Date(year, month).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 text-center font-semibold text-sm md:text-base text-gray-700 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {calendarCells.map((day, index) => {
          const dayEvents = events.filter((e) => e.date === day);
          const isToday =
            day === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear();

          return (
            <motion.div
              key={index}
              whileHover={{ scale: day ? 1.03 : 1 }}
              className={`h-20 md:h-24 border rounded-lg p-2 flex flex-col justify-start items-center cursor-pointer transition ${
                isToday ? "border-blue-400" : "border-gray-200"
              }`}
              onClick={() => dayEvents.length && setSelectedEvent(dayEvents[0])}
            >
              <span className="font-semibold text-gray-900">{day}</span>

              {/* Event dots */}
              <div className="flex flex-col mt-1 gap-1">
                {dayEvents.map((event, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${event.color}`}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
                onClick={handleCloseModal}
              >
                &times;
              </button>
              <h3 className="text-lg font-bold mb-2">{selectedEvent.title}</h3>
              <p className="text-gray-600 mb-1">
                <strong>Time:</strong> {selectedEvent.time}
              </p>
              <p className="text-gray-700">{selectedEvent.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Calendar;
