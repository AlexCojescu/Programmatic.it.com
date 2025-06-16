"use client"; // Must be the first line

import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyWidget = () => {
  return (
    <div>
      <InlineWidget url="https://calendly.com/alexcojescu/automation-strategy" />
    </div>
  );
};

export default CalendlyWidget;

