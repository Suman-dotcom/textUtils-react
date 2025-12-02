import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from './components/About';
import Alert from "./components/Alert";
import React, { useState, useEffect } from "react";

import {
BrowserRouter as Router,
  Routes,  
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // default = light
  const [alert, setAlert]= useState(null)

  const showAlert=(message, type)=>{
        setAlert({
          msg:message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
          
        }, 1500);
  }

  // FIX: Apply body color based on mode correctly
  useEffect(() => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      // document.title='textUtis-dark mode';
      // setAlert("dark mode has enabled","success");
     
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      // document.title='textUtis-light mode';
      // sAlert("light mode has enabled","success");
    }
  }, [mode]); // runs ONLY when mode changes

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("darkmode has enabled", "success");
    } else {
      setMode("light");
      showAlert("lightmode has enabled", "success");
    }
  };

  return (
    <><Router>
  <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />

  <div className="container my-3">
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
    </Routes>
  </div>
</Router>

    </>
  );
}

export default App;
