import React from "react";
import { Modal, ModalDialog, Divider, Textarea, Button } from "@mui/joy";

const Message = (props) => {
  const { openModal, setOpenModal, title, email } = props;

  return (
    <Modal open={openModal} onClose={() => { setOpenModal(false) }}>
      <ModalDialog layout="center" variant="plain" className="w-1/3">
        <p>{title}</p>
        <Divider />
        <span className="flex gap-1">
          <p>Email:</p>
          <p className="text-gray-500">{email}</p>
        </span>
        <Textarea minRows={5}/>
        <Button className="w-fit">Send</Button>
      </ModalDialog>
    </Modal>
  )
}

export default Message;