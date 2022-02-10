import React from "react";
import "../css/card.css";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { IoMdCall, IoIosEye } from "react-icons/io";
import moment from "moment";
import { Link } from "react-router-dom";

const CallCard = (props) => {
  console.log("props", props);
  const { call_type, created_at, from, id, to } = props.call;

  return (
    <div className="card-container">
      <p className="card-date">{moment(created_at).format("MMMM, D YYYY")}</p>
      <div className="card">
        <div className="left">
          {call_type === "answered" && (
            <span>
              <IoMdCall />
            </span>
          )}
          {call_type === "missed" && (
            <span>
              <HiOutlinePhoneMissedCall />
            </span>
          )}
        </div>
        <div className="middle">
          <p className="card-text">{from}</p>
          <p>{to !== null ? <span>tried to call on {to}</span> : ""}</p>
        </div>
        <div className="right">
          <p>{moment(created_at).format("LT")}</p>
          <Link to={"/details/" + id}>
            <span>
              <IoIosEye />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallCard;
