import React,{useState} from "react";

function ToyForm({addNewToy}) {

  const [toyForm, setToyForm] = useState({
    name:'',
    image:'',
    likes:'',
  })

  function handleChange(e){
    setToyForm({... toyForm, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    const newToy = {
      name:toyForm.name,
      image: toyForm.image,
      likes: toyForm.likes,
    }
    
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {"Content-type" : "application/JSON"}, body: JSON.stringify(newToy)
    }
    )
    .then(r=>r.json())
    .then(addNewToy)
    
  }

  return (
    <div className="container">
      <form  onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyForm.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyForm.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          
        />
      </form>
    </div>
  );
  
  }
export default ToyForm;
