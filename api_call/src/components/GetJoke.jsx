import React, { useState, useEffect } from "react";
import axios from "axios";

export default function JokeApp() {
  const [joke, setJoke] = useState([]);
  const fetchJoke = async () => {
    const response = await axios("https://v2.jokeapi.dev/joke/Any?type=single");
    console.log(response);
    setJoke(response.data);
  };
  useEffect(() => {
    fetchJoke();
  }, []);
  return (
    <div className="joke">
      <h3 className="joke-single">{joke.joke}</h3>
      <div className="container-btn">
        <button id="btn-more" onClick={fetchJoke}>
          Get new joke
        </button>
      </div>
    </div>
  );
}
