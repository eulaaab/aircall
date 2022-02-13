import React, { useState, useEffect } from "react";
import { updateCall } from "../utils/api";
import { useParams } from "react-router";
import { HiArchive } from "react-icons/hi";
import { MdUnarchive, MdArchive } from "react-icons/md";
import axios from "axios";
import {
  HiOutlinePhoneMissedCall,
  HiOutlinePhone,
  HiMailOpen,
  HiPhoneIncoming,
} from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import regeneratorRuntime from "regenerator-runtime";
import moment from "moment";
import "../css/details.css";

const CallDetails = (props) => {
 // const [newCall, setNewCall] = useState(null);
  const { id } = useParams();
  const { setCalls, calls, archiveCall } = props;
  let call;
  if (id) {
    call = props.calls.find((call) => {
      return call.id == id;
    });
  }

  const {
    call_type,
    created_at,
    direction,
    duration,
    from,
    is_archived,
    to,
    via,
  } = call;

  const setCallType = (type) => {
    switch (type) {
      case type == "missed":
        return <HiOutlinePhoneMissedCall className="type" />;
        break;
      case type == "answered":
        return <HiOutlinePhone className="type" />;
        break;
      case type == "voicemail":
        return <HiMailOpen className="type" />;
        break;
      default:
        return <HiMailOpen />;
    }
  };
  return (
    <div className="card details">
      <div className="top">
        <div className="left">
          <div>{setCallType(call_type)}</div>
        </div>
        <div className="right">
          <p className="card-text">
            Date: {moment(created_at).format("MMMM, D YYYY")}
          </p>
          <p className="card-text">Time: {moment(created_at).format("LT")}</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="middle">
        <div className="left">
          <p className="card-text">
            {direction === "inbound" ? <HiPhoneIncoming /> : <IoMdCall />}
          </p>
        </div>
        <div className="right">
          <p className="card-text">To: {to}</p>
          <p className="card-text">Duration: {duration} minutes</p>
          <p className="card-text">From: {from}</p>
          <p className="card-text">Via: {via}</p>
        </div>
      </div>
      <div className="bottom">
        <button onClick={archiveCall}>
          {is_archived === true && (
            <span style={{ color: "red" }}>
              <MdArchive style={{ color: "red" }} />
              Archived
            </span>
          )}
          {is_archived == false && (
            <span styled={{ color: "green" }}>
              <MdUnarchive styled={{ color: "green" }} />
              Unarchived
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default CallDetails;
