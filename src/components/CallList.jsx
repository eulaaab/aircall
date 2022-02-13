import CallCard from "./CallCard.jsx";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import regeneratorRuntime from "regenerator-runtime";

const CallContainer = styled.div`
  overflow: scroll;
  height: 624px;
  padding-top: 10px;
`;

const CallList = (props) => {
  return (
    <CallContainer>
      {props.unarchived &&
        props.unarchived.map((call) => {
          return (
            <CallCard
              call={call}
              key={call.id}
              calls={props.calls}
              setCalls={props.setCalls}
              setArchivedCalls={props.setArchivedCalls}
              setunArchivedCalls={props.setunArchivedCalls}
            />
          );
        })}
      {props.archived &&
        props.archived.map((call) => {
          return (
            <CallCard
              call={call}
              key={call.id}
              calls={props.calls}
              setCalls={props.setCalls}
              setArchivedCalls={props.setArchivedCalls}
              setunArchivedCalls={props.setunArchivedCalls}
            />
          );
        })}
    </CallContainer>
  );
};

export default CallList;
