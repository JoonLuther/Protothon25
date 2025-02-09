"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Link from "next/link";

const events = [
  { id: "1", title: "TA Office Hours", start: "2025-02-10T09:00:00", end: "2025-02-10T10:30:00" },
  { id: "2", title: "Professor Office Hours", start: "2025-02-12T13:00:00", end: "2025-02-12T14:30:00" },
  { id: "3", title: "TA Office Hours", start: "2025-02-14T16:00:00", end: "2025-02-14T18:00:00" },
];

export default function BiologyCalendar() {
  const [currentEvents, setCurrentEvents] = useState(events);

  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mt-6 mb-4">Biology Calendar</h1>

      {/* Full-Screen Calendar (with scrolling inside) */}
      <div className="flex-1 overflow-y-auto px-4">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "askQuestionButton", // Replaces the "Today" button
          }}
          customButtons={{
            askQuestionButton: {
              text: "Ask a Question",
              click: function () {
                window.location.href = "/queue"; // Redirects to the question page
              },
            },
          }}
          initialView="timeGridWeek"
          editable={true}
          selectable={true}
          dayMaxEvents={true}
          weekends={true}
          initialEvents={currentEvents}
          height="100%"
          slotMinTime="08:00:00" // Start from 8 AM
          slotMaxTime="22:00:00" // End at 10 PM
          allDaySlot={false} // Remove the "All Day" section
        />
      </div>
    </div>
  );
}
