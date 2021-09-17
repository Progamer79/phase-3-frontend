import React, { useEffect, useState } from "react";
import Rating from "./RateMovie";
export default function Movies() {
  const [movies, setMovies] = useState([]);

 const handledelete =(id)=>{
    
        let movie;
        const mov = { ...movies };
    
        try {
          fetch("http://127.0.0.1:9393/movies/" + id, {
            method: "DELETE",
          });
          movie = movies.filter((pos) => pos.id !== id);
          setMovies(movie);
        } catch (ex) {
          setMovies(mov);
        }
      };

 

  useEffect(() => {
    fetch("http://127.0.0.1:9393/movies")
      .then((response) => response.json())
      .then((listmovies) => {
        setMovies(listmovies);
      });
  }, []);
  return (
    <>
      <h2>List of movies</h2>
      <div className="container">
        {movies.map((movie, key) => (
          <>
            <div className="element" key={movie.id}>
              <div className="card" key={movie.id}>
                <h5 className="card-title" key={movie.id}>
                  {movie.title}
                </h5>

                <p className="card-text" key={movie.id + "p"}>
                  {movie.year}
                </p>

               
                <p className="card-text" key={movie.id + "p"}>
                  <Rating id={movie.id}/>
                </p>
                <button onClick={() =>handledelete(movie.id)}>Delete</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
