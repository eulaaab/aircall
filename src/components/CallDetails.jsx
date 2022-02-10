import React, { useState, useEffect } from "react";
import { getCallDetails } from "../utils/api";
import { useParams } from "react-router";
import { HiArchive } from "react-icons/hi";
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
  const { id } = useParams();
  let call;
  if (id) {
    call = props.calls.find((call) => {
      return call.id == id;
    });
  }
  console.log("call", call);
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
        <div>{setCallType(call_type)}</div>
        <div className="divider"></div>
        <p className="card-text">
          Date: {moment(created_at).format("MMMM, D YYYY")}
        </p>
        <p className="card-text">Time: {moment(created_at).format("LT")}</p>
      </div>
      <div className="divider"></div>
      <div className="first">
        <div className="left">
          <p className="card-text">
            {direction === "inbound" ? <HiPhoneIncoming /> : <IoMdCall />}
          </p>
        </div>
        <div className="right">
          <p className="card-text">To: {to}</p>
          <p className="card-text">{duration} minutes</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="second">
        <p className="card-text">From: {from}</p>
        <p className="card-text">Via: {via}</p>
      </div>
      <div className="divider"></div>
      <div className="bottom">
        {is_archived ? (
          <span style={{ color: "red" }}>Archived</span>
        ) : (
          <span styled={{ color: "green" }}>Unarchived</span>
        )}
      </div>
    </div>
  );
};

export default CallDetails;
