import CallCard from "./CallCard.jsx";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CallContainer = styled.div`
  overflow: scroll;
  height: 624px;
  padding-top: 10px;
`;

const CallList = (props) => {
  console.log("props", props);
  return (
    <CallContainer>
      {props.unarchived &&
        props.unarchived.map((call) => {
          return <CallCard call={call} key={call.id} />;
        })}
      {props.archived &&
        props.archived.map((call) => {
          return <CallCard call={call} key={call.id} />;
        })}
    </CallContainer>
  );
};

export default CallList;
