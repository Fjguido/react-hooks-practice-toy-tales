import React from "react";
import ToyCard from "./ToyCard";
function ToyContainer({toys, deleteToy, updateLike}) {
const toyList = toys.map(toy => { 
  return <ToyCard 
  key={toy.id} 
  id={toy.id} 
  name={toy.name} 
  image={toy.image} 
  likes={toy.likes} 
  deleteToy={deleteToy}
  updateLike={updateLike}
  />
});
  return (
    <div id="toy-collection">{toyList}</div>
  );
}
export default ToyContainer;
