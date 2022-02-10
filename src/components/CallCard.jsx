import React from "react";
import "../css/card.css";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import moment from "moment";

const CallCard = (props) => {
  const {
    call_type,
    created_at,
    direction,
    duration,
    from,
    id,
    is_archived,
    to,
    via,
  } = props.call;
  return (
    <div className="card-container">
      <p className="card-date">{moment(created_at).format("MMMM, D YYYY")}</p>
      <div className="card">
        <div className="left">
          {call_type === "answered" && (
            <span>
              <HiOutlinePhoneMissedCall />
            </span>
          )}
          {call_type === "missed" && (
            <span>
              <IoMdCall />
            </span>
          )}
        </div>
        <div className="middle">
          <p className="card-text">{from}</p>
          <p>{to !== null ? <span>tried to call on {to}</span> : ""}</p>
        </div>
        <div className="right">
          <p>{moment(created_at).format("LT")}</p>
        </div>
      </div>
    </div>
  );
};

export default CallCard;
