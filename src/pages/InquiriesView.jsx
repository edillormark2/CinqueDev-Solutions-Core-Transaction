import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import { Divider, Select, Option, Button } from "@mui/joy";
import { MdOutlineMailOutline } from "react-icons/md";
import StatusChip from "../components/StatusChip";
import { developerTeams } from "../data/employee";
import Message from "../components/modals/Message";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";

const InquiriesView = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serializedObjectFromURL = queryParams.get('data');
  const data = JSON.parse(decodeURIComponent(serializedObjectFromURL));

  const navigate = useNavigate();
  const [openMessageModal, setOpenMessageModal] = useState(false);
  const [email, setEmail] = useState("empty");

  const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-GB', options);
  };

  const breadcrumbLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "/inquiries", label: "Inquiries" },
    { to: "", label: "Details" }
  ];

  return (
    <div className="mx-4 md:mx-12 my-20 md:my-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-3xl font-semibold my-4">Inquiries</div>
      </div>
      <Breadcrumbs links={breadcrumbLinks} />
      <div className="mt-4 p-4 shadow-md bg-white rounded-lg">
        <div className="mb-4 flex items-center">
          <StatusChip text={data.status} />
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">{data.name}</h2>
            <h2 className="text-xl font-semibold">{formatDate(Date.now())}</h2>
          </div>
          <p className="text-gray-600">{data.email}</p>

          <div className="mt-4">
            <div className="text-gray-700">
              <p><strong>Country:</strong> {data.country}</p>
              <p><strong>Budget:</strong> {data.budget}</p>
              <p><strong>Service:</strong> {data.service}</p>
              <p><strong>Message:</strong> {data.message}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 shadow-md bg-white rounded-lg flex justify-between">
        <div className="flex items-end gap-2">
          <p><strong>Assigned Team:</strong></p>
          {
            data.status === 'New'
              ? <div className="flex gap-2">
                <Select placeholder='Choose Team...' className="w-60">
                  {
                    developerTeams.map((employee, index) => {
                      return (
                        <Option key={index} value={employee}>{employee}</Option>
                      )
                    })
                  }
                </Select>
                <Button className="w-fit">Select</Button>
              </div>
              : <p>{data.team}</p>
          }
        </div>
        <Button sx={{ backgroundColor: 'navy' }} onClick={() => navigate(`/inquiries/message/${data.id}`)}>
          <MdOutlineMailOutline size={24} />
        </Button>
      </div>

      <div>
        <Message
          title="Reply"
          email={email}
          openModal={openMessageModal}
          setOpenModal={setOpenMessageModal}
        />
      </div>
    </div>
  );
};

export default InquiriesView;
