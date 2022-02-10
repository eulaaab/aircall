import CallCard from "./CallCard.jsx";
import React, { useState, useEffect } from "react";

const CallList = (props) => {
  return (
    <div>
      {props.calls &&
        props.calls.map((call) => {
          console.log('call',call)
          return <CallCard call={call} />;
        })}
      {props.archived &&
        props.archived.map((call) => {
          return <CallCard calls={call} />;
        })}
    </div>
  );
};

export default CallList;
