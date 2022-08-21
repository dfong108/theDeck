import { useState, useEffect } from "react";
import { Routes } from "react-router-dom";

import axios from "axios";


import MovieCard from './components/MovieCard';

import { BsSearch } from "react-icons/bs";

const moviesURL = "https://www.omdbapi.com/";
const apiKey = process.env.REACT_APP_OMDB_API_KEY;



const Home = () => {
  const [showFavorites, setShowFavorites] = useState(true);
  const [foundMovies, setFoundMovies] = useState();
  const [query, setQuery] = useState("");


  const fetchMovies = async () => {
    const response = await axios.get(`${moviesURL}?apikey=${apiKey}&S=${query}`)
    
    console.log(response.data.Search)

      setFoundMovies(response.data.Search)

  };


  return (
    <div className="grid grid-cols-12 border-2 w-[100vw] h-[100vh]">
      {/* ----- FAVORITES ----- */}
      <aside
        id="favorites"
        className={
          showFavorites
            ? " col-start-1 col-span-3 row-span-6  flex flex-col rounded border-2 border-orange"
            : "hidden"
        }
      >
        <span className="flex justify-center p-2 w-full text-xl bg-gray-800/40">
          <h3>Favorites</h3>
        </span>
      </aside>


      <div className="flex flex-col col-start-4 col-span-9 row-span-6 bg-gray-800 space-y-4 ">

        <div className="flex justify-around items-center h-20 p-2 col-span-9 row-start-1 text-black">
          <input
            type="text"
            className="w-[80%] text-[1.5rem] font-serif text-black rounded px-2"
            placeholder="Search Movies"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            // onChange={(e) => handleSearch(e)}
          />
          {/* --- Search Bar */}
          <div
            className="flex justify-center items-center h-10 w-10 cursor-pointer"
            onClick={fetchMovies}
          >
            <BsSearch size={25} style={{ color: "orange" }} />
          </div>
        </div>

        {/* ----- RESULT ----- */}
          <div className="flex flex-wrap justify-evenly p-4 w-full h-[100vh]  text-white overflow-scroll">
            {foundMovies?.map((movie, i) => (
              <MovieCard movie={movie} key={i} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default Home;
