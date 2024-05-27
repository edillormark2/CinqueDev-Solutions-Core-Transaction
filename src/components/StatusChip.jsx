import React from "react";
import { Chip } from "@mui/joy";

const StatusChip = ({ text, data }) => {
  let color, icon;

  data.forEach(element => {
    if (text.toLowerCase() === element.status.toLowerCase()) {
      color = element.color;
      icon = element.icon;
    }
  });

  return (
    <div className="flex items-start">
      <div className="flex gap-2" style={{ alignItems: "left" }}>
        <div style={{ color }} className="self-center">
          {icon}
        </div>
        {text}
      </div>
    </div>
  );
};

export default StatusChip;
