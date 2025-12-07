"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomeGallery from "@/components/ui/HomeGallery";

interface Event {
  date: string;
  title: string;
  description: string;
  type?: "community" | "holiday" | "show" | "other";
}

// Community-focused events
const events: Event[] = [
  {
    date: "2025-12-08",
    title: "Live Music Night",
    description: "Join us for a local acoustic set in-store!",
    type: "show",
  },
  {
    date: "2025-12-10",
    title: "Community Art Workshop",
    description: "Local artists share their techniques in a fun workshop.",
    type: "community",
  },
  {
    date: "2025-12-12",
    title: "Green Gathering",
    description: "Meet community members and learn about sustainability initiatives.",
    type: "community",
  },
  {
    date: "2025-12-15",
    title: "Holiday Music Night",
    description: "Live festive music and community cheer.",
    type: "holiday",
  },
  {
    date: "2025-12-20",
    title: "Open Mic Evening",
    description: "Showcase your talent on stage in front of the community.",
    type: "show",
  },
  {
    date: "2025-12-24",
    title: "Winter Community Meetup",
    description: "Networking and live music to celebrate the season.",
    type: "holiday",
  },
  {
    date: "2025-12-31",
    title: "New Year Countdown",
    description: "Join us for a local countdown and live DJ set.",
    type: "show",
  },
  {
    date: "2026-01-01",
    title: "New Year Community Brunch",
    description: "Kick off the year with your neighbors and friends.",
    type: "community",
  },
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Event dot colors
const getEventColor = (type?: string) => {
  switch (type) {
    case "community":
      return "bg-green-500";
    case "show":
      return "bg-orange-400";
    case "holiday":
      return "bg-yellow-400";
    default:
      return "bg-gray-300";
  }
};

const EventsPage = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  const formattedDate = (day: number) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(
      2,
      "0"
    )}`;
  const todaysEvents = selectedDate
    ? events.filter((e) => e.date === selectedDate)
    : [];

  const prevMonth = () =>
    setCurrentMonth(new Date(year, month - 1, 1));
  const nextMonth = () =>
    setCurrentMonth(new Date(year, month + 1, 1));

  return (
    <main className="min-h-screen bg-green-50 py-12 px-4 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-10 text-green-700">
        Green Community Events
      </h1>

      {/* Calendar */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevMonth}
            className="text-green-700 font-bold px-5 py-2 rounded-lg hover:bg-green-100 transition"
          >
            {"<"}
          </button>
          <h2 className="text-2xl font-semibold">
            {currentMonth.toLocaleString("default", { month: "long" })}{" "}
            {year}
          </h2>
          <button
            onClick={nextMonth}
            className="text-green-700 font-bold px-5 py-2 rounded-lg hover:bg-green-100 transition"
          >
            {">"}
          </button>
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 text-center mb-2 font-semibold text-gray-700 text-lg">
          {DAYS.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-7 gap-2 text-center">
          {calendarDays.map((day, idx) => {
            if (!day) return <div key={idx} className="py-6"></div>;
            const dayDate = formattedDate(day);
            const dayEvents = events.filter((e) => e.date === dayDate);
            const isToday = formattedDate(today.getDate()) === dayDate;
            const isSelected = selectedDate === dayDate;

            return (
              <motion.div
                key={idx}
                onClick={() => setSelectedDate(dayDate)}
                whileHover={{ scale: 1.05 }}
                className={`py-6 flex flex-col items-center justify-center cursor-pointer rounded-lg transition
                  ${isSelected ? "bg-green-700 text-white font-bold" : "text-gray-800"}
                  ${isToday ? "border-2 border-green-700" : ""}`}
              >
                <span>{day}</span>
                <div className="flex flex-col mt-1 gap-1">
                  {dayEvents.map((e, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full ${getEventColor(
                        e.type
                      )}`}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Event Details */}
      <div className="w-full max-w-3xl mt-8">
        <AnimatePresence>
          {selectedDate && (
            <motion.div
              key={selectedDate}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-green-100 border border-green-700 rounded-2xl p-6 shadow-md mb-8"
            >
              {todaysEvents.length > 0 ? (
                todaysEvents.map((event, idx) => (
                  <div key={idx} className="mb-4 last:mb-0">
                    <h3 className="text-2xl font-bold text-green-700 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 text-center">
                  No events scheduled for this day.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Gallery / Visuals */}
      <HomeGallery />
    </main>
  );
};

export default EventsPage;
