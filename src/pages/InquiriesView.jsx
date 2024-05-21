import { React, useState } from "react";
import { useParams } from "react-router-dom";
import { Divider, Select, Option, Button } from "@mui/joy";
import { MdOutlineMailOutline } from "react-icons/md";
import { inquiriesDummyData } from "../data/inquiries";
import StatusChip from "../components/StatusChip";
import { teams } from "../data/employee";
import Message from "../components/modals/Message";
import { useNavigate } from "react-router-dom";

const InquiriesView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [openMessageModal, setOpenMessageModal] = useState(false);
  const [email, setEmail] = useState("empty");
  const getInquiryById = (id) => {
    return inquiriesDummyData.find(inquiry => inquiry.id === id);
  }

  const inquiry = getInquiryById(id);

  if (!inquiry) {
    return (
      <div className="my-28 md:my-16 mx-10 md:mx-16 ">
        <h1 className="text-2xl font-semibold mb-2 ">Details</h1>
        <Divider />
        <p>Inquiry not found</p>
      </div>
    );
  }

  const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-GB', options);
  };

  return (
    <div className="my-28 md:my-16 mx-10 md:mx-16">
      <h1 className="text-2xl font-semibold mb-2">Inquiry Details</h1>
      <Divider />
      <div className="mt-4 p-4 shadow-md bg-white rounded-lg">
        <div className="mb-4 flex items-center">
          <StatusChip text={inquiry.status} />
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">{inquiry.name}</h2>
            <h2 className="text-xl font-semibold">{formatDate(Date.now())}</h2>
          </div>
          <p className="text-gray-600">{inquiry.email}</p>

          <div className="mt-4">
            <div className="text-gray-700">
              <p><strong>Country:</strong> {inquiry.country}</p>
              <p><strong>Budget:</strong> {inquiry.budget}</p>
              <p><strong>Service:</strong> {inquiry.service.join(', ')}</p>
              <p><strong>Message:</strong> {inquiry.message}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 shadow-md bg-white rounded-lg flex justify-between">
        <div className="flex items-end gap-2">
          <p><strong>Assigned Team:</strong></p>
          {
            inquiry.status === 'New'
              ? <div className="flex gap-2">
                <Select placeholder='Choose Team...' className="w-60">
                  {
                    teams.map((employee, index) => {
                      return (
                        <Option key={index} value={employee}>{employee}</Option>
                      )
                    })
                  }
                </Select>
                <Button className="w-fit">Select</Button>
              </div>
              : <p>{inquiry.team}</p>
          }
        </div>
        <Button sx={{ backgroundColor: 'navy' }} onClick={() => navigate(`/inquiries/message/${id}`)}>
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
