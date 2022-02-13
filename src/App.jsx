import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { getCalls } from "./utils/api";
import Header from "./components/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import CallList from "./components/CallList.jsx";
import regeneratorRuntime from "regenerator-runtime";
import CallDetails from "./components/CallDetails.jsx";

const App = () => {
  const [calls, setCalls] = useState([]);
  const [archivedCalls, setArchivedCalls] = useState([]);
  const [unArchivedCalls, setunArchivedCalls] = useState([]);

  useEffect(async () => {
    getCalls()
      .then((data) => {
        setCalls(data);
        const non_archived = [];
        const archived = [];
        if (data) {
          data.forEach((call) => {
            if (call.is_archived === true) {
              archived.push(call);
            } else {
              non_archived.push(call);
            }
          });
          setunArchivedCalls(non_archived);
          setArchivedCalls(archived);
        }
      })
      .catch((err) => console.log("Could got get data", err));
  }, []);
  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prev = usePrevious({ calls, archivedCalls, unArchivedCalls });

  useEffect(() => {
    if (prev) {
      if (prev.unArchivedCalls !== unArchivedCalls) {
        setunArchivedCalls(unArchivedCalls);
      }
    }
  }, [prev, unArchivedCalls]);
  useEffect(() => {
    if (prev) {
      if (prev.archivedCalls !== archivedCalls) {
        setArchivedCalls(archivedCalls);
      }
    }
  }, [prev, archivedCalls]);

  // useEffect(async () => {
  //   if (archivedCalls) {
  //     setArchivedCalls(archivedCalls)
  //   }
  // });

  //  useEffect(async () => {
  //    if (archivedCalls) {
  //      setArchivedCalls(archivedCalls);
  //    }
  //  });

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <CallList
                unarchived={unArchivedCalls}
                calls={calls}
                setCalls={setCalls}
                setArchivedCalls={setArchivedCalls}
                setunArchivedCalls={setunArchivedCalls}
              />
            }
          />
          <Route
            path="/archived"
            element={
              <CallList
                archived={archivedCalls}
                calls={calls}
                setCalls={setCalls}
                setArchivedCalls={setArchivedCalls}
                setunArchivedCalls={setunArchivedCalls}
              />
            }
          />
          <Route
            path="/details/:id"
            element={<CallDetails calls={calls} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
