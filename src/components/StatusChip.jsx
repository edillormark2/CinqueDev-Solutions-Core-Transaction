import React from "react";
import { Chip } from "@mui/joy";
import { inquiryStatusesPastel, inquiryStatuses } from "../data/inquiries";

const StatusChip = ({text}) => {

  let color;
  let bgColor;
  
  inquiryStatuses.forEach(element => {
    if (text.toLowerCase() == element.status.toLowerCase()) {
      color = element.color;
    }
  });
  
  inquiryStatusesPastel.forEach(element => {
    if (text.toLowerCase() == element.status.toLowerCase()) {
      bgColor = element.color;
    }
  });

  return (
      <Chip sx={{backgroundColor: `${bgColor}`,/*  outline: `1px ${color} solid` */}}>
        <p style={{ color: `${color}` }}>{text}</p>
      </Chip>
    )
}

export default StatusChip;

