import React, { useState, useEffect } from 'react'


function movies() {

}

function handleSubmit() {

}

function movie() {

}

function handleChange() {

}

function createMovie() {

}


export default function Movies() {
    const [movies, setMovies] = useState([]);
    const moviesList = movies.map(movie => <li>{movie.title}</li>);

  useEffect(()  => {
      console.log('fetching...')
      fetch('http://127.0.0.1:9393/movies')
      .then(r => r.json())
      .then(Response => setMovies(Response));
    }, [])
   
    fetch("http://127.0.0.1:9393/movies", {
      method: `POST`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movies),
    }).then((response) => response.json());

    
    function handleSubmit(e) {
        e.preventDefault()
        createMovie(movie)
    } 



    return(
        <div>
            <h2>Create New Movie</h2>
            <form onSubmit={handleSubmit}>
            <input name="name" value={movie.name} onChange={handleChange} />
            <input name="location" value={movie.location} onChange={handleChange} />
            <button type="submit">Create Movie</button>
            </form>
</div>

//update






    );
}
        

        

    
       


    
       