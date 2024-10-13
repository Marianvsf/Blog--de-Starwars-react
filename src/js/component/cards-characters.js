import React, { useContext }  from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";

library.add(fas);


function Cards({characters}) {
  const { store, actions } = useContext(Context);
  const personajes = store.characters

  const isFavorite = (item) => {
    return store.favorites.some((favorite) => favorite.uid == item.uid && favorite.type == item.type)
  };

  const handlerClick = (item) => {
    if (isFavorite(item)){
      actions.removeFavorite(item)
    }
    else {
      actions.addFavorite(item)
    }
  }

  function imageError(e) {
    e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
  } 
    return (
      <div className="overflow-x-auto" >

        <div className="d-flex">
        {characters.map(character => {
          const favoriteClass = isFavorite({"uid": character.uid, "type": "personajes"}) ? 'btn-danger' : 'btn-outline-warning';
          return (
          <div key={character.uid} className="card" style={{width: "18rem"}}>
          <div className="card-body">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} onError={imageError} className="card-img-top" alt="..." />
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">Gender: {character.gender}</p>
            <p className="card-text">Hair Color: {character.hair_color}</p>
            <p className="card-text">Eye Color: {character.eye_color}</p>
            <div className="d-flex justify-content-between">
            <Link to={`/learnMoreCardcharacters/${character.uid}`} className="btn btn-primary">Lean more...</Link>
            <button className={`btn ${favoriteClass}`}
            onClick={() => handlerClick({"name": character.name, "uid": character.uid, "type": "personajes"})}>
              <FontAwesomeIcon icon={faHeart} /></button>
            </div>
          </div>
        </div>
        )})}
      </div>
        </div>
    );
  }
  export default Cards;
  