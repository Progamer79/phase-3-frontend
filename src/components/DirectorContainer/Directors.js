import React, { useState, useEffect } from 'react'


function handleSubmit(e) {
  e.preventDefault();
}

function director() {

}

function handleChange() {

}

function handleDeleteDirector() {

}

function createDirector() {

}



export default function DirectorContainer() {
    const [directors, setDirectors] = useState([]);
    const directorsList = directors.map(director => <li>{director.name}</li>);

  useEffect(()  => {
      console.log('fetching...')
      fetch('http://127.0.0.1:9393/directors')
      .then(r => r.json())
      .then(directorsRes => setDirectors(directorsRes));
  }, [])


  fetch("http://127.0.0.1:9393/movies", {
      method: `POST`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(directors),
    }).then((response) => response.json());


    <button onClick={() => createDirector(director)}>create Director</button>


    return (
      <div>
      <h2>Create New Director</h2>
      <form onSubmit={handleSubmit}>
      <input name="name" value={director.name} onChange={handleChange} />
      <input name="location" value={director.location} onChange={handleChange} />
      <button type="submit">Create Director</button>
     </form>
      </div>
     
    )
}

