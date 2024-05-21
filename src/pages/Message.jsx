import React, { useState } from 'react';
import DraftEditor from '../components/DraftEditor';
import { Divider, Button } from '@mui/joy';

const Message = () => {

  return (
    <div className="my-28 md:my-16 mx-10 md:mx-16 ">
      <h1 className="text-2xl font-semibold mb-2 ">Message</h1>
      <Divider className="mb-4"/>
      <div className='bg-white rounded-md shadow-lg p-4 flex flex-col gap-4'>
        <DraftEditor/>
        <div className='flex justify-end'>
            <Button className='w-fit'>Sent</Button>
        </div>
      </div>
    </div>
  );
};

export default Message;