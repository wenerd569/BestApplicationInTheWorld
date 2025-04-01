import { useEffect, useState } from "react";
import "./App.css";

const data = [
  { name: "Sashsa" },
  { name: "Grisha", distance: 10 },
  { name: "Lida" },
  { name: "Serg", message: "to yourself" },
  { name: "Sashsa" },
  { name: "Grisha", distance: 10 },
  { name: "Lida" },
  { name: "Serg", message: "to yourself" },
  { name: "Sashsa" },
  { name: "Grisha", distance: 10 },
  { name: "Lida" },
  { name: "Serg", message: "to yourself" },
  { name: "Sashsa" },
  { name: "Grisha", distance: 10 },
  { name: "Lida" },
  { name: "Serg", message: "to yourself" },
];

// const fetchData = () => {

// }

const w = 1200;
const h = 650;

const colors = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#F06292",
  "#7986CB",
];

const CardsContainer = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (() => {
      const newCards = [];

      for (let i = 0; i < data.length; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const width = Math.floor(Math.random() * 100) + 100;
        const height = Math.floor(Math.random() * 80) + 80;
        const left = Math.random() * (w - width);
        const top = Math.random() * (h - height);

        newCards.push({
          width,
          height,
          left,
          top,
          color,
          ...data[i],
        });

        setCards(newCards);
      }
    })();
  }, []);

  return (
    <div className="container" style={{ width: w, height: h }}>
      {cards.map((card) => (
        <div
          className="card"
          style={{
            width: `${card.width}px`,
            height: `${card.height}px`,
            backgroundColor: card.color,
            top: card.top,
            left: card.left,
          }}
        >
          <div style={{ fontWeight: "bold" }}>
            {card.name}: {card.distance ? card.distance : "???"} м от вас
          </div>
          <div>{card.message}</div>
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
