import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getCalls } from "./utils/api";
import Header from "./components/Header.jsx";
import regeneratorRuntime from "regenerator-runtime";
import CallCard from "./components/CallCard.jsx";

const App = () => {
  const [calls, setCalls] = useState([]);
  const [archivedCalls, setArchivedCalls] = useState([]);

  useEffect(async () => {
    getCalls()
      .then((data) => {
        if (data) {
          data.forEach((call) => {
            const non_archived = [];
            const archived = [];
            if (call.is_archived === true) {
              non_archived.push(call);
            } else {
              archived.push(call);
            }
            setCalls(non_archived);
            setArchivedCalls(archived);
          });
        }
        //console.log(data);
      })
      .catch((err) => console.log("Could got get data", err));
  }, []);

  return (
    <div className="container">
      <Header />
      {calls &&
        calls.map((call, index) => {
          return <CallCard call={call} key={index} />;
        })}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
