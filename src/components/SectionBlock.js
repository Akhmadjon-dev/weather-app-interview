import React, { useEffect } from "react";
import { API_KEY, CITY } from "../config/constants";
import Section from "../styles/components/section";
import axios from "../utils/axios";
function SectionBlock() {
  useEffect(() => {
    // (async () => {
    //   const res = await fetch(
    //     `api.openweathermap.org/data/2.5/weather?q=${1513886}&appid=${API_KEY}`
    //   );
    //   console.log(res, "response come");
    // })();
    // fetch(
    //   "https://community-open-weather-map.p.rapidapi.com/weather?q=London%252Cuk",
    //   {
    //     method: "GET",
    //     headers: {
    //       "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    //       "x-rapidapi-key": API_KEY,
    //     },
    //   }
    // )
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // axios
    //   .get(`/weather/hourly?q=${CITY}&appid=${API_KEY}`)
    //   .then((res) => {
    //     console.log(res, "response");
    //   })
    //   .catch((err) => console.log(err));

    const request = async (url) => {
      const response = await fetch(url);
      return response.ok ? response.json() : Promise.reject({ error: 500 });
    };

    (async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}`;
        const response = await request(url);
        console.log(response, "sldkasfjlsjklf");
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <Section>
      <div className="section__card-block">
        <div className="section__card">
          <h3 className="section__card-title">Sun</h3>
          <img
            src="https://cdn.pixabay.com/photo/2018/05/02/18/23/landscape-3369304__340.jpg"
            alt="weather"
            className="section__card-img"
          />
          <div>
            <span className="section__gradus section__gradus-light">15</span>
            <span className="section__gradus section__gradus-dark">15</span>
          </div>
        </div>
        <div className="section__card">
          <h3 className="section__card-title">Sun</h3>
          <img
            src="https://cdn.pixabay.com/photo/2018/05/02/18/23/landscape-3369304__340.jpg"
            alt="weather"
            className="section__card-img"
          />
          <div>
            <span className="section__gradus section__gradus-light">15</span>
            <span className="section__gradus section__gradus-dark">15</span>
          </div>
        </div>
        <div className="section__card">
          <h3 className="section__card-title">Sun</h3>
          <img
            src="https://cdn.pixabay.com/photo/2018/05/02/18/23/landscape-3369304__340.jpg"
            alt="weather"
            className="section__card-img"
          />
          <div>
            <span className="section__gradus section__gradus-light">15</span>
            <span className="section__gradus section__gradus-dark">15</span>
          </div>
        </div>
        <div className="section__card">
          <h3 className="section__card-title">Sun</h3>
          <img
            src="https://cdn.pixabay.com/photo/2018/05/02/18/23/landscape-3369304__340.jpg"
            alt="weather"
            className="section__card-img"
          />
          <div>
            <span className="section__gradus section__gradus-light">15</span>
            <span className="section__gradus section__gradus-dark">15</span>
          </div>
        </div>
        <div className="section__card">
          <h3 className="section__card-title">Sun</h3>
          <img
            src="https://cdn.pixabay.com/photo/2018/05/02/18/23/landscape-3369304__340.jpg"
            alt="weather"
            className="section__card-img"
          />
          <div>
            <span className="section__gradus section__gradus-light">15</span>
            <span className="section__gradus section__gradus-dark">15</span>
          </div>
        </div>
        <div className="section__card">
          <h3 className="section__card-title">Sun</h3>
          <img
            src="https://cdn.pixabay.com/photo/2018/05/02/18/23/landscape-3369304__340.jpg"
            alt="weather"
            className="section__card-img"
          />
          <div>
            <span className="section__gradus section__gradus-light">15</span>
            <span className="section__gradus section__gradus-dark">15</span>
          </div>
        </div>
        <div className="section__card">
          <h3 className="section__card-title">Sun</h3>
          <img
            src="https://cdn.pixabay.com/photo/2018/05/02/18/23/landscape-3369304__340.jpg"
            alt="weather"
            className="section__card-img"
          />
          <div>
            <span className="section__gradus section__gradus-light">15</span>
            <span className="section__gradus section__gradus-dark">15</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default SectionBlock;
