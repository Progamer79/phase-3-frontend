import React, {useState} from 'react'

export default function AddDirector() {
    const [director, setDirector] = useState({title: "", year: "", rating: ""})

    function handleChange(e) {
        const updatedValue = {...director}
        updatedValue[e.target.name] = e.target.value
        setDirector(updatedValue)
    }

    
        function handleSubmit(e) {
            e.preventDefault();
            fetch("http://127.0.0.1:9393/directors", {
              method: "POST",
              body: JSON.stringify(director),
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((json) => setDirector([...director, json]));
        
            // PESSIMISTIC RENDERING
          console.log(director)
    } 


    return (
        <div>
            <h2>Create New director</h2>
            <form onSubmit={handleSubmit}>
                <input name="title" value={director.name} onChange={handleChange} />
               
                
                <button type="submit">Create director</button>
            </form>
        </div>
    )
}
