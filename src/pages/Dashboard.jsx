import React from "react";
import DashboardCard from "../components/DashboardCard";
import { BiConversation } from "react-icons/bi";



const Dashboard = () => {
  return (
    <div className="my-28 md:my-16 mx-10 md:mx-16 ">
      <h1 className="text-2xl font-semibold mb-2 ">Dashboard</h1>
      <DashboardCard value={5} title={'Consultation'} icon={BiConversation}/>
    </div>
  );
};

export default Dashboard;
