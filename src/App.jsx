import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getCalls } from "./utils/api";
import Header from "./components/Header.jsx";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import CallList from "./components/CallList.jsx";
import regeneratorRuntime from "regenerator-runtime";

const App = () => {
  const [calls, setCalls] = useState([]);
  const [archivedCalls, setArchivedCalls] = useState([]);

  useEffect(async () => {
    getCalls()
      .then((data) => {
        const non_archived = [];
        const archived = [];
        if (data) {
          console.log("data", data);
          data.forEach((call) => {
            if (call.is_archived === true) {
              archived.push(call);
            } else {
              non_archived.push(call);
            }
          });
          setCalls(non_archived);
          setArchivedCalls(archived);
        }
        //console.log(data);
      })
      .catch((err) => console.log("Could got get data", err));
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CallList calls={calls} />} />
          <Route
            path="/archived"
            element={<CallList archived={archivedCalls} />}
          />
        </Routes>

        {/* {calls &&
          calls.map((call, index) => {
            return <CallCard call={call} key={index} />;
          })} */}
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
