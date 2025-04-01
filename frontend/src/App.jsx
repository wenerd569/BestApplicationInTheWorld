import "./App.css";
import React from "react";
import CardsConteiner from "./CardsConteiner";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Map from "./Map";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <>
              <CardsConteiner />
              <Link to={"/map"}>
                <button
                  className="button"
                  style={{
                    position: "absolute",
                    right: "30px",
                    bottom: "30px",
                  }}
                >
                  На карту --{`>`}
                </button>
              </Link>
            </>
          }
        />
        <Route path="map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
