import React from "react";

function ToyCard({id, name, image, likes, deleteToy, updateLike}) {

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method:"DELETE"
    })
    .then(r=>r.json())
    .then(deleteToy(id))
  }

  function handleLike(){
    const likeCount = {
      likes: likes+1
    }
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type" : "application/json" }, body: JSON.stringify(likeCount)
    })
    .then(r=>r.json())
    .then(data => updateLike(data))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLike} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
