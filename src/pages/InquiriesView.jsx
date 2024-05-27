import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import { Select, Option, Button } from "@mui/joy";
import { MdOutlineMailOutline } from "react-icons/md";
import StatusChip from "../components/StatusChip";
import { developerTeams } from "../data/employee";
import Message from "../components/modals/Message";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { inquiryStatuses } from "../data/inquiries.js";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import profile from "../assets/profile.png";
import { Divider } from "@mui/joy";
import { IoCallOutline } from "react-icons/io5";
import { IoMailUnreadOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa6";
import DraftEditor from "../components/DraftEditor";
import { IoIosSend } from "react-icons/io";
import { LuForward } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const InquiriesView = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serializedObjectFromURL = queryParams.get("data");
  const data = JSON.parse(decodeURIComponent(serializedObjectFromURL));

  const navigate = useNavigate();
  const [openMessageModal, setOpenMessageModal] = useState(false);
  const [email, setEmail] = useState("empty");

  const formatDate = date => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(date).toLocaleDateString("en-GB", options);
  };

  function handleGoBack() {
    navigate(-1);
  }

  function handleSchedMeeting() {
    window.open("https://us05web.zoom.us/meeting/schedule", "_blank");
  }

  return (
    <div className="mx-4 md:mx-12 my-20 md:my-2">
      <div className="w-full lg:w-4/5 mx-auto mt-4">
        <div className="flex justify-between bg-white p-3 rounded-lg mb-4">
          <Tooltip
            title="Go Back"
            placement="bottom"
            TransitionComponent={Fade}
          >
            <div
              className="rounded-full p-4 cursor-pointer hover:bg-gray-100"
              onClick={handleGoBack}
            >
              <FaArrowLeft />
            </div>
          </Tooltip>

          <div className="flex gap-2">
            <Tooltip
              title="Mark as read"
              placement="bottom"
              TransitionComponent={Fade}
            >
              <div className="rounded-full p-4 cursor-pointer hover:bg-gray-100">
                <IoMailUnreadOutline size={20} />
              </div>
            </Tooltip>
            <Tooltip
              title="Schedule a call"
              placement="bottom"
              TransitionComponent={Fade}
            >
              <div
                onClick={handleSchedMeeting}
                className="rounded-full p-4 cursor-pointer hover:bg-gray-100"
              >
                <IoCallOutline size={20} />
              </div>
            </Tooltip>
            <Tooltip
              title="Delete message"
              placement="bottom"
              TransitionComponent={Fade}
            >
              <div className="rounded-full p-4 cursor-pointer hover:bg-gray-100">
                <AiOutlineDelete size={20} />
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between my-4">
            <div className="flex gap-4 ">
              <div>
                <img
                  src={profile}
                  className="h-12 w-12 self-center"
                  alt="Profile"
                />
              </div>
              <div>
                <p>
                  {data.name}
                </p>
                <p className="flex gap-1 text-sm text-gray-500">
                  <AiOutlineMail className="self-center" />
                  {data.email} | <IoLocationOutline className="self-center" />
                  {data.country}
                </p>
              </div>
            </div>
            <div className="flex flex-row md:flex-col my-4 md:my-0 gap-4 md:gap-0 ml-16">
              <p>
                {formatDate(Date.now())}
              </p>
              <p className="text-center">
                <StatusChip text={data.status} data={inquiryStatuses} />
              </p>
            </div>
          </div>
          <Divider />
          <div>
            <div className="bg-blue-50 p-6 rounded-xl my-4 w-fit">
              {data.message}
              <div className="mt-4">
                <div className="flex gap-2">
                  <p className="font-semibold"> Client Estimated Budget:</p>
                  <p>
                    {data.budget}
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="font-semibold"> Service:</p>
                  <p>
                    {data.service}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <DraftEditor />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <div className="flex gap-2 bg-primary p-2 px-3 rounded-full  text-white hover:opacity-70 cursor-pointer">
                <LuForward size={20} className="self-center" />
                Assign to
              </div>
              <div className="flex gap-2 bg-primary p-2 px-3  rounded-full  text-white hover:opacity-70 cursor-pointer">
                <IoIosSend size={20} className="self-center" />
                Reply
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiriesView;
