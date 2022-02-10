import React from "react";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import moment from "moment";
import { IoCallOutline } from "react-icons/io";

const CallCard = (props) => {
  const {
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
    <div>
      <p>{from}</p>
      <p>{moment(created_at).format("MMMM, D YYYY")}</p>
      <p>{moment(created_at).format("LT")}</p>
      <p>tried to call on {to !== null ? to : ""}</p>
    </div>
  );
};

export default CallCard;
