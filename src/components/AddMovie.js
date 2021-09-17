import React, {useState} from 'react'

export default function AddMovie() {
    const [movie, setMovie] = useState({title: "", year: "", rating: ""})

    function handleChange(e) {
        const updatedValue = {...movie}
        updatedValue[e.target.name] = e.target.value
        setMovie(updatedValue)
    }

    
        function handleSubmit(e) {
            e.preventDefault();
            fetch("http://127.0.0.1:9393/movies", {
              method: "POST",
              body: JSON.stringify(movie),
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((json) => setMovie([...movie, json]));
        
            // PESSIMISTIC RENDERING
          console.log(movie)
    } 


    return (
        <div className="NewMovie">
            <h2>Create New movie</h2>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Title .." value={movie.title} onChange={handleChange} />
                <input name="year" placeholder="year .."  value={movie.year} onChange={handleChange} />
                <input name="rating" placeholder="rate .." value={movie.rating} onChange={handleChange} />

                <button className="btn btn-outline-success" type="submit">Create movie</button>
            </form>
        </div>
    )
}