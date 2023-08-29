import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <p>Weather App</p>
        <Weather defaultCity="Rio de janeiro" />
        <footer>
          This project was created by Adriana Cividini and is{" "}
          <a
            href="https://github.com/AdrianaCividini/weather-app-react/settings"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
