import React from "react";
import "../css/card.css";
import axios from "axios";
import { API_URL } from "../utils/api";
import regeneratorRuntime from "regenerator-runtime";
import { MdUnarchive, MdArchive } from "react-icons/md";
import { HiPhoneIncoming } from "react-icons/hi";

import { IoMdCall, IoIosEye } from "react-icons/io";
import moment from "moment";
import { Link } from "react-router-dom";

const CallCard = (props) => {
  const { call_type, created_at, from, id, to, is_archived, direction } =
    props.call;

  async function archiveCall() {
    const updatedCalls = props.calls.map((call) => {
      if (call.id == id && id !== undefined) {
        call.is_archived = !is_archived;
        return call;
      } else {
        return call;
      }
    });

    const filterArchived = updatedCalls.filter((call) => {
      return call.is_archived == true;
    });

    const filterUnarchived = updatedCalls.filter((call) => {
      return call.is_archived == false;
    });
    props.setArchivedCalls(filterArchived);
    props.setunArchivedCalls(filterUnarchived);

    let result = axios
      .post(`${API_URL}/activities/${id}`, {
        is_archived: !is_archived,
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="card-container">
      <p className="card-date">{moment(created_at).format("MMMM, D YYYY")}</p>
      <div className="call-card">
        <div className="card-left">
          {direction === "inbound" ? (
            <HiPhoneIncoming className="direction" />
          ) : (
            <IoMdCall className="direction" />
          )}
        </div>
        <div className="card-middle">
          <p className="card-text margin-bottom bold">{from}</p>
          <p className="card-text margin-bottom">
            {to !== null ? <span>tried to call on {to}</span> : <span>phoned</span>}
          </p>
          <button
            type="button"
            className="btn btn-light btn-style"
            onClick={archiveCall}
          >
            {is_archived === true && (
              <span
                style={{
                  color: "red",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MdArchive style={{ color: "red" }} />
                <p className="card-text">Archived</p>
              </span>
            )}
            {is_archived == false && (
              <span
                style={{
                  color: "green",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MdUnarchive styled={{ color: "green" }} />
                <p className="card-text">Unarchived</p>
              </span>
            )}
          </button>
        </div>
        <div className="card-right">
          <p>{moment(created_at).format("LT")}</p>
          <Link to={"/details/" + id} className="details-link">
            <IoIosEye />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallCard;
