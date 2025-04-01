import "./App.css";
import React from "react";
import CardsConteiner from "./CardsConteiner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Map = () => {
  return <img src="../public/RussiaMap.png" className="img" />;
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
