import React from "react";
import { Card } from "@mui/joy";
const DashboardCard = ( { value, title, icon: Icon } ) => {

  return (
    <Card className="w-fit shadow p-0 overflow-hidden hover:scale-105 hover:cursor-pointer hover:shadow-xl">
      <div className="p-4">
        <div className="flex justify-around">
          <span className="bg-blue-200 p-2 rounded-full inline-block h-fit">
            <Icon size={38} />
          </span>
          <span className="flex flex-col gap-2">
            <p className="text-right font-semibold text-4xl">{value}</p>
            <p className="font-semibold text-xl text-gray-500 text-center">{title}</p>
          </span>
        </div>
      </div>
      <div className="bg-blue-500 w-full h-2"></div>
    </Card>
  )
}

export default DashboardCard; 