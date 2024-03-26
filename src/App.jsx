import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./styles/app.css";
import About from "./pages/About";
import HomebuyingGuide from "./pages/HomebuyingGuide";
import HomebuyingResources from "./pages/HomebuyingResources";

// figure out how to fix this later

function App() {
  return (
    <>
      <div classname="App">
        <HashRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomebuyingGuide />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<HomebuyingResources />} />
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
