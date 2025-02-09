import { useState } from "react";


const events = [
  { day: "Monday", start: "09:00", end: "10:30", title: "TA Office Hours" },
  { day: "Wednesday", start: "13:00", end: "14:30", title: "Professor Office Hours" },
  { day: "Friday", start: "16:00", end: "18:00", title: "TA Office Hours" }
];

const hours = Array.from({ length: 15 }, (_, i) => 8 + i);
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function WeeklyCalendar() {
  return (
    <div className="w-full p-4 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Weekly Calendar</h1>
      <div className="grid grid-cols-8 border">
        <div className="border p-2 font-bold">Time</div>
        {days.map((day) => (
          <div key={day} className="border p-2 font-bold text-center">{day}</div>
        ))}
        {hours.map((hour) => (
          <>
            <div key={hour} className="border p-2 text-center">{hour}:00</div>
            {days.map((day) => {
              const event = events.find(
                (e) => e.day === day && parseInt(e.start) === hour
              );
              return (
                <div key={`${day}-${hour}`} className="border p-2 h-16 relative">
                  {event && (
                    <div className="absolute inset-0 bg-blue-500 text-white p-1 text-sm rounded">
                      {event.title} ({event.start}-{event.end})
                    </div>
                  )}
                </div>
              );
            })}
          </>
        ))}
      </div>
    </div>
  );
}