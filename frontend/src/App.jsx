import "./App.css";
import React from "react";
import CardsConteiner from "./CardsConteiner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import mapImage from "./RussiaMap.png";

const Map = () => {
  return (
    <div>
      <img src={mapImage} className="img" />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" exact="true" element={<CardsConteiner />} />
        <Route path="map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
