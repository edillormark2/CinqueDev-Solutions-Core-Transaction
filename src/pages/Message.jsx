import React from 'react';
import DraftEditor from '../components/DraftEditor';
import { Button } from '@mui/joy';
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { useParams } from "react-router-dom";

const Message = () => {
  const { link } = useParams();

  const breadcrumbLinks = [
    { to: "/dashboard", label: "Home" },
    { to: `/${link.toLowerCase()}`, label: link },
    { to: "", label: "Message" }
  ];
  
  return (
    <div className="mx-4 md:mx-12 my-20 md:my-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-3xl font-semibold my-4">Message</div>
      </div>
      <Breadcrumbs links={breadcrumbLinks} />
      <div className='bg-white rounded-md shadow-lg mt-4 p-4  flex flex-col gap-4'>
        <DraftEditor/>
        <div className='flex justify-end'>
            <Button className='w-fit'>Sent</Button>
        </div>
      </div>
    </div>
  );
};

export default Message;