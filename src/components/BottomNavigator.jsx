import React from "react";
import { IoMdPerson } from "react-icons/io";
import { MdDialpad } from "react-icons/md";
import { HiPhoneIncoming } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { MdUndo } from "react-icons/md";
const BottomNavigator = () => {
  return (
    <div className="bottom-nav">
      <HiPhoneIncoming className="bottom-icon" />
      <IoMdPerson className="bottom-icon" />
      <MdDialpad className="bottom-center" />
      <MdSettings className="bottom-icon" />
      <MdUndo className="bottom-icon" />
    </div>
  );
};

export default BottomNavigator;
