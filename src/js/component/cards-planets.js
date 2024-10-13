import React, {useContext}  from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";

library.add(fas);


function CardsPlanets({planets}) {
  const { store, actions } = useContext(Context);
  const planetas = store.planets

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
        {planets.map(planet => {
          const favoriteClass = isFavorite({"uid": planet.uid, "type": "planetas"}) ? 'btn-danger' : 'btn-outline-warning';
          return (
          <div key={planet.uid} className="card" style={{width: "18rem"}}>
          <div className="card-body">
            <div className="image-container" stylte={{}}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} onError={imageError} className="card-img-top" alt="..." />
            </div>
            <h5 className="card-title">{planet.name}</h5>
            <p className="card-text">Population: {planet.population}</p>
            <p className="card-text">Terrain: {planet.terrain}</p>
            <div className="d-flex justify-content-between">
            <Link to={`/learnMoreCardplanets/${planet.uid}`} className="btn btn-primary">Learn more...</Link>
            <button className={`btn ${favoriteClass}`}
            onClick={() => handlerClick({"name": planet.name, "uid": planet.uid, "type": "planetas"})}>
              <FontAwesomeIcon icon={faHeart} /></button>
            </div>
          </div>
        </div>
        )})}
      </div>
        </div>
    );
  }
  export default CardsPlanets;
  