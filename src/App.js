import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from './components/About';
import Alert from "./components/Alert";
import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  useEffect(() => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [mode]);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route path="/textUtils-react/about" element={<About />} />
          <Route
            path="/textUtils-react"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
