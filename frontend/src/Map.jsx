import mapImage from "./assets/RussiaMap.png";
import "./reset.css";
import { Link } from "react-router-dom";

const Map = () => {
  const cursorStyle = {
    cursor: `url(cursors/metka.png) 16 16, auto`,
  };
  return (
    <>
      <h1 style={{ position: "absolute" }}>Выберете адресата</h1>
      <img src={mapImage} className="img" style={{ ...cursorStyle }} />
      <Link to={"/"}>
        <button
          className="button"
          style={{
            position: "absolute",
            left: "30px",
            bottom: "30px",
          }}
        >
          {`<`}--Back to future
        </button>
      </Link>
    </>
  );
};

export default Map;
