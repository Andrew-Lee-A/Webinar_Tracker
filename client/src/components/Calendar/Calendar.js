import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Scheduler,
  AgendaView,
  TimelineView,
  DayView,
  WeekView,
  MonthView,
} from "@progress/kendo-react-scheduler";
import { sampleData, displayDate } from "./events-utc";

const Calendar = () => {
  return (
    <Scheduler data={sampleData} defaultDate={displayDate}>
      <AgendaView />
      <TimelineView />
      <DayView />
      <WeekView />
      <MonthView />
    </Scheduler>
  );
};

ReactDOM.render(<Calendar />, document.querySelector("my-app"));