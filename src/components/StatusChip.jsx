import React from "react";
import { Chip } from "@mui/joy";

const StatusChip = ({ text, data }) => {
  let color, bgColor;

  data.forEach(element => {
    if (text.toLowerCase() === element.status.toLowerCase()) {
      color = element.color;
      bgColor = element.pastelColor;
    }
  });

  return (
    <Chip sx={{ backgroundColor: `${bgColor}`,/*  outline: `1px ${color} solid` */ }}>
      <p style={{ color: `${color}` }}>{text}</p>
    </Chip>
  )
}

export default StatusChip;

