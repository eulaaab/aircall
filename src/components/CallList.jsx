import CallCard from "./CallCard.jsx";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import regeneratorRuntime from "regenerator-runtime";

export const CallContainer = styled.div`
  padding-top: 10px;
  scroll-behavior: smooth;
  overflow: scroll;
  height: 85%;
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
