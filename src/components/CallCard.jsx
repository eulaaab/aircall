import React from "react";
import "../css/card.css";
import axios from "axios";
import { API_URL } from "../utils/api";
import regeneratorRuntime from "regenerator-runtime";
import { MdUnarchive, MdArchive } from "react-icons/md";
import {
  HiOutlinePhoneMissedCall,
  HiPhoneOutgoing,
  HiPhoneIncoming,
} from "react-icons/hi";
import { IoMdCall, IoIosEye } from "react-icons/io";
import moment from "moment";
import { Link } from "react-router-dom";

const CallCard = (props) => {
  const { call_type, created_at, from, id, to, is_archived } = props.call;

  async function archiveCall() {
    //if (calls !== undefined) {
    const updatedCalls = props.calls.map((call) => {
      //let newCalls = [];
      if (call.id == id && id !== undefined) {
        call.is_archived = !is_archived;
        return call;
      } else {
        return call;
      }
      // console.log('sda', newCalls)
      ///return newCalls;
    });

    const filterArchived = updatedCalls.filter((call) => {
      console.log("calll", call);
      return call.is_archived == true;
    });
    console.log("filter Archived", filterArchived);

    const filterUnarchived = updatedCalls.filter((call) => {
      return call.is_archived == false;
    });
    props.setArchivedCalls(filterArchived);
    props.setunArchivedCalls(filterUnarchived);
    console.log("filter Archived", filterArchived);

    console.log("updatedCall", updatedCalls);
    //props.setCalls(updatedCalls);
    let result = axios
      .post(`${API_URL}/activities/${id}`, {
        is_archived: !is_archived,
      })
      .then(function (response) {
        //setSTAte?
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    //setCalls(result);
  }

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
