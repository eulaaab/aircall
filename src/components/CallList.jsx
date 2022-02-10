import CallCard from "./CallCard.jsx";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CallContainer = styled.div`
  overflow: scroll;
  height: 624px;
  padding-top: 10px;
`;

const CallList = (props) => {
  return (
    <CallContainer>
      {props.calls &&
        props.calls.map((call) => {
          console.log("call", call);
          return <CallCard call={call} />;
        })}
      {props.archived &&
        props.archived.map((call) => {
          return <CallCard calls={call} />;
        })}
    </CallContainer>
  );
};

export default CallList;
