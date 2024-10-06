import React  from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(fas);


function Cards({characters}) {
  console.log(characters.data)
    return (
      <div className="overflow-x-auto" >

        <div className="d-flex">
        {characters.map(character => (
          <div key={character.uid} className="card" style={{width: "18rem"}}>
          <div className="card-body">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..." />
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">Gender: {character.gender}</p>
            <p className="card-text">Hair Color: {character.hair_color}</p>
            <p className="card-text">Eye Color: {character.eye_color}</p>
            <div className="d-flex justify-content-between">
            <Link to={character.url} className="btn btn-primary">Leer más...</Link>
            <Link to={character.url} className="btn btn-outline-warning justify-content-end"><FontAwesomeIcon icon={faHeart} /></Link>
            </div>
          </div>
        </div>
        ))}
        
      </div>
        </div>
    );
  }
  export default Cards;
  