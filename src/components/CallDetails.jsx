import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { MdUnarchive, MdArchive } from "react-icons/md";
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
import { CallContainer } from "./CallList.jsx";

const CallDetails = (props) => {
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
    <CallContainer>
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
          {is_archived === true && (
            <span style={{ color: "red" }} className="is-archived">
              <MdArchive className="is-archived" />
              Archived
            </span>
          )}
          {is_archived == false && (
            <span style={{ color: "green" }} className="is-archived">
              <MdUnarchive />
              Unarchived
            </span>
          )}
        </div>
      </div>
    </CallContainer>
  );
};

export default CallDetails;
