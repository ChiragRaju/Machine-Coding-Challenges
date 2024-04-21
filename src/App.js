import { useState } from "react";

const options = ["cricket", "football", "hockey"];
const days = ["weekday", "weekend"];

export default function App() {
  const [selectedGame, setSelectedGame] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const handleGameChange = (event) => {
    setSelectedGame(event.target.value);
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  return (
    <div className="App">
      <h1>Which game?</h1>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            value={option}
            onChange={handleGameChange}
            name="game"
          />
          {option}
        </label>
      ))}

      <h2>What type of day?</h2>
      {days.map((day, index) => (
        <label key={index}>
          <input
            type="radio"
            value={day}
            onChange={handleDayChange}
            name="day"
          />
          {day}
        </label>
      ))}
    </div>
  );
}
