import React from "react";

export default function Form() {
  async function weather() {
    let pos = document.getElementById("box1").value;
    var date = new Date();
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const url = `http://api.weatherapi.com/v1/current.json?key=45bf23bd21564ca8912202617241201&q=${pos}&aqi=no`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.current.temp_c);
      document.getElementById("temp").innerHTML = data.current.temp_c + "℃";
      document.getElementById("type1").innerHTML =
        "Wind: " + data.current.wind_kph + "km/h23";
      document.getElementById("type2").innerHTML =
        "Pressure: " + data.current.pressure_mb;
      document.getElementById("type3").innerHTML =
        "Feels Like: " + data.current.feelslike_c + "℃";
      document.getElementById("day").innerHTML = "," + dayNames[date.getDay()];
      document.getElementById(
        "img"
      ).innerHTML = `<img src="${data.current.condition.icon}" alt="..." id="img">`;
      document.getElementById("quality").innerHTML =
        data.current.condition.text;
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <div className="container my-5 col-md-4">
        <div className="mb-3">
          <label for="box1" className="form-label">
            Enter Country:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="box1"
            aria-describedby="emailHelp"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          id="submit"
          onClick={weather}
        >
          Get Weather
        </button>
        <div className="container my-3 p-5">
          <span id="img"></span>
          <span className="temp fs-5" id="temp">
            00
          </span>
          <p className="type1" id="type1">
            Wind: 0
          </p>
          <p className="type2" id="type2">
            Pressure: 00
          </p>
          <p className="type3" id="type3">
            Feels Like: 0 km/h23
          </p>
          <p className="float-end" id="day">
            Monday
          </p>
          <p className="float-end" id="quality">
            Sunny,
          </p>
        </div>
      </div>
    </div>
  );
}
